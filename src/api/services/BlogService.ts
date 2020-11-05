import http from "../http-common";

const getAll = () => {
  return http.get("/posts");
};

const get = (id: number) => {
  return http.get(`/posts/${id}`);
};

export default {
  getAll,
  get
};