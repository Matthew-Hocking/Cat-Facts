import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1'

// *** EXAMPLE ***
export function getWelcome () {
  return request
    .get(`${serverURL}/welcome`)
    .then(response => response.body)
}
// ***   ***   ***

export function getFact() {
  return request
  .get('https://catfact.ninja/fact')
  .then(response => response.body.fact)
  .catch(error => {console.error(error)})
}