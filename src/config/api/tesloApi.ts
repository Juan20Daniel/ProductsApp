import { STAGE, API_URL as PRO_API_URL, API_URL_ANDROID } from "@env";
import axios from "axios";

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

export {
    tesloApi
}   