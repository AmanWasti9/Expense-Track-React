import "./App.css";
import { GlobalProvider } from "./Context/GloabalState";
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import IncomeExpense from "./Components/IncomeExpense";
import History from "./Components/History";
import AddTransactions from "./Components/AddTransactions";

function App() {
  return (
    <div>
      <GlobalProvider>
        <div className="MainBoxs">
          <Header />
          <div className="container">
            <Balance />
            <IncomeExpense />
            <History />
            <AddTransactions />
          </div>
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
