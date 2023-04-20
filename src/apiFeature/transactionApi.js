import axios from "axios";

const addTransaction = async (data) => {
    axios.defaults.withCredentials = true;
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}transaction/add`, data);

    return response.data;
}

const getAllTransaction = async () => {
    axios.defaults.withCredentials = true;
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}transaction`);

    return response.data;
}

const transactionService = { addTransaction, getAllTransaction };

export default transactionService;