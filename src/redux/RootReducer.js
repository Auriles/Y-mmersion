import { combineReducers } from "redux";
import app from "./reducers/app";
import auth from "./reducers/auth";
import sales from "./reducers/sales";
import texts from "./reducers/texts";
//Combine all reducers
export default combineReducers({
    app,
    auth,
    sales,
    texts
});
