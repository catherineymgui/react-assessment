import axios from "../config/axios";

export const candidatesService = () => {
  const url = "/candidates";
  return axios.get(url).then(response => {
    return response.data;
  });
};

export const getQuestionService = () => {
  const url = `/questions`;
  return axios.get(url).then(response => {
    return response.data;
  });
};

export const getApplicationService = id => {
  const url = `/applications?id=${id}`;
  return axios.get(url).then(response => {
    return response.data;
  });
};
