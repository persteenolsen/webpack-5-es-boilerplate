import jsLogo from './../../images/js.png';

let Home = {
    render : async () => {
        let view =  /*html*/ 
		
		  `<section class="section">
			
                <h1>Welcome</h1>
				
				<br />
				
				<img width="150" alt="JS - ES" src="${jsLogo}" />
				
				<br />
				
				<h2>Webpack 5 configured from scratch to serve modern JavaScript</h2>
				
            </section>`
			
        return view
    },
    after_render: async () => {}
        
}

export default Home;