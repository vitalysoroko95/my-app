import * as axios from "axios";


const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "ca9c4ec8-37c3-4650-8743-62f5aae466a6"
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },

    unFollow(userId) {
        return instance.delete(`follow/${userId}`)
    },

}


export const profileAPI = {

    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },

    getStatus(userId){
        return instance.get(`profile/status/`+userId);
    },

    updateStatus(status){
        return instance.put(`profile/status`, {status});
    }
}


export const authAPI = {
    me() {
        return instance.get(`auth/me`);

    },

    login(email, password, rememberMe=false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },

    logout() {
        return instance.delete(`auth/login`);
    },


}