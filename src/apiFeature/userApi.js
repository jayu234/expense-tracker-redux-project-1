import axios from "axios";
// import balanceSlice.actions from "../store/balanceSlice";
// const BASE_URL = "https://my-expense-meter.herokuapp.com/api/v1/"

axios.defaults.withCredentials = true;

const signup = async (userData) => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}createuser`, userData);
    localStorage.setItem('user', JSON.stringify(response.data));
    return response.data;
}

const login = async (userData) => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}login`, userData, { withCredentials: true });
    localStorage.setItem('user', JSON.stringify(response.data));
    return response.data;
}

const logout = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}logout`);
    localStorage.removeItem('user');
    return response.data;
}
const authServise = { signup, login, logout };

export default authServise;