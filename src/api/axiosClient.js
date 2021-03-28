import axios from "axios";

const BASE_URL = "https://reqres.in/api/";

export const getRequest = (url) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application-json',
    };
        return axios.get(BASE_URL+url, {headers});
}