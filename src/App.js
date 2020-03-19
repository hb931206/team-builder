import React, { useState } from "react";
import "./App.css";
import Jobs from "./components/Jobs";
import JobForm from "./components/JobForm";

function App() {
  const [roleState, setRoleState] = useState([]);

  return (
    <div>
      <h1>Our Jobs Form</h1>
      <JobForm />
      <Jobs jobs={roleState} />
    </div>
  );
}

export default App;
