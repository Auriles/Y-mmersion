import { SET_TEXTS } from '../../utils/CONST';
import axios from "axios";

export const setTexts = (texts) => {
    return {
        type: SET_TEXTS,
        texts
    }
}

export const getTexts = () => {
    return dispatch => {
        return axios.get("/api/texts/").then(res => {
            dispatch(setTexts(res.data.texts));
        });
    };
};

export const updateText = (key, text) => {
    return dispatch => {
        return axios.post("/api/texts", {[key]:text}).then(res =>{
            dispatch(getTexts());
        })
    }
}
