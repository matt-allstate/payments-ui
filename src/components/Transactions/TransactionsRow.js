const TransactionsRow = (props) => {

    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.date}</td>
            <td>{props.country}</td>
            <td>{props.currency}</td>
            <td>{props.amount}</td>
        </tr>
    )
}

export default TransactionsRow;