import axios from 'axios';
// import qs from 'qs';

import config from '../config/config';

const pacientUrl = `${config.serverUrl}/pacients`;

export async function getPacients() {
    try {
        const { data } = await axios.get(`${pacientUrl}`);
        return data;
    } catch (err) {
        const { message } = err;
        throw new Error(message);
    }
}
