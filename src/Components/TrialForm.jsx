import { useState, useEffect } from "react";

function TrialForm() {
  const [trials, setTrials] = useState([]);

  const [form, setForm] = useState({
    companyName: "",
    reportTitle: "",
    date: "",

    componentName: "",
    machine: "",
    material: "",

    sigmaRoughing: "",
    sigmaFinishing: "",
    sigmaWiper: "",

    existingRoughing: "",
    existingFinishing: "",

    sigmaRoughVC: "",
    sigmaRoughFT: "",
    sigmaFinishVC: "",
    sigmaFinishFT: "",

    existingRoughVC: "",
    existingRoughFT: "",
    existingFinishVC: "",
    existingFinishFT: "",

    stockRoughOP10: "",
    stockFinishOP10: "",
    stockFinishOP20: "",
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("trials")) || [];
    setTrials(saved);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTrial = {
      id: `TR-${Date.now()}`,
      ...form,
    };

    const updated = [...trials, newTrial];
    setTrials(updated);
    localStorage.setItem("trials", JSON.stringify(updated));

    alert("Trial Report Saved Successfully");

    // Reset form after save
    setForm({
      companyName: "",
      reportTitle: "",
      date: "",
      componentName: "",
      machine: "",
      material: "",
      sigmaRoughing: "",
      sigmaFinishing: "",
      sigmaWiper: "",
      existingRoughing: "",
      existingFinishing: "",
      sigmaRoughVC: "",
      sigmaRoughFT: "",
      sigmaFinishVC: "",
      sigmaFinishFT: "",
      existingRoughVC: "",
      existingRoughFT: "",
      existingFinishVC: "",
      existingFinishFT: "",
      stockRoughOP10: "",
      stockFinishOP10: "",
      stockFinishOP20: "",
    });
  };

  return (
    <div className="container">
      <h2>Generate Trial Report</h2>

      <form onSubmit={handleSubmit} className="form-section">

        <h3>Basic Info</h3>
        <input
          name="companyName"
          placeholder="Company Name"
          value={form.companyName}
          onChange={handleChange}
        />

        <input
          name="reportTitle"
          placeholder="Report Title"
          value={form.reportTitle}
          onChange={handleChange}
        />

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />

        <h3>Component Details</h3>
        <input
          name="componentName"
          placeholder="Component Name"
          value={form.componentName}
          onChange={handleChange}
        />

        <input
          name="machine"
          placeholder="Machine"
          value={form.machine}
          onChange={handleChange}
        />

        <input
          name="material"
          placeholder="Material"
          value={form.material}
          onChange={handleChange}
        />

        <h3>Sigma Insert Details</h3>
        <input
          name="sigmaRoughing"
          placeholder="Sigma Roughing"
          value={form.sigmaRoughing}
          onChange={handleChange}
        />

        <input
          name="sigmaFinishing"
          placeholder="Sigma Finishing"
          value={form.sigmaFinishing}
          onChange={handleChange}
        />

        <input
          name="sigmaWiper"
          placeholder="Sigma Wiper"
          value={form.sigmaWiper}
          onChange={handleChange}
        />

        <h3>Existing Insert Details</h3>
        <input
          name="existingRoughing"
          placeholder="Existing Roughing"
          value={form.existingRoughing}
          onChange={handleChange}
        />

        <input
          name="existingFinishing"
          placeholder="Existing Finishing"
          value={form.existingFinishing}
          onChange={handleChange}
        />

        <h3>Sigma Cutting Parameters</h3>
        <input
          name="sigmaRoughVC"
          placeholder="Sigma Rough VC"
          value={form.sigmaRoughVC}
          onChange={handleChange}
        />

        <input
          name="sigmaRoughFT"
          placeholder="Sigma Rough F/T"
          value={form.sigmaRoughFT}
          onChange={handleChange}
        />

        <input
          name="sigmaFinishVC"
          placeholder="Sigma Finish VC"
          value={form.sigmaFinishVC}
          onChange={handleChange}
        />

        <input
          name="sigmaFinishFT"
          placeholder="Sigma Finish F/T"
          value={form.sigmaFinishFT}
          onChange={handleChange}
        />

        <h3>Existing Cutting Parameters</h3>
        <input
          name="existingRoughVC"
          placeholder="Existing Rough VC"
          value={form.existingRoughVC}
          onChange={handleChange}
        />

        <input
          name="existingRoughFT"
          placeholder="Existing Rough F/T"
          value={form.existingRoughFT}
          onChange={handleChange}
        />

        <input
          name="existingFinishVC"
          placeholder="Existing Finish VC"
          value={form.existingFinishVC}
          onChange={handleChange}
        />

        <input
          name="existingFinishFT"
          placeholder="Existing Finish F/T"
          value={form.existingFinishFT}
          onChange={handleChange}
        />

        <h3>Stock Details</h3>
        <input
          name="stockRoughOP10"
          placeholder="Roughing OP10 Details"
          value={form.stockRoughOP10}
          onChange={handleChange}
        />

        <input
          name="stockFinishOP10"
          placeholder="Finishing OP10 Details"
          value={form.stockFinishOP10}
          onChange={handleChange}
        />

        <input
          name="stockFinishOP20"
          placeholder="Finishing OP20 Details"
          value={form.stockFinishOP20}
          onChange={handleChange}
        />

        <button type="submit">Save Trial Report</button>
      </form>

      <h3>Saved Trials</h3>
      {trials.map((t) => (
        <div key={t.id} className="trial-card">
          <strong>{t.reportTitle}</strong>
          <p>{t.companyName}</p>
          <p>{t.componentName} - {t.machine}</p>
          <p>Date: {t.date}</p>
        </div>
      ))}
    </div>
  );
}

export default TrialForm;
