import TransactionsRow from "./TransactionsRow";
import './Transactions.css';
import { getAllPayments, getAllPaymentsAxiosVersion, getAllPaymentsFetchVersion, getAllPaymentsForCountry, getCountries } from "../../data/DataFunctions";
import { Fragment, useEffect, useState } from "react";

const TransactionsTable = () => {

    const [payments, setPayments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
        loadCountries();
    } , []);

    const [uniqueCountries, setUniqueCountries] = useState([])

    const loadCountries = () => {
        getCountries()
        .then ( response => {
            if (response.status === 200) {
                setUniqueCountries(response.data);
                setIsLoading(false);
            }
            else {
                console.log("something went wrong");
            }
        })
        .catch ( error => {
            console.log("something went wrong", error)
        })
    }


    const loadData = (country) => {
        
        getAllPaymentsForCountry(country)
            .then ( response => {
                if (response.status === 200) {
                    setIsLoading(false);
                    setPayments(response.data);
                }
                else {
                    console.log("something went wrong", response.status)
                }
            })
            .catch( error => {
                console.log("something went wrong", error);
            })
    }
    
    //debugger;
   
    
    const [selectedCountry, setSelectedCountry] = useState("");

    const changeCountry = (event) => {
        const country = event.target.value;
        setSelectedCountry(country);
        setIsLoading(true)
        loadData(country);
        console.log(country);
    }

return (<>
    {!isLoading && <div className="transactionsCountrySelector">
        Select country: <select onChange={changeCountry} defaultValue={selectedCountry}>
            <option value="" disabled={true}> ---select---</option>
            {uniqueCountries.map (country => <option key={country} value={country}>{country}</option>)}
        </select>
    </div>}
    {isLoading && <p style={{textAlign:"center"}} >Please wait... loading</p>}
    {!isLoading &&
    <table className="transactionsTable">
        <thead>
            <tr>
                <th>Id</th>
                <th>Order Id</th>
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
                country = {payment.country}  currency = {payment.currency} orderId={payment.orderId}
                amount={payment.amount}   />
            }   )   }

        </tbody>
    </table>
    }
    </>
)
}

export default TransactionsTable;