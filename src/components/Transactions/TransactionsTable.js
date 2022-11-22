import TransactionsRow from "./TransactionsRow";
import './Transactions.css';
import { getAllPayments } from "../../data/DataFunctions";
import { useState } from "react";

const TransactionsTable = () => {

    const payments = getAllPayments();
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
    <div className="transactionsCountrySelector">
        Select country: <select onChange={changeCountry} >
            {uniqueCountries.map (country => <option key={country} value={country}>{country}</option>)}
        </select>
    </div>
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