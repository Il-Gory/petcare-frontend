const TOKEN_KEY = "accessToken";

const getToken = () => {
    return localStorage.getItem(TOKEN_KEY);
}

export const isAuthenticated = () => {
    return !!getToken();
}

export const authHeaders = () => {
    return {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    }
}