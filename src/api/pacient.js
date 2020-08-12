import axios from "axios";
// import qs from 'qs';

import config from "../config/config";

const pacientUrl = `${config.serverUrl}/pacient`;

export async function getPacients() {
  try {
    const { data } = await axios.get(`${pacientUrl}`);
    return data;
  } catch (err) {
    const { message } = err;
    throw new Error(message);
  }
}

export async function getPacient(pacientId) {
  try {
    const { data } = await axios.get(`${pacientUrl}/${pacientId}`);
    return data;
  } catch (err) {
    const { message } = err;
    throw new Error(message);
  }
}

export async function getPacientsByNameSurName(value) {
  try {
    const params = {
      text: value,
    };

    const { data } = await axios.get(`${pacientUrl}/search`, { params });
    return data;
  } catch (err) {
    const { message } = err;
    throw new Error(message);
  }
}
