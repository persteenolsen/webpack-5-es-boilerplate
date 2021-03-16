import Utils        from './../../services/Utils.js'


window.createPost = function(){
	
	 // Getting the values from GUI
	 var title = document.getElementById("titleInput").value;
	 var body = document.getElementById("bodyTextarea").value;
	
	//alert( id + '\r\n\r\n' +  title + '\r\n\r\n' + body );
	
	 // Making the POST request to the web API
	 fetch('https://jsonplaceholder.typicode.com/posts', {
     method: 'POST',
     body: JSON.stringify({
        title: title,
        body: body,
        userId: 1,
       }),
     headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
      })
	  // Getting the response from the Web API and convert it to json
     .then((response) => response.json())
     .then((json) => { 
	       console.log(json);
					
           alert( 'Response from the Web API:\r\n\r\nid: ' +
			      json.id + '\r\n\r\ntitle: ' + 
			      json.title + '\r\n\r\nbody: ' + 
			      json.body + '\r\n\r\nuserID: ' + 
				  json.userId );
					 
			// Setting the GUI with the value returned from the Web API
			// Note: The Id will be set with 101 simulating a new Post was created !
			document.getElementById("idp").innerHTML = json.id;
			document.getElementById("titleInput").value = json.title;
			document.getElementById("bodyTextarea").value = json.body;
	 });
 } 
 

let PostCreate = {

    render : async () => {
        let request = Utils.parseRequestURL()
               
        return /*html*/`
            <section class="section">
			
                <h1>Create simulation of a new Post</h1>
				
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
                            <td><p id='idp'></p></td>
                            <td><input id='titleInput' size='12' type='text' value='Enter a title'></td>
							<td><textarea id='bodyTextarea' rows='5'>Enter content</textarea></td>

                        </tr>
						
						<tr><td colspan='3'><button type="button" class="btn btn-warning custom-text-color-button" onclick="createPost()">Create</button></tr>
                   					
					</tbody>
				 </table>
				
              </div>
			               
            </section>
        `
    }
    , after_render: async () => {
    }
}

export default PostCreate;