import React, { useState } from "react";
import { countCalorieReq } from "../../helper";
import WeightData from "../WeightData";
const CalorieReq = () => {
  const [age, setAge] = useState();
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [activityLevel, setActivityLevel] = useState("");
  const [results, setResults] = useState();
  const [weightData, setWeightData] = useState();
  const [isMale, setIsMale] = useState();
  const activityLevels = {
    level_1: "Sedentary: little or no exercise",
    level_2: "Exercise 1-3 times/week",
    level_3: "Exercise 4-5 times/week",
    level_4: "Daily exercise or intense exercise 3-4 times/week",
    level_5: "Intense exercise 6-7 times/week",
    level_6: "Very intense exercise daily, or physical job",
  };
  const handleChange = (event) => {
    setActivityLevel(event.target.value);
  };

  const calculateCalories = async () => {
    const data = await countCalorieReq({
      age,
      gender,
      height,
      weight,
      activityLevel,
    });
    console.log(data);
    setWeightData(data?.data?.goals);
    setResults(data);
  };
  return (
    <div className="min-h-screen flex justify-center  my-12 xl:my-0 items-center">
      <div className=" flex flex-col items-center justify-center gap-8 w-[425px] xl:w-4/5  shadow-xl rounded-2xl py-6 xl:flex-row">
        <div className="flex flex-col justify-center xl:ml-8 gap-y-8 items-center w-[350px] py-6 rounded-2xl shadow-lg">
          <h1 className="text-2xl font-semibold text-blue-800">
            Calorie Calculator
          </h1>
          <input
            className="border-[1px] border-black  px-2 py-1 w-4/5 rounded-md text-lg focus:border-blue-950 "
            type="number"
            onChange={(e) => setAge(+e.target.value)}
            placeholder="Age"
            min="0"
            max="80"
          />
          <div className="flex items-center justify-evenly gap-6">
            <label className={`border-[1px] border-black px-2 py-1 w-[7rem] rounded-md text-lg focus:border-blue-950 hover:cursor-pointer text-center ${isMale === true && 'bg-gray-300'}`}>
              Male
              <input
                className="hidden"
                type="radio"
                name=" gender"
                onChange={(e) => {
                  setGender("male");
                  setIsMale(true);
                }}
                placeholder="male"
              />
            </label>
            <label className={`border-[1px] border-black px-2 py-1 w-[7rem] text-center rounded-md text-lg focus:border-blue-950 hover:cursor-pointer ${isMale === false && 'bg-gray-300'}`}>
              Female
              <input
                className="hidden"
                type="radio"
                name=" gender"
                onChange={(e) => {
                  setGender("female");
                  setIsMale(false);
                }}
                placeholder="female"
              />
            </label>
          </div>

          <input
            className="border-[1px] border-black  px-2 py-1 w-4/5 rounded-md text-lg focus:border-blue-950 "
            type="number"
            onChange={(e) => setHeight(+e.target.value)}
            placeholder="Height"
            min="130"
            max="230"
          />
          <input
            className="border-[1px] border-black  px-2 py-1 w-4/5 rounded-md text-lg focus:border-blue-950 "
            type="number"
            onChange={(e) => setWeight(+e.target.value)}
            placeholder="Weight"
            min="40"
            max="60"
          />

          <select
            className="w-4/5 px-2 py-2 text-lg rounded-md"
            value={activityLevel}
            onChange={handleChange}
          >
            <option value="" selected disabled>
              Select activity level
            </option>
            {Object.keys(activityLevels).map((key) => (
              <option key={key} value={key}>
                {activityLevels[key]}
              </option>
            ))}
          </select>
          <button
            onClick={calculateCalories}
            className="block outline outline-2 px-2 py-1 text-lg font-semibold rounded-lg transition-all duration-150 text-white bg-blue-800 hover:bg-white hover:text-blue-800 hover:outline-blue-800"
          >
            Count
          </button>
        </div>
        <div className=" block w-[70%] px-6  bg-gray-100 h-[90%] xl:mr-8">
          {results && (
            <div>
              {results.status_code === 200 ? (
                weightData && <WeightData weightData={weightData} />
              ) : (
                <div className="text-red-600">
                  Some Error occured. Make sure you gave correct data
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalorieReq;
