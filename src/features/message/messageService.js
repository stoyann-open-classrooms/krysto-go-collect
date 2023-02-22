import axios from 'axios'
const API_URL =  process.env.REACT_APP_BASE_URL + '/messages'

const getMessages = async () => {
  const response = await axios.get(`${API_URL}`)
  return response.data
}
const getMessage = async (messageId) => {
  const response = await axios.get(`${API_URL}/${messageId}`)
  return response.data
}
const closeMessage = async (messageId) => {
  const response = await axios.put(`${API_URL}/${messageId}`, {status: "Archived"})
  return response.data
}



const messageService = {
  getMessages,
  getMessage,
  closeMessage
}

export default messageService