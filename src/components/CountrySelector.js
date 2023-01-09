import { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { getCountries } from "../data/DataFunctions";

const CountrySelector = (props) => {

    useEffect( () => {
        loadCountries();
    } , []);

    const [uniqueCountries, setUniqueCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const countriesInRedux = useSelector( state => state.countries);
    const timeOfLastFetch = useSelector( state => state.lastFetch);
    const dispatch = useDispatch();

    const loadCountries = () => {

        //do we have any countries in redux?
        if(countriesInRedux.length > 0 && new Date().getTime() - timeOfLastFetch < 60000) {
            console.log("using countries from redux");
            setUniqueCountries(countriesInRedux);
            setIsLoading(false);
        }
        
        //if we do, use them, if not, get them from rest + save them in redux
        else {
            console.log("getting countries via rest");
            getCountries()
            .then ( response => {
                if (response.status === 200) {
                    setUniqueCountries(response.data);
                    dispatch({type:"updateCountries", value : response.data});
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

        if (props.value != null) {
            setSelectedCountry(props.value);
        }
    }

    const [selectedCountry, setSelectedCountry] = useState("");

    const changeCountry = (event) => {
        const country = event.target.value;
        props.changeCountry(country);
    }


    return (<div className="transactionsCountrySelector">
    Select country: <select onChange={changeCountry} defaultValue={selectedCountry}>
        <option value="" disabled={true}> ---select---</option>
        {uniqueCountries.map (country => <option key={country} value={country}>{country}</option>)}
    </select>
</div>)

}

export default CountrySelector;