 
 // Testing global scope
 window.hi = function( a ) {
 
 // Preventing message onload !
 if( a != null )
    alert('Hello ' + a );
}
 export default hi();

