import qs from 'qs'  // library to create query string for URL
// this library takes an object and turns it into a query string
// below, the constant querystring is an object w two properties.
// qs will turn these two properties into a properly formed query string
//  for use in forming the URL to which the user will be directed

const CLIENT_ID = 'CLIENT_ID_HERE'
const ROOT_URL = 'https://api.imgur.com'

export default {
  login() {
    const querystring = {
      client_id: CLIENT_ID,
      response_type: 'token'
    }
    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`
  }
}