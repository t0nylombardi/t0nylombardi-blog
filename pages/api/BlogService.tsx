import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3010/api/v1',
  headers: {
    'Content-type': 'application/json',
  },
});

const getAll = () => {
  return http.get('/posts');
};

const get = (id: number) => {
  return http.get(`/posts/${id}`);
};

export default {
  getAll,
  get,
};
