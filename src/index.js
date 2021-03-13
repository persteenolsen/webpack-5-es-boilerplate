"use strict";

import Home         from './views/pages/Home.js';
import About        from './views/pages/About.js';
import Error404     from './views/pages/Error404.js';
import PostShow     from './views/pages/PostShow.js';
import ListPosts     from './views/pages/ListPosts.js';

import Navbar       from './views/components/Navbar.js';
import Bottombar    from './views/components/Bottombar.js'; 

import Utils        from './services/Utils.js';

import MyInfo        from './views/pages/MyInfo.js'

import PostEdit     from './views/pages/PostEdit.js';

// Note: For now the js logo is only loaded from the Home page
// import jsLogo from './images/js.png';

// Test import of styles
import './styles/index.scss';


// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
	
    '/'             : Home
    , '/about'      : About
	, '/myinfo'      : MyInfo
	, '/listposts'      : ListPosts
    , '/posts/:id'      : PostShow
	, '/editposts/:id'      : PostEdit
   
};

	 
// The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
const router = async () => {

	 	 
    // Lazy load view element:
    const header = null || document.getElementById('header_container');
    const content = null || document.getElementById('page_container');
    const footer = null || document.getElementById('footer_container');
    
    // Render the Header and footer of the page
    header.innerHTML = await Navbar.render();
    await Navbar.after_render();
    footer.innerHTML = await Bottombar.render();
    await Bottombar.after_render();


    // Get the parsed URl from the addressbar
    let request = Utils.parseRequestURL()

    // Parse the URL and if it has an id part, change it with the string ":id"
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
    
    // Get the page from our hash of supported routes.
    // If the parsed URL is not in our list of supported routes, select the 404 page instead
    let page = routes[parsedURL] ? routes[parsedURL] : Error404
    content.innerHTML = await page.render();
    await page.after_render();
	
	  
}

// Note: For now the js logo is only loaded from the Home page
// Loading JS logo
const loadimage = () => {
    
  // Appending to the DOM
  const logo = document.createElement('img');
  logo.width = "150";
  logo.src = jsLogo;
  
  const imgcontainer = document.getElementById('image_container');
  imgcontainer.append( logo );

}


// Note: For now the js logo is only loaded from the Home page
// Loading JS logo on pageload
// window.addEventListener('load', loadimage );

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);

