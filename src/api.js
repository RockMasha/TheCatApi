import axios from "axios";
export const CAT_KEY = import.meta.env.VITE_CAT_KEY;

axios.defaults.baseURL = `https://api.thecatapi.com/v1/`;

let controller = null;
async function getCats(breed, page = 1) {
  if (controller) {
    controller.abort();
  }
  controller = new AbortController();
  const answer = await axios.get(
    `images/search?api_key=${CAT_KEY}${
      breed ? `&breed_ids=${breed}` : ``
    }&limit=10&page=${page}`,
    {
      signal: controller.signal,
      params: { has_breeds: 1 },
    }
  );
  controller = null;
  return answer.data;
}

async function getBreeds() {
  const answer = await axios.get(`/breeds`, {
    params: { has_breeds: 1 },
  });
  return answer.data;
}

const api = {
  getCats,
  getBreeds,
};
export default api;
