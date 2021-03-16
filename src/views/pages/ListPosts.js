// --------------------------------
//  Define Data Sources
// --------------------------------

let getPostsList = async () => {
     const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10`, options)
        const json = await response.json();
        // console.log(json)
        return json
    } catch (err) {
        console.log('Error getting documents', err)
    }
}

// Simulate a delete operation of the selected Post from the Web API and removing the Post from the GUI
window.deletePost = function( id ){
	
	// Simulation of an error returned from the Web API	
	// fetch('https://jsonplaceholder.typicode.com/invalid-url', { method: 'DELETE' })
	fetch('https://jsonplaceholder.typicode.com/posts/' + id, { method: 'DELETE' })
        
		 .then(async response => {
             const data = await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }

            alert( 'The Post was deleted successfully !' );
            
			// Simulation of an delete operation by removing the selected Post from the GUI
			document.getElementById(id).outerHTML = "";
			
        })
        .catch(error => {
           
            console.error('There was an error!', error);
			alert( 'Following error was returned from the Web API: ' + error );
			
        });
		
	
 } 


let ListPosts = {
    render : async () => {
        let posts = await getPostsList()
        let view =  /*html*/`
           
		   <section class="section">
			
                <h1>The result of a GET Request towards a test Web API</h1><br />
                
				<div class='table-responsive'>
				  
				 <table id='tableOfPosts' class='table table-striped'>
				
				  <thead>
                    <tr>
                        
                        <th style='width: 10%'>Id</th>
						<th style='width: 10%'></th>
						<th style='width: 10%'></th>
                        <th style='width: '70%'>Title</th>
                        
                    </tr>
                  </thead>
                  <tbody>
				  
					<!--
					Note: The loop is generating an empty row which will be removed by the join statement for making the class table-triped work -->			
                    ${ posts.map( post => 
					
					`<tr id='${post.id}'>
					
					   <td>${post.id}</td>
					   <td><button type="button" class="btn btn-danger custom-text-color-button" onclick="deletePost(${post.id})">Delete</button></td>
					   <td> <a href="#/editposts/${post.id}">Edit</a></td>
					   <td><a href="#/posts/${post.id}"> ${post.title} </a></td>
					
					<tr/>` 
					
					).join('<tr></tr>') 
                    }
					
				</tbody>
                </table>
			  </div>
            </section>
        `
        return view
    }
    , after_render: async () => {
    }
	
}

export default ListPosts;