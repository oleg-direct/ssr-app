import axios from 'axios'

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

const instance = axios.create({
  baseURL: process.env.API_URL,
  headers: headers
})

instance.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default instance