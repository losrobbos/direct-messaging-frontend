import axios from 'axios'

export const MESSAGE_SERVER_URL = process.env.REACT_APP_MESSAGE_SERVER_URL || "http://localhost:5000/"
// export const MESSAGE_SERVER_URL = process.env.MESSAGE_SERVER_URL

console.log("API URL: ", MESSAGE_SERVER_URL)

const axiosGlobal = axios.create({
  baseURL: MESSAGE_SERVER_URL
})

export default axiosGlobal
