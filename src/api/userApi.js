import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.freeapi.app/api/v1/public',
});

export const fetchUsers = async () => {
  const res = await API.get('/randomusers');

  console.log(res.data); // check once

  return res.data.data.data; // adjust if needed
};
