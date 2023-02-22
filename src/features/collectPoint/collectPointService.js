import axios from 'axios'
const API_URL = process.env.REACT_APP_BASE_URL + '/collectPoints'

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