import React from "react";
import numeral from "numeral";

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
        <p>{numeral(transaction.amount).format('$0,0.00')}</p>
      </td>
    </tr>
  );
}

export default Transaction;
