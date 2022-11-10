import TransactionsRow from "./TransactionsRow";
import './Transactions.css';

const TransactionsTable = () => {
return (
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
            <TransactionsRow id="1" date="2022-11-10" country="USA" 
            currency="USD" amount="17.55" />
            <TransactionsRow id="2" date="2022-11-10" country="UK" 
            currency="GBP" amount="19.06" />
            <TransactionsRow id="3" date="2022-11-10" country="USA" 
            currency="USD" amount="45.00" />

        </tbody>
    </table>
)
}

export default TransactionsTable;