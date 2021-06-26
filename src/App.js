import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import New from "./Pages/New";
import Index from "./Pages/Index";
import { apiURL } from "./util/apiURL";
import { useEffect, useState } from "react";
import axios from "axios";

const API = apiURL();

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    axios
      .post(`${API}/transactions`, newTransaction)
      .then((res) => {
        setTransactions([...transactions, newTransaction]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios.get(`${API}/transactions`).then((res) => {
      const { data } = res;
      setTransactions(data);
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/transactions/new">
            <New addTransaction={addTransaction} />
          </Route>
          <Route path="/transactions">
            <Index transactions={transactions} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
