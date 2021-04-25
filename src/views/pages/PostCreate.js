import Utils        from './../../services/Utils.js'


window.createPost = function(){
	
	 // Getting the values from GUI
	 var title = document.getElementById("titleInput").value;
	 var body = document.getElementById("bodyTextarea").value;
	
	 alert( 'Input Submit:\r\n\r\n' + title + '\r\n\r\n' + body );
	
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
			
                <h2>Create simulation of a new Post</h2>
				
				<br /> 
				
			    <a href='/#/listposts' target_'top' >Show the 10 Posts again</a>
			    <br /><br />
								
				<div class="table-responsive">
				      
                     <b>Id:</b><br/>					  
                     <p id='idp'></p>
					 
					 <b>Title:</b><br/>
                     <input id='titleInput' size='25' type='text' value='Enter a title'>
					 
					 <br /><br />
				     <b>Body:</b><br/>
					 <textarea id='bodyTextarea' cols='30' rows='4'>Enter content</textarea>
                      
                     <br /><br />					  
					 <button type="button" class="btn btn-warning custom-text-color-button" onclick="createPost()">Create</button>
                
				</div>
			               
            </section>
        `
    }
    , after_render: async () => {
    }
}

export default PostCreate;