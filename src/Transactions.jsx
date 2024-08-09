import { useEffect } from "react";
import { useState } from "react";
import TransactionForm from "./TransactionForm";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3000/transactions";
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setTransactions(data));
  }, []);

  function dataFromChild(formdata) {
    setTransactions((transactions) => [...transactions, formdata]);
  }

  function handleDelete(transac) {
    const result = transactions.filter(
      (transaction) => transaction.id !== transac
    );
    setTransactions((transactions) => result);
  }

  return (
    <>
      <table className="w3-table-all w3-hoverable">
        <tr>
          <th>Id</th>
          <th>Category</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Description</th>
        </tr>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.category}</td>
              <td>{transaction.date}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.description}</td>
              <td>
                <button
                  className="w3-circle"
                  onClick={() => handleDelete(transaction.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <TransactionForm dataFromChild={dataFromChild} />
    </>
  );
}
