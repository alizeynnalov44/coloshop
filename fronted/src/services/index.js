import axios from "axios";
import { BASE_URL } from "./constant";

export async function getAllData() {
  try {
    const response = await axios(`${BASE_URL}/Shouses`);

    return response;
  } catch (error) {
    console.log(error);
  }
}
export async function getDataById(id) {
  try {
    const response = await axios(`${BASE_URL}/Shouses/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function addNewData(payload) {
  try {
    const response = axios.post(`${BASE_URL}/Shouses`, payload);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteDataById(id) {
  try {
    const response = axios.delete(`${BASE_URL}/Shouses/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}