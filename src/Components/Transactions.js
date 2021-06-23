import React from "react";
import Transaction from "../Components/Transaction";

function Transactions({ transactions }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Name</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => {
          return <Transaction key={index} transaction={transaction} index={index} />;
        })}
      </tbody>
    </table>
  );
}

export default Transactions;
