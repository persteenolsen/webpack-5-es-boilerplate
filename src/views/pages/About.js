let About = {
    render : async () => {
        let view =  /*html*/
		`
            <section class="section">
			
			            		  
                <h1>Description</h1><br />
  
                This single page application was made in plain JavaScript with a Webpack 5 configuration
                <br/> <br/>
				
                <b>Last Updated</b>  <br />
                16-03-2021 <br /> <br />
                
				
                <b>Main functionality</b> <br />
                				                 
			    Showing some of the power of Webpack <br />
                Showing routing without any framework or library <br />
				Handling 404 routing errors by a custom error page <br />
                Serving static assets like images, styles and fonts <br />
			    GET, POST, PUT and DELETE operations towards the test Web API <br /> <br />
               
			   
                <b>Module Bundler</b> <br />
                
                Manuel configuration of the Webpack 5 from scratch <br /> <br />
				
                
				<b>The single page application - The frontend</b> <br />
            
                PostCSS <br />
                HTML <br />
                Mainly JavaScript ES5, ES6 and ES7 <br />
                Bootstrap 4 by CDN for the responsive design <br /> <br />

            
                <b>The Web API - The backend</b> <br />
 
                The Web API is jsonplaceholder used for testing frontends <br /> <br />

                				
                <b>Security</b> <br />
             
                The only security is the use of HTTPS because it is a demo only <br /> <br />
				
				
				<b>Hosting</b> <br />
                The application is hosted at a traditionel Webhotel <br /> <br />
             

                <b>Text Editor</b> <br />
             
			    Visual Studio Code <br />
            			 
				
            </section>
        `
        return view
    },
    after_render: async () => {}
        
}

export default About;