import React from "react";
import Transaction from "../Components/Transaction";

function Transactions({ transactions }) {
  let total = 0;
  transactions.forEach((transaction) => {
    total += Number(transaction.amount);
  });

  return (
    <div>
      <h1>Balance: ${total}</h1>
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
            return (
              <Transaction
                key={index}
                transaction={transaction}
                index={index}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;
