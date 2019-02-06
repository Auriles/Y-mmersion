import axios from "axios";

export const getUsers = () => {
    return axios.get("/api/users/").then(res => {
        return res.data;
    });
};

export const getUser = userId => {
    return axios.get(`/api/users/${userId}`).then(res => {
        return res.data;
    });
};

export const deleteUser = userId => {
    return axios.delete("/api/users/delete/" + userId).then(res => {
        return res.data;
    });
};

export const signUp = data => {
    return axios.post("/api/users/", data).then(res => {
        return res.data;
    });
};

export const editUser = (userId, data) => {
    return axios.put("/api/users/edit/" + userId, data).then(res => {
        return res.data;
    });
};
