import React from "react";
import "./index.css"
import Transactions from "../Components/Transactions";

function Index({ transactions }) {
  return (
    <div>
      <h1>Index</h1>
      <h2>Account Total: $1,000</h2>
      <Transactions transactions={transactions} />
    </div>
  );
}

export default Index;
