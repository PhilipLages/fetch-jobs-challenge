import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.zippia.com/api/jobs/'
})

export default api;