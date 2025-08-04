import { STAGE, API_URL as PRO_API_URL, API_URL_ANDROID } from "@env";
import axios from "axios";
import { StorageAdapter } from "../adapters/storage-adapter";

export const API_URL = 
    (STAGE==='prod')
    ?   PRO_API_URL
    :   API_URL_ANDROID

const tesloApi = axios.create({
    baseURL:API_URL_ANDROID,
    headers: {
        "Content-Type":"application/json"
    }
});

tesloApi.interceptors.request.use(
    async (config) => {
        const token = await StorageAdapter.getItem('token');
        if(token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config;
    }
)

export {
    tesloApi
}   