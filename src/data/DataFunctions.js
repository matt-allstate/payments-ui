import axios from "axios";



const headers = new Headers({"Accept" : "application/json"})

const getAuthHeader = (username, password) => {
    return {"Authorization" : "Basic " + btoa(`${username}:${password}`)}
}

export const getAllPaymentsFetchVersion = () => { 
    return fetch ("http://localhost:8080/api/payment", 
         {
            method: "GET",
            headers : headers            
        }
    )
}

export const getAllPaymentsAxiosVersion  = () => {
    return axios({url : "http://localhost:8080/api/payment",
            method: "GET", 
            headers: {"Accept" : "application/json"}
            })
}

export const getAllPaymentsForCountry  = (country, username, password) => {
    console.log("getallpaymentsforcountry")
    return axios({url : "http://localhost:8080/api/payment?country="+country,
            method: "GET", 
            headers: {"Accept" : "application/json", ...getAuthHeader(username, password)}
            })
}

export const getAllPaymentsForOrderId  = (orderId) => {
    return axios({url : "http://localhost:8080/api/payment?order="+orderId,
            method: "GET", 
            headers: {"Accept" : "application/json"}
            })
}

export const getCountries = ()  => {
    console.log("getcountries")
    return axios({url : "http://localhost:8080/api/country",
            method: "GET", 
            headers: {"Accept" : "application/json"}
            })
}
    
//add transaction:  POST /api/payment
//update            PUT /api/payment/142645

export const addNewTransaction = (payment) => {
    return axios({url : "http://localhost:8080/api/payment",
                    method: "POST",
                    headers: {"Accept" : "application/json", "Content-Type": "application/json"},
                    data : payment
                })
}

export const login = (username, password) => {
    return axios({url : "http://localhost:8080/api/login",
                    method: "POST",
                    headers: {...getAuthHeader(username,password),
                         "Accept" : "application/json", "Content-Type": "application/json"},
                         data: {username: username}
                    });
}