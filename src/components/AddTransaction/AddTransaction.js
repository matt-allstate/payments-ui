import { useReducer } from 'react'
import './AddTransaction.css'

const AddTransaction = () => {

    const initialNewTransactionState = {orderId : "", 
    date : new Date().toISOString().slice(0,10) , amount : "0",
    country: "", currency: "", taxCode: "0", taxRate: "0.20", type : "SALE"}

    /*
      state =  {orderId : "", date : "", amount : "0", country: "", currency: "", taxCode: "0", taxRate: "0.20", type : "SALE"}
      data = {field : "amount", value : "123"}
    */

    const formReducer = (state, data) => {
        return {...state, [data.field] : data.value}
    }

    //const [statefulVariable, setterFunction] = useReducer(reducerFunction, initialValue);
    const [newTransaction, dispatch] = useReducer(formReducer, initialNewTransactionState);
    
    const handleChange = (event) => {
        //event.target.id = the field
       // event.target.value  = the value
       dispatch({field : event.target.id, value : event.target.value});
    }

    return (
    <form className="addTransactionsForm">
        <h2>New transaction</h2>
        <label htmlFor="orderId">Order Id</label>
        <input type="text" id="orderId" value={newTransaction.orderId} onChange={handleChange} />
        <br/>
        <label htmlFor="date">Date</label>
        <input type="date" id="date"/>
        <br/>
        <label htmlFor="country">Country</label>
        <input type="text" id="country" value={newTransaction.country} onChange={handleChange} />
        <br/>
        <label htmlFor="currency">Currency</label>
        <input type="text"  id="currency" />
        <br/>
        <label htmlFor="amount">Amount</label>
        <input type="text"  id="amount" />
        <br/>
        <label htmlFor="taxCode">Tax Code</label>
        <input type="text"  id="taxCode" />
        <br/>
        <label htmlFor="taxRate">Tax Rate</label>
        <input type="text"  id="taxRate" />
        <br/>
        <label htmlFor="type">Type</label>
        <input type="text"  id="type" />
        <br/>
        <button type="submit">Save</button>
    </form>
    )
}

export default AddTransaction;