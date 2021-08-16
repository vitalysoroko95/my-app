import * as axios from "axios";


const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {"API-KEY": "ca9c4ec8-37c3-4650-8743-62f5aae466a6"}
    }
);


export const usersAPI = {
     getUsers(currentPage = 1, pageSize = 10) {

        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    }
}
