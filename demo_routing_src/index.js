import home from './home.js';
import about from './about.js'
import contact from './contact.js';
import error404 from './error404.js';

// Testing a function with a global scope
import hi from './hi.js';

// Testing a function with a global scope
const sayhi = () => {
	
    let ahi = document.getElementById('ahi');
	ahi.innerHTML = hi;
}

// Testing the function with the global scope 
window.addEventListener('unload', sayhi);


// Global EventListner able to catch event from the window / template.html. 
// Note: The following examples could be used:
// 1) window.addEventListener("click" /  document.addEventListener("click" / --> catch all clicks events 
// 2) window.outerdiv.addEventListener("click" --> catch the events from the element with id="outerdiv" and its child elements
// 3) window.innerdiv.addEventListener("click" --> catch the events from the specific element with id="innerdiv" 
window.outerdiv.addEventListener("click", function( event ){
	
    alert( "The id of the element fired the event: " + event.target.id );
	
});


//---------------------------------------------The App code begins------------------------------------------
// The Router
const routes = {
  '/' : home,
  '/contact' : contact,
  '/about' : about
};


// Loading the page matching the selected route by url
const rootDiv = document.getElementById('root');

// Display error-page if no page is matching a the router
rootDiv.innerHTML = routes[window.location.pathname] ? routes[window.location.pathname] : error404;

// This function is global because of window.OnNavigate and can be called from template.html
 window.onNavigate = function(pathname) {

  //alert('OnNavigate: ' + routes[pathname] );
  
  // For using the browsers back / forwars buttons
  window.history.pushState( {}, pathname, window.location.origin + pathname );
  
  // Loading the page which match the clicked link / route if exist else load error page
  rootDiv.innerHTML = routes[pathname] ? routes[pathname] : error404;
  
} 

// For using the browsers back / forwars buttons
window.onpopstate = () => {
  
  // Display error-page if no page is matching a the router if exist else load error page
  rootDiv.innerHTML = routes[window.location.pathname] ? routes[window.location.pathname] : error404;
}


/*const navBarList = document.getElementById('listnavbar');
navBarList.innerHTML += "<li id='listhome' class='navbar-item'><a href='#' onclick=\"onNavigate(\'/\'); return false;\">Home</a></li>"; 
navBarList.innerHTML += "<li id='listabout' class='navbar-item'><a href='#' onclick=\"onNavigate(\'/about\'); return false;\">About</a></li>"; 
navBarList.innerHTML += "<li id='listcontact' class='navbar-item'><a href='#' onclick=\"onNavigate(\'/contact\'); return false;\">Contact</a></li>"; 

navBarList.innerHTML += "<li id='listhi' class='navbar-item'><a id='ahi' href='#' onclick=\"hi('x'); return false;\">Click to Say Hi</a></li>"; 
*/



