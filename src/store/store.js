import { configureStore } from "@reduxjs/toolkit";

const initialState = {
    countries : [],
    lastFetch : null,
    currentUser : {}
}

//action : {type : ...  , value : ...}
// { type : login, value { name : "Matt", role : "admin" }}
// { type : logout}
// { type : updateCountries, value : ["a","b","c"]}

const reducer = (state = initialState, action) => {
    if (action.type === "updateCountries") {
        return {...state, countries : action.value, lastFetch: new Date().getTime() }
    } 
    if (action.type === "logout") {
        return {...state, currentUser : {}}
    }
    return state;
}

const store = configureStore({reducer : reducer});
export default store;