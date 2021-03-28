import * as axiosClient from "../api/axiosClient";

export const getUsers = (url) => {
    return axiosClient.getRequest(url);
}