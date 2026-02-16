import { useState, useEffect } from "react";

function MOMForm() {
  const [moms, setMoms] = useState([]);
  const [form, setForm] = useState({
    meetingDate: "",
    attendees: "",
    discussion: ""
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("moms")) || [];
    setMoms(saved);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updated = [...moms, form];
    setMoms(updated);
    localStorage.setItem("moms", JSON.stringify(updated));
  };

  return (
    <div>
      <h2>Add MOM</h2>
      <form onSubmit={handleSubmit}>
        <input type="date" onChange={(e)=>setForm({...form,meetingDate:e.target.value})}/>
        <input placeholder="Attendees" onChange={(e)=>setForm({...form,attendees:e.target.value})}/>
        <input placeholder="Discussion" onChange={(e)=>setForm({...form,discussion:e.target.value})}/>
        <button type="submit">Save</button>
      </form>

      <h3>Saved MOM</h3>
      {moms.map((m,i)=>(
        <p key={i}>{m.meetingDate} - {m.attendees}</p>
      ))}
    </div>
  );
}

export default MOMForm;
