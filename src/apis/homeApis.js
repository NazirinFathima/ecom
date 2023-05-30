import axios from "axios";

const url = "http://localhost:8080";

export async function getHomeCarousels(type) {
  const response = await axios.get(url + "/carousels/" + type);
  if (response && response.data) {
    return response?.data;
  }
  return null;
}
export async function getHomeProducts(type) {
  const response = await axios.get(url + "/products/" + type);
  if (response && response.data) {
    return response?.data;
  }
  return null;
}