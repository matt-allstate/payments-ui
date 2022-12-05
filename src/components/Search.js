import { useState } from "react";

const Search = () => {

    //stateful variable called searchTerm to store the value in the input
    const [searchTerm, setSearchTerm] = useState("");
    console.log("searchTerm", searchTerm);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }

    return <div className="searchBox">
        <label htmlFor="orderId" >Order Id</label>
        <input onChange={handleChange} id="orderId" type="text" />
        <button>Search</button>
    </div>
}

export default Search;