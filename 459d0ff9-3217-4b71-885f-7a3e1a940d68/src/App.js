import React from "react";
import MountingApp from "./components/MountingApp";
import "./styles.css"; // Brug det korrekte filnavn

function App() {
  return (
    <div className="app-container">
      <h1>Monteringsapp</h1>
      <MountingApp />
    </div>
  );
}

export default App;
