import React, { useState, useEffect } from "react";
import WiringList from "./WiringList";
import "./MountingApp.css";

function MountingApp() {
  const [importedWirings, setImportedWirings] = useState([]);

  useEffect(() => {
    console.log("importedWirings i MountingApp:", importedWirings);
  }, [importedWirings]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result);
          setImportedWirings(data);
        } catch (error) {
          console.error("Fejl ved parsing af JSON fil:", error);
          alert("Der opstod en fejl ved indlæsning af filen.");
        }
      };
      reader.readAsText(file);
    }
  };

  const handleStatusChange = (index) => {
    const updatedWirings = importedWirings.map((wiring, i) =>
      i === index
        ? {
            ...wiring,
            status: wiring.status === "Monteret" ? "Ikke monteret" : "Monteret",
          }
        : wiring
    );
    setImportedWirings(updatedWirings);
  };

  return (
    <div className="mounting-app-container">
      <h1>Monteringsapp</h1>
      <input type="file" accept=".json" onChange={handleFileChange} />

      {importedWirings.length > 0 && (
        <div className="wiring-list-wrapper">
          <WiringList
            wirings={importedWirings}
            onStatusChange={handleStatusChange}
          />
        </div>
      )}

      {importedWirings.length === 0 && (
        <p>Vælg en JSON-fil for at vise ledningsdata.</p>
      )}
    </div>
  );
}

export default MountingApp;
