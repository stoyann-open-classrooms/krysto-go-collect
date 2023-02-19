import axios from "axios";
const API_URL = "http://localhost:8080/krysto-go/api/v1/auth/me";
const API_URL2 = "http://localhost:8080/krysto-go/api/v1/users";







const createUser = async (userData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  }
  const response = await axios.post(API_URL2, userData, config)
  return response.data
}


const getUsers = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  console.log(config);
  const response = await axios.get(`${API_URL2}`, config)
  return response.data
}


const getUser = async (userId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  console.log(config);
  const response = await axios.get(`${API_URL2}/${userId}`, config)
  return response.data
}


const getProfil = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      
    },
  };
  const response = await axios.get(`${API_URL}`, config);
  console.log(response);
  return response.data;
};



const userService = {
  getProfil,
  createUser,
  getUsers,
  getUser
};

export default userService;
