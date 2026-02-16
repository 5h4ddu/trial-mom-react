import { useEffect, useState } from "react";

function Dashboard() {
  const [trialCount, setTrialCount] = useState(0);
  const [momCount, setMomCount] = useState(0);

  useEffect(() => {
    const trials = JSON.parse(localStorage.getItem("trials")) || [];
    const moms = JSON.parse(localStorage.getItem("moms")) || [];
    setTrialCount(trials.length);
    setMomCount(moms.length);
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Total Trials: {trialCount}</p>
      <p>Total MOM: {momCount}</p>
    </div>
  );
}

export default Dashboard;
