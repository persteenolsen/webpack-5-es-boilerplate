import jsLogo from './../../images/js.png';

let Home = {
    render : async () => {
		
        let view =  /*html*/ 
		
		  `<section class="section">
			
                <h2>Welcome</h2>
				
				<br />
				
				<img width="150" alt="JS - ES" src="${jsLogo}" />
				
				<br />
				
				<!--Test-->
				<!--<p><span class="test">Hey dude...</span></p>-->
				
				<h2>Webpack 5 configured from scratch to serve modern JavaScript</h2>
				
            </section>`
			
        return view
    },
    after_render: async () => {}
        
}

export default Home;