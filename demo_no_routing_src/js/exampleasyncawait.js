async function getUser() {
  
  try {
	  
    // Handle success in try
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data = await response.json()
    
	// Returning a json object 
    return data;
	
  } catch (error) {
	  
    // Handle error in catch
    return error;
  }
}

export { getUser };

