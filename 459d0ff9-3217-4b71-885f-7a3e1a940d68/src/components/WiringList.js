import React from "react";
import "./WiringList.css";

function WiringList({ wirings, onStatusChange }) {
  return (
    <div className="wiring-list-container-graphic">
      <h2>Monteringsoversigt</h2>
      {wirings.length === 0 ? (
        <p>Ingen ledninger er indlæst.</p>
      ) : (
        <div className="wiring-graphic-list-styled">
          {wirings.map((wiring, index) => (
            <div
              key={index}
              className={`wiring-item-styled ${
                wiring.status === "Monteret" ? "mounted" : ""
              }`}
              onClick={() => onStatusChange(index)}
            >
              <div className="wiring-graphic">
                {wiring.isTylledWithPrevious && (
                  <div className="connection up"></div>
                )}
                <div className="end-point left">
                  <div
                    className="number"
                    style={{
                      transform: wiring.reverseFirst ? "rotate(180deg)" : "",
                    }}
                  >
                    {wiring.firstEnd}
                  </div>
                </div>
                <div className="wire" style={{ backgroundColor: wiring.color }}>
                  {" "}
                  {/* Her sættes farven */}
                  <div className="length">{wiring.length} mm</div>
                </div>
                <div className="end-point right">
                  <div
                    className="number"
                    style={{
                      transform: wiring.reverseSecond ? "rotate(180deg)" : "",
                    }}
                  >
                    {wiring.secondEnd}
                  </div>
                  {wiring.tylle === "dobbelt" && index < wirings.length - 1 && (
                    <div className="connection down"></div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default WiringList;
