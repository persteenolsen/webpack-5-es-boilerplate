import myLogo from './../../images/persteenolsen.jpg';

let MyInfo = {
    render : async () => {
        let view =  /*html*/
		    `<section class="section">
			
                <h1> Per Steen Olsen</h1>
				
				<br />
				
				<img width="150" alt="Per Steen Olsen" src="${myLogo}" />
				
            </section>`
        return view
    },
    after_render: async () => {}
        
}

export default MyInfo;