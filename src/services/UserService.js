import axios from 'axios'

const APP_URL = process.env.REACT_APP_API_ENDPOINT

const login = (values) => {
  const { email, password } = values
  return axios
    .post(
      APP_URL + '/login',
      { username: email, password: password },
      { withCredentials: true }
    )
    .then((response) => {
      return response
    })
    .catch((error) => {
      console.log(error)
      return error
    })
}

const UserService = {
  login,
}

export default UserService
