import axios from "axios";

const signup = async (userData) => {
    axios.defaults.withCredentials = true;
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}createuser`, userData);
    localStorage.setItem('user', JSON.stringify(response.data));
    return response.data;
}

const login = async (userData) => {
    axios.defaults.withCredentials = true;
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}login`, userData, { withCredentials: true });
    localStorage.setItem('user', JSON.stringify(response.data));
    return response.data;
}

const logout = async () => {
    axios.defaults.withCredentials = true;
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}logout`);
    localStorage.removeItem('user');
    return response.data;
}
const authServise = { signup, login, logout };

export default authServise;