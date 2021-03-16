import Utils        from './../../services/Utils.js'

let getPost = async (id) => {
    const options = {
       method: 'GET',
       headers: {
           'Content-Type': 'application/json'
       }
   };
   try {
       const response = await fetch(`https://jsonplaceholder.typicode.com/posts/` + id, options)
	   const json = await response.json();
	   
       // console.log(json)
       return json
   } catch (err) {
       console.log('Error getting documents', err)
   }
}


window.editPost = function(){
	
	 // Getting the values from GUI
	 var id = document.getElementById("idp").innerHTML;
	 var title = document.getElementById("titleInput").value;
	 var body = document.getElementById("bodyTextarea").value;
	
	//alert( id + '\r\n\r\n' +  title + '\r\n\r\n' + body );
	
	 // Making the PUT request to the web API
	 fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
     method: 'PUT',
     body: JSON.stringify({
        id: id,
        title: title,
        body: body,
        userId: id,
       }),
     headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
      })
	  // Getting the response from the Web API and convert it to json
     .then((response) => response.json())
     .then((json) => { 
	                 console.log(json);
					
					 alert( 'Response from the Web API:\r\n\r\nid: ' + json.id + '\r\n\r\ntitle: ' + json.title + '\r\n\r\nbody: ' + json.body );
					 
					 // Setting the GUI with the value returned from the Web API
					 document.getElementById("idp").innerHTML = json.id;
					 document.getElementById("titleInput").value = json.title;
					 document.getElementById("bodyTextarea").value = json.body;
					 });
	 
	
	
 } 

let PostEdit = {

    render : async () => {
        let request = Utils.parseRequestURL()
        let post = await getPost(request.id)
        
        return /*html*/`
            <section class="section">
			
                <h1>Edit simulation of the selected Post</h1>
				
				 <br />
			     Edit simulation of the Post with Id: <b>${post.id}</b>
			     <br /> <br />
			 
			    <a href='/#/listposts' target_'top' >Show the 10 Posts again</a>
			    <br /><br />
								
				<div class="table-responsive">
           
		          <table class="table table-striped">
                    <thead>
                      <tr>
                        
                        <th style='width: 10%'>Id</th>
                        <th style='width: 30%'>Title</th>
						<th style='width: 60%'>Body</th>
                        
                       </tr>
                     </thead>
                    <tbody>
								                         
						<tr>
                            <td><p id='idp'>${post.id}</p></td>
                            <td><input id='titleInput' size='12' type='text' value='${post.title}'></td>
							<td><textarea id='bodyTextarea' rows='5'>${post.body}</textarea></td>

                        </tr>
						
						<tr><td colspan='3'><button type="button" class="btn btn-warning custom-text-color-button" onclick="editPost()">Edit</button></tr>
                   					
					</tbody>
				 </table>
				
              </div>
			               
            </section>
        `
    }
    , after_render: async () => {
    }
}

export default PostEdit;