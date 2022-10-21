import axios from "axios";

// const BASE_URL = "https://my-expense-meter.herokuapp.com/api/v1/"
// const BASE_URL = "http://localhost:4000/api/v1/"

axios.defaults.withCredentials = true;


const addTransaction = async (data) => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}transaction/add`, data);

    return response.data;
}

const getAllTransaction = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}transaction`);

    return response.data;
}

const transactionService = { addTransaction, getAllTransaction };

export default transactionService;