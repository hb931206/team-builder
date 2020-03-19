import React, { useState } from "react";
import "./App.css";
import Jobs from "./components/Jobs";
import JobForm from "./components/JobForm";

function App() {
  const [roleState, setRoleState] = useState([]);

  const addRoleHander = newRole => {
    setRoleState([...roleState, newRole]);
  };

  return (
    <div>
      <h1>Jobs Form</h1>
      <JobForm addRole={addRoleHander} />
      <Jobs jobs={roleState} />
    </div>
  );
}

export default App;
