import React, { useEffect } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import Sidebar from "../../components/Sidebar";
import {useNavigate} from 'react-router-dom'

const Dashboard = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate()  


  console.log(user);

  useEffect(() => {
    if(!user){
      navigate('/login')
    }
  } , [user])
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full mt-12">
        <div className="px-12 ">
          <h1 className="text-6xl font-semibold">Hi {user.name}👋</h1>

          <div className="flex flex-col items-center justify-center mt-12 gap-12">
            <div className="flex gap-12">
              <div className=" w-[220px] shadow-xl aspect-square flex flex-col justify-center gap-4 text-3xl text-center rounded-2xl  outline outline-1">
                Your Age<div>{user.age}yrs</div>
              </div>
              <div className=" w-[220px] shadow-xl aspect-square flex flex-col justify-center gap-4 text-3xl text-center rounded-2xl  outline outline-1">
                Your Weight<div>{user.weight}kg</div>
              </div>
              <div className=" w-[220px] shadow-xl aspect-square flex flex-col justify-center gap-4 text-3xl text-center rounded-2xl  outline outline-1">
                Your Height<div>{user.height}cm</div>
              </div>
            </div>

            <div className="w-[80%] rounded-xl shadow-xl outline outline-1 h-[220px] flex flex-col justify-center gap-4 text-3xl text-center ">
                Your BMI is : 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
