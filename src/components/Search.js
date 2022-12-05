import { useState } from "react";

const Search = (props) => {

    //stateful variable called searchTerm to store the value in the input
    const [localSearchTerm, setLocalSearchTerm] = useState("");
    const [valid, setValid] = useState(true);
    const [touched, setTouched] = useState(false);
    
    const checkValidity = (value) => {
        setValid(value.trim().length > 0);
    }

    const handleChange = (event) => {
        setTouched(true);
        setLocalSearchTerm(event.target.value);
        checkValidity(event.target.value);
    }

    const doSearch  = (event) => {
        event.preventDefault();
        props.setSearchTerm(localSearchTerm);
    }

    return <div className="searchBox">
        <form onSubmit={doSearch}>
            <label htmlFor="orderId" >Order Id</label>
            <input onChange={handleChange} value={localSearchTerm} id="orderId" type="text"
                style ={{border: valid ? "1px solid #000" : "2px solid #f00"}}
            />
            <button type="submit" disabled={!valid || !touched}>Search</button>
        </form>
    </div>
}

export default Search;