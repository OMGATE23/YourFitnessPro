import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import CalorieReq from "../../components/CalorieReq";
import BMICalculator from "../../components/BMICalculator";

const Calculators = () => {
  const [ isCalorieCalc , setIsCalorieCalc] = useState(true)
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <div className="mt-6 flex items-center justify-center gap-8">
          <button onClick={() => setIsCalorieCalc(true)} className="py-2 px-3 outline-1 outline rounded-xl text-lg">Calorie Counter</button>
          <button onClick={() => setIsCalorieCalc(false)} className="py-2 px-3 outline-1 outline rounded-xl text-lg">BMI Calculator</button>
        </div>
        { isCalorieCalc &&  <CalorieReq />}
        {!isCalorieCalc &&  <BMICalculator/> }
      </div>
    </div>
  );
};

export default Calculators;
