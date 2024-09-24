import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const searchUsers = async (query: string) => {
  const response = await axios.get(`${BASE_URL}/search/users`, {
    params: { q: query }
  });
  return response.data.items;
};

export const searchRepos = async (query: string) => {
  const response = await axios.get(`${BASE_URL}/search/repositories`, {
    params: { q: query }
  });
  return response.data.items;
};
