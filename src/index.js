// Test import of a JavaScript function - Text Heading H1
import { example } from './js/example'

// Import a function returning a promise
import { message } from './js/examplepromise'

// Import a function returning a promise
import { getUsers } from './js/examplepromise'


// Import a function returning a promise by async / await
import { getUser } from './js/exampleasyncawait'

// Test import of an asset
import webpackLogo from './images/webpack-logo.svg'

// Test import of styles
import './styles/index.scss'

// Appending to the DOM
const logo = document.createElement('img')
logo.src = webpackLogo

const heading = document.createElement('h1')
heading.textContent = example()

const resultpromise_one = document.createElement('div')
resultpromise_one.textContent = "Going to consume first promise  ... ";

// Consuming a Promise
message
.then( response => {
      resultpromise_one.textContent = response
})

const resultpromise_two = document.createElement('div')
resultpromise_two.textContent = "Going to consume second promise ... ";

// Consuming a promise inside a function with error handling true / false as arguments
// If resolved displaying the name first and last element of the returned object
getUsers(true)
  .then(response => {
	  
	resultpromise_two.innerHTML = 'Name from jsonplaceholder api: ' + response[0].name + ' - '
	resultpromise_two.innerHTML += response[2].name
   
  })
  .catch(error => {
    resultpromise_two.textContent = error
  })


const resultasyncawait_one = document.createElement('div')
resultasyncawait_one.textContent = "Going to consume first promise by async / await ... ";

// Note: Does work ! 
getUser()
.then( response => {
	
      resultasyncawait_one.innerHTML = '<br />Title from jsonplaceholder api: ' + '<br />' + response['title'] + '<br />'
	  resultasyncawait_one.innerHTML += '<br />Body from jsonplaceholder api: ' + '<br />' + response['body']
}) 


const app = document.querySelector('#root')
app.append( heading, logo, resultpromise_one, resultpromise_two, resultasyncawait_one)
