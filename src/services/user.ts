import axios from 'axios';
export const login = ({ username, password }: { username: string, password: string }) => {
  return axios.post('/v1/login', {
    username,
    password
  })
}

export const getUserInfo = () => {
  return axios.get('/v1/user')
}

export const logout = () => {
  return axios.post('/v1/logout')
}