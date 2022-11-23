import TransactionsRow from "./TransactionsRow";
import './Transactions.css';
import { getAllPayments } from "../../data/DataFunctions";
import { useState } from "react";

const TransactionsTable = () => {

    const [payments, setPayments] = useState([]);
    const [isLoading, setIsLoading] = useState(0);
    //0 = we haven't yet requested the data
    //1 = we have requested the data but don't yet have it
    //2 = we have the data

    const headers = new Headers({"Accept" : "application/json"})

    const paymentsPromise = fetch ("http://localhost:8080/api/payment", 
         {
            method: "GET",
            headers : headers            
        }
    )

    if (isLoading === 0) {
        setIsLoading(1);
        paymentsPromise.then ( response => {
            if (response.ok) {
                console.log("everything is ok");
                const jsonDataPromise = response.json();
                jsonDataPromise.then( data  => {
                    setPayments(data);
                    setIsLoading(2);
                }  )
            }
            else {
                console.log("something went wrong", response.status)
            }
            
        }   )
    }



    //debugger;
    
    const allCountries = payments.map ( payment => payment.country);
    // ["USA","FRANCE"]
    const uniqueCountries = allCountries.filter( 
        (country,index) => allCountries.indexOf(country) === index);
    //const uniqueCountries = [...new Set(allCountries)]
    
    const [selectedCountry, setSelectedCountry] = useState(uniqueCountries[0]);

    const changeCountry = (event) => {
        const option = event.target.options.selectedIndex;
        setSelectedCountry(uniqueCountries[option]);
        console.log(event.target.value);
    }

return (<div>
    {isLoading === 2 && <div className="transactionsCountrySelector">
        Select country: <select onChange={changeCountry} >
            {uniqueCountries.map (country => <option key={country} value={country}>{country}</option>)}
        </select>
    </div>}
    {isLoading !== 2 && <p style={{"text-align":"center"}} >Please wait... loading</p>}
    <table className="transactionsTable">
        <thead>
            <tr>
                <th>Id</th>
                <th>Date</th>
                <th>Country</th>
                <th>Currency</th>
                <th>Amount</th>
            </tr>
        </thead>
        <tbody>
            {
            /* payments.map( (payment, index) => {
                return  payment.country === selectedCountry && <TransactionsRow key={index} id={payment.id} date={payment.date}
                country = {payment.country}  currency = {payment.currency} 
                amount={payment.amount}   />
            }   ) 
            */ 
            }

            {payments
                .filter (payment => payment.country === selectedCountry)
                .map( (payment, index) => {
                return selectedCountry && <TransactionsRow key={index} id={payment.id} date={payment.date}
                country = {payment.country}  currency = {payment.currency} 
                amount={payment.amount}   />
            }   )   }

        </tbody>
    </table></div>
)
}

export default TransactionsTable;