
const message = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Resolving an asynchronous request in a promise!'), 3000)
})


function getUsers( onSuccess ) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Handle resolve and reject in the asynchronous API
      if (onSuccess) {
        resolve([
          { id: 1, name: 'Jerry' },
          { id: 2, name: 'Elaine' },
          { id: 3, name: 'George' },
        ])
      } else {
        reject('Failed to fetch data!')
      }
    }, 5000)
})}

export { getUsers, message };

