import { GET_MY_SALES, GET_ALL_STATS } from "../../utils/CONST";

const initialState = {
    isLoaded: false,
    sale: {},
    sales: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_STATS:
            return { ...state, isLoaded: true, sales: action.payload };
        case GET_MY_SALES:
            return { ...state, isLoaded: true, sales: action.payload };
        default:
            return state;
    }
};
