import React, { useState } from "react";

const Modal = ({ splits, onClose, onSubmit }) => {
  const [noOfSets, setNoOfSets] = useState(0);
  const [noOfReps, setNoOfReps] = useState(0);
  const [timeTaken, setTimeTaken] = useState(0);
  const [selectedSplit, setSelectedSplit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ noOfSets, noOfReps, timeTaken, selectedSplit });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div className="modal-form">
          <input
            type="number"
            placeholder="Number of Sets"
            value={noOfSets}
            onChange={(e) => setNoOfSets(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Number of Reps"
            value={noOfReps}
            onChange={(e) => setNoOfReps(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Time Taken"
            value={timeTaken}
            onChange={(e) => setTimeTaken(e.target.value)}
            required
          />
          <select
            placeholder="Select Split"
            value={selectedSplit}
            onChange={(e) => setSelectedSplit(e.target.value)}
            required
          >
            <option value="">--Please select a split--</option>
            {splits.map((split) => (
              <option key={split.id} value={split.name}>
                {split.name}
              </option>
            ))}
          </select>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
