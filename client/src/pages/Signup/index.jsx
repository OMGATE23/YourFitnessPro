import React from "react";
import {Link} from 'react-router-dom'

const Signup = () => {
  return (
    <div>
      {" "}
      <div className="h-screen flex justify-center  items-center">
        <div className="flex flex-col justify-center gap-y-8 items-center w-[350px] py-12 rounded-2xl shadow-2xl">
          <h1 className="text-2xl font-semibold text-blue-800">Sign up</h1>
          <input
            className="border-[1px] border-black  px-2 py-3 w-4/5 rounded-md text-xl focus:border-blue-950 "
            type="text"
            placeholder="Name"
          />
          <input
            className="border-[1px] border-black  px-2 py-3 w-4/5 rounded-md text-xl focus:border-blue-950 "
            type="text"
            placeholder="Email"
          />
          <input
            className="border-[1px] border-black px-2 py-3 w-4/5 rounded-md text-xl focus:border-blue-950"
            type="text"
            placeholder="Password"
          />
          <button className="block outline outline-2 px-4 py-2 text-2xl font-semibold rounded-xl transition-all duration-150 text-white bg-blue-800 hover:bg-white hover:text-blue-800 hover:outline-blue-800">
            Sign Up!
          </button>
          <p>
            Already Signed Up?{" "}
            <Link to="/login" className="text-blue-700">
              Log In!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
