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
	
	 alert( 'Input Submit:\r\n\r\n' + id + '\r\n\r\n' + title + '\r\n\r\n' + body );
	
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
					
			alert( 'Response from the Web API:\r\n\r\nid: ' + 
			json.id + '\r\n\r\ntitle: ' + 
			json.title + '\r\n\r\nbody: ' + 
			json.body );
					 
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
			
                <h2>Edit simulation of the selected Post</h2>
				
				 <br />
			     Edit simulation of the Post with Id: <b>${post.id}</b>
			     <br /> <br />
			 
			    <a href='/#/listposts' target_'top' >Show the 10 Posts again</a>
			    <br /><br />
								
				<div class="table-responsive">
           
		          <b>Id:</b><br/>
				  <p id='idp'>${post.id}</p>
                  
				  <b>Title:</b><br/>
				  <input id='titleInput' size='25' type='text' value='${post.title}'>
				  
				  <br /><br />
				  <b>Body:</b><br/>
				  <textarea id='bodyTextarea' cols='30' rows='4'>${post.body}</textarea>
                   
				  <br /><br />
                  <button type="button" class="btn btn-warning custom-text-color-button" onclick="editPost()">Edit</button>
                 				
              </div>
			               
            </section>
        `
    }
    , after_render: async () => {
    }
}

export default PostEdit;