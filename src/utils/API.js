import axios from 'axios';
const TOKEN = 'token';

export default axios.create({
  baseURL: 'http://localhost:3001',
  headers: { Authorization: `Bearer ${localStorage.getItem(TOKEN)}` },
});
