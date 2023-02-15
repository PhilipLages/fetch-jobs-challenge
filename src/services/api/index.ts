import axios from 'axios';

// Define a base axios const, avoiding the need to write the URL more than once
const api = axios.create({
  baseURL: 'https://www.zippia.com/api/jobs/'
})

export default api;