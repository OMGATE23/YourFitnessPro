import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import exerciseData from "../../data/listOfAllExercises.json";
import equipmentOptions from "../../data/listOfEquipment.json";
import targetMusclesOptions from "../../data/listOfTargetMuscles.json";
import bodyPartOptions from "../../data/listOfBodyparts.json";
import Pagination from "../../components/Pagination";

const Search = () => {
  const [query, setQuery] = useState("");
  const [equipQuery, setEquipQuery] = useState("");
  const [targetMusc, setTargetMusc] = useState("");
  const [bodyPart, setBodyPart] = useState("");

  const handleEquipChange = (event) => {
    setEquipQuery(event.target.value);
  };

  const handleTargetMuscChange = (event) => {
    setTargetMusc(event.target.value);
  };

  const handleBodyPartChange = (event) => {
    setBodyPart(event.target.value);
  };

  let filteredList = exerciseData.filter((exercise) =>
    exercise.name.includes(query)
  );

  filteredList = filteredList.filter((exercise) =>
    exercise.equipment.includes(equipQuery)
  );
  filteredList = filteredList.filter((exercise) =>
    exercise.target.includes(targetMusc)
  );
  filteredList = filteredList.filter((exercise) =>
    exercise.bodyPart.includes(bodyPart)
  );
  console.log(filteredList);

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full mt-12">
        <div className="flex flex-col gap-8 justify-center items-center xl:flex-row">
          <div className="flex justify-center items-center gap-2 ">
          
          <input
            className="outline outline-1 px-4 py-2 rounded-xl "
            placeholder="Search"
            onChange={(e) => setQuery(e.target.value)}
          />
          </div>
          <div>
            <label htmlFor="equipment-select"></label>
            <select
              id="equipment-select"
              value={equipQuery}
              onChange={handleEquipChange}
              className="py-2 px-4 rounded-md "
            >
              <option value="" selected disabled>Select equipment</option>
              {equipmentOptions.map((equipOption) => (
                <option key={equipOption} value={equipOption}>
                  {equipOption}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="target-muscles-select">
            </label>
            <select
              id="target-muscles-select"
              value={targetMusc}
              onChange={handleTargetMuscChange}
              placeholder="select target muscle"
              className="py-2 px-4 rounded-md "
            >
              <option value="" selected  disabled>Select target muscle</option>
              {targetMusclesOptions.map((targetMuscOption) => (
                <option key={targetMuscOption} value={targetMuscOption}>
                  {targetMuscOption}
                </option>
              ))}
              
            </select>
          </div>
          <div>
            <label htmlFor="body-part-select"></label>
            <select
              id="body-part-select"
              value={bodyPart}
              onChange={handleBodyPartChange}
              className="py-2 px-4 rounded-md "
            >
              <option value="" disabled selected>Select body part</option>
              {bodyPartOptions.map((bodyPartOption) => (
                <option key={bodyPartOption} value={bodyPartOption}>
                  {bodyPartOption}
                </option>
              ))}
            </select>
          </div>
        </div>
        <Pagination items = {filteredList}/>
      </div>
    </div>
  );
};

export default Search;
