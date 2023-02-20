import axios from 'axios'
const API_URL = 'http://localhost:8080/krysto-go/api/v1/collectPoints'

const getCollectPoints = async () => {
  const response = await axios.get(`${API_URL}`)
  return response.data
}
const getCollectPoint = async (collectPointId) => {
  const response = await axios.get(`${API_URL}/${collectPointId}`)
  return response.data
}



const collectPointService = {
  getCollectPoints,
  getCollectPoint,
}

export default collectPointService