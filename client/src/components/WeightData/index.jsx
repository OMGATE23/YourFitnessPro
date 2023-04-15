import React from "react";

export default function WeightData(props) {
  const weightEntries = Object.entries(props.weightData);

  return (
    <div>
      {weightEntries.map(([key, value]) => (
        <div key={key} className="grid py-2 grid-cols-2">
          <p className="font-bold capitalize ">{key}:</p>
          <span>
            <ul>
              {typeof value === "object" ? (
                Object.entries(value).map(([subKey, subValue]) => (
                  <li key={subKey}>
                    {subKey}: {subValue}
                  </li>
                ))
              ) : (
                <li>{value}</li>
              )}
            </ul>
          </span>
        </div>
      ))}
    </div>
  );
}
