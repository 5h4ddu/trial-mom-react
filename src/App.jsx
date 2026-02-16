import { useState } from "react";
import TrialForm from "./Components/TrialForm";
import MOMForm from "./Components/MOMForm";
import Dashboard from "./Components/Dashboard";
import "./App.css";

function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="container">
      <h1>Trial & MOM Management</h1>

      <div className="nav">
        <button onClick={() => setPage("dashboard")}>Dashboard</button>
        <button onClick={() => setPage("trial")}>Add Trial</button>
        <button onClick={() => setPage("mom")}>Add MOM</button>
      </div>

      {page === "dashboard" && <Dashboard />}
      {page === "trial" && <TrialForm />}
      {page === "mom" && <MOMForm />}
    </div>
  );
}

export default App;
