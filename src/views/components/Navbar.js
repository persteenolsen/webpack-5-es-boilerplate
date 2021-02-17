import webpackLogo from './../../images/favicon.png';

let Navbar = {
    render: async () => {
        let view =  /*html*/ 
		
		`
			        
		 <nav class="navbar navbar-expand-lg navbar-light">
		 		  
		   <a class="navbar-brand" href="#">
             <img width="50" alt="Per Steen Olsen" src="${webpackLogo}" />
           </a>
		  
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"  aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
		 
         <div class="collapse navbar-collapse" id="navbarNav">
		
         <ul class="navbar-nav">
		 
           <li class="nav-item active">
              <a class="nav-link" href="/#/">Home <span class="sr-only">(current)</span></a>
           </li>
		   
           <li class="nav-item">
             <a class="nav-link" href="/#/about">About this App</a>
           </li>
		   
           <li class="nav-item">
             <a class="nav-link" href="/#/myinfo">Per Steen Olsen</a>
           </li>
		   
		    <li class="nav-item">
              <a class="nav-link" href="/#/listposts">Web API</a>
           </li>
		   
           <li class="nav-item">
              <a class="nav-link" href="/#/secret">Secret</a>
           </li>
         
 		 </ul>
       </div>
      </nav>
	  
	  `
      return view
    },
    after_render: async () => { }

}

export default Navbar;