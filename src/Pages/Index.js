import React from "react";
import "./index.css"
import Transactions from "../Components/Transactions";

function Index({ transactions }) {
  return (
    <div>
      <Transactions transactions={transactions} />
    </div>
  );
}

export default Index;
