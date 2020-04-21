import axios from 'axios'

export const baseURL = 'https://jsonplaceholder.typicode.com'

// export const Options = (method, url, data) => ({
//     method,
//     headers: setAuthHeader,
//     url,
//     data,
// })

export default axios.create({
  baseURL
})
