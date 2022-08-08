import axios from "axios";

const BASE_URL = "https://my-expense-meter.herokuapp.com/api/v1/"

const login = async (userData) => {

    // console.log("userData",userData);
    // const axiosConfig = {
    //     headers: {"Content-Type": "application/json" }
    // }
    const response = await axios.post(`${BASE_URL}login`,userData);

    // console.log("res",response);
    return response.data;
}

const authServise =   { login };

export default authServise;