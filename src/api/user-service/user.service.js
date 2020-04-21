import Http from '../Http'

// const setAuthHeader = {
//   'Content-Type': 'application/json;charset=UTF-8',
//   'Access-Control-Allow-Origin': '*'
// }

const resource = '/users'

export default {
  get () {
    return Http.get(`${resource}`)
  }
}
