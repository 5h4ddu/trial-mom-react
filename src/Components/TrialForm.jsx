import { useState, useEffect } from "react";

function TrialForm() {
  const [trials, setTrials] = useState([]);
  const [form, setForm] = useState({
    component: "",
    machine: "",
    material: "",
    remarks: ""
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("trials")) || [];
    setTrials(saved);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updated = [...trials, { ...form, date: new Date().toLocaleString() }];
    setTrials(updated);
    localStorage.setItem("trials", JSON.stringify(updated));
  };

  return (
    <div>
      <h2>Add Trial</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Component" onChange={(e)=>setForm({...form,component:e.target.value})}/>
        <input placeholder="Machine" onChange={(e)=>setForm({...form,machine:e.target.value})}/>
        <input placeholder="Material" onChange={(e)=>setForm({...form,material:e.target.value})}/>
        <input placeholder="Remarks" onChange={(e)=>setForm({...form,remarks:e.target.value})}/>
        <button type="submit">Save</button>
      </form>

      <h3>Saved Trials</h3>
      {trials.map((t,i)=>(
        <p key={i}>{t.component} - {t.machine} ({t.date})</p>
      ))}
    </div>
  );
}

export default TrialForm;
