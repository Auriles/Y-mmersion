import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/Store";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import setAuthorizationToken from "./utils/setAuthorizationToken";
import jwtDecode from "jwt-decode";
import { setCurrentUser } from "./redux/actions/authentication";
import Routes from "./routes";

if (localStorage.jwtToken) {
    setAuthorizationToken(localStorage.jwtToken);
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
