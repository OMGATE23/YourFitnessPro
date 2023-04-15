import React, { useState } from "react";
import { CalculateBMI, countCalorieReq } from "../../helper";
const BMICalculator = () => {
  const [age, setAge] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  
  const [results, setResults] = useState();

  const calculateBMI = async () => {
    const data = await CalculateBMI({
      age,
      height,
      weight
    });
    console.log(data);
    setResults(data);
  };

  return (
    <div className="h-screen flex justify-center  items-center">
      <div className=" flex flex-col items-center justify-center gap-8 w-[425px] xl:w-4/5 h-[80%] shadow-xl rounded-2xl py-6 xl:flex-row">
        <div className="flex flex-col xl:ml-8 justify-center gap-y-8 items-center w-[350px] py-6 rounded-2xl shadow-lg">
          <h1 className="text-2xl font-semibold text-blue-800">
            BMI
          </h1>
          <input
            className="border-[1px] border-black  px-2 py-1 w-4/5 rounded-md text-lg focus:border-blue-950 "
            type="number"
            onChange={(e) => setAge(+e.target.value)}
            placeholder="Age"
            min="0"
            max="80"
          />
          
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

          
          <button
          onClick={calculateBMI}
            className="block outline outline-2 px-2 py-1 text-lg font-semibold rounded-lg transition-all duration-150 text-white bg-blue-800 hover:bg-white hover:text-blue-800 hover:outline-blue-800"
          >
            Count
          </button>
        </div>
        <div className=" w-1/2 px-6 h-[50%] xl:mr-8 flex items-center justify-center bg-gray-100">
          {results && (
            <div>
              {results.status_code === 200 ? (
                <div>

                <p><span>BMI: {results.data.bmi}</span></p>
                <p><span>Health: {results.data.health}</span></p>
                </div>
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

export default BMICalculator;
