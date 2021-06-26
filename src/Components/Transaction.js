import React from "react";

function Transaction({ transaction }) {
  return (
    <tr>
      <td>
        <p>{transaction.date}</p>
      </td>
      <td>
        <p>{transaction.name}</p>
      </td>
      <td>
        <p>{transaction.amount}</p>
      </td>
    </tr>
  );
}

export default Transaction;
