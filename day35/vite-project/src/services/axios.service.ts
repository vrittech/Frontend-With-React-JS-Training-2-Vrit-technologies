import axios from 'axios';
import { dataInterface, loginInterface } from '../interface/global.interface';

const BASE_URL = "http://localhost:8080/api/v1";

export const registerData = async (data: dataInterface) => {
    const response = await axios.post(`${BASE_URL}/register`, data);
    return response;
}

export const loginData = async (data: loginInterface) => {
    const response = await axios.post(`${BASE_URL}/login`, data);
    return response;
}