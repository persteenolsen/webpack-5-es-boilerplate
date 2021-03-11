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

let PostShow = {

    render : async () => {
        let request = Utils.parseRequestURL()
        let post = await getPost(request.id)
        
        return /*html*/`
            <section class="section">
			
                <h1>The selected Post from the Web API</h1>
				
				 <br />
			     You selected a Post with Id: <b>${post.id}</b>
			     <br /> <br />
			 
			    <a href='/#/listposts' target_'top' >Show the 10 Posts again</a>
			    <br /><br />
								
				<div class="table-responsive">
           
		          <table class="table table-striped">
                    <thead>
                      <tr>
                        
                        <th style='width: 20%'>Id</th>
                        <th style='width: 40%'>Title</th>
						<th style='width: 40%'>Body</th>
                        
                       </tr>
                     </thead>
                    <tbody>
								                         
						<tr>
                            <td>${post.id}</td>
                            <td>${post.title}</td>
							<td>${post.body} </td>

                        </tr>
                   					
					</tbody>
				 </table>
				
              </div>
			               
            </section>
        `
    }
    , after_render: async () => {
    }
}

export default PostShow;