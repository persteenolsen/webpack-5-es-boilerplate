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


let ListPosts = {
    render : async () => {
        let posts = await getPostsList()
        let view =  /*html*/`
           
		   <section class="section">
			
                <h1>The result of a GET Request towards a test Web API</h1><br />
                
				<div class='table-responsive'>
				  
				 <table class='table table-striped'>
				
				  <thead>
                    <tr>
                        
                        <th style='width: 10%'>Id</th>
						<th style='width: 10%'></th>
                        <th style='width: '80%'>Title</th>
                        
                    </tr>
                  </thead>
                  <tbody>
				  
					<!--
					Note: The loop is generating an empty row which will be removed by the join statement for making the class table-triped work -->			
                    ${ posts.map( post => 
					
					`<tr><td> ${post.id}</td><td> <a href="#/editposts/${post.id}">Edit</a></td><td><a href="#/posts/${post.id}"> ${post.title} </a></td><tr/>` 
					
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