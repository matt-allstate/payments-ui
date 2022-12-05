import TransactionsRow from "./TransactionsRow";
import './Transactions.css';
import { getAllPaymentsForCountry, getAllPaymentsForOrderId, getCountries } from "../../data/DataFunctions";
import { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';

const TransactionsTable = (props) => {

    const [payments, setPayments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [searchParams, setSearchParams] = useSearchParams();


    useEffect( () => {
        loadCountries();
    } , []);

    useEffect( () => {
        if(props.searchTerm !== "") {
            setIsLoading(true);
            getAllPaymentsForOrderId(props.searchTerm)
                .then( response => {
                        setPayments(response.data);
                        setIsLoading(false);
                } )
                .catch ( error => {
                    console.log("something went wrong", error);
                })
        }

    }, [props.searchTerm]  );

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

    useEffect( ()=> {
        const country = searchParams.get("country");
        if (country !== selectedCountry) {
            setSelectedCountry(country);
            loadData(country);
        }
     }, [] );

    const changeCountry = (event) => {
        const country = event.target.value;
        setSelectedCountry(country);
        setIsLoading(true)
        loadData(country);
        setSearchParams({"country" : country});
    }

return (<>
    {!isLoading && props.searchTerm === "" && <div className="transactionsCountrySelector">
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
            
            {   payments
                .filter (payment => props.searchTerm !== "" || payment.country === selectedCountry)
                .map( (payment, index) => {
                return <TransactionsRow key={index} id={payment.id} date={payment.date}
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