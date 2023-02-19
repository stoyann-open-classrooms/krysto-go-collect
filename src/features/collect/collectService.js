import axios from 'axios'
const API_URL = 'http://localhost:8080/krysto-go/api/v1/collects'

const getCollects = async () => {
  const response = await axios.get(`${API_URL}`)
  return response.data
}
const getCollect = async (collectId) => {
  const response = await axios.get(`${API_URL}/${collectId}`)
  return response.data
}



const collectService = {
  getCollects,
  getCollect,
}

export default collectService