import axios from "axios";
import { GET_MY_SALES, GET_ALL_STATS } from "../../utils/CONST";

export const getAllSales = () => dispatch => {
    axios.get(`/api/sales/stats/all`).then(sales =>
        dispatch({
            type: GET_ALL_STATS,
            payload: sales.data
        })
    );
};
export const getMySales = saleId => dispatch => {
    axios.get(`/api/sales/user/${saleId}`).then(sales =>
        dispatch({
            type: GET_MY_SALES,
            payload: sales
        })
    );
};
