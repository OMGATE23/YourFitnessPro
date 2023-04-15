import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../../helper";
import { useAuthContext } from "../../hooks/useAuthContext";

const Signup = () => {
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [weight , setWeight] = useState()
  const [height , setHeight] = useState()
  const [age , setAge] = useState()
  const [error , setError] = useState(false)
  const [errorMsg , setErrorMsg] = useState()
  const navigate = useNavigate()
  const {setUser} = useAuthContext()

  const signUpHandler = async(e) => {
    e.preventDefault()
    const res = await signUp({name , email , password, weight , height , age} , setUser)
    console.log(res)

    if(!res.success){
      setError(true)
      setErrorMsg(res.message)
    } else {
      navigate('/dashboard')
    }
  }
  return (
    <div>
      {" "}
      <div className="h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center gap-y-4 items-center  w-[400px] py-12 rounded-2xl shadow-2xl">
          <h1 className="text-2xl font-semibold text-blue-800">Sign up</h1>
          <input
            onChange={(e) => setName(e.target.value)}
            className="border-[1px] border-black  px-2 py-3 w-4/5 rounded-md text-xl focus:border-blue-950 "
            type="text"
            placeholder="Name"
          />
          <input
          onChange={(e) => setEmail(e.target.value)}
            className="border-[1px] border-black  px-2 py-3 w-4/5 rounded-md text-xl focus:border-blue-950 "
            type="text"
            placeholder="Email"
          />
          <input
          onChange={(e) => setPassword(e.target.value)}
            className="border-[1px] border-black px-2 py-3 w-4/5 rounded-md text-xl focus:border-blue-950"
            type="password"
            placeholder="Password"
          />
          <div className="flex items-center gap-2 mx-8 ">
            <input
            onChange={(e) => setWeight(+(e.target.value))}
              className=" block border-[1px] border-black px-2 py-3 max-w-[150px] rounded-md text-xl focus:border-blue-950"
              type="number"
              min = "40"
              max = "160"
              placeholder="Weight(kg)"
            />
            <input
            onChange={(e) => setHeight(+(e.target.value))}
              className=" block border-[1px] border-black px-2 py-3 max-w-[150px] rounded-md text-xl focus:border-blue-950"
              type="number"
              min = "130"
              max = "230"
              placeholder="Height(cm)"
            />
          </div>
          <input
          onChange={(e) => setAge(+(e.target.value))}
              className=" block border-[1px] border-black px-2 py-3 max-w-[150px] rounded-md text-xl focus:border-blue-950"
              type="number"
              min = "0"
              max = "80"
              placeholder="Age (yrs)"
            />

          {error && <p className="text-red-700">{errorMsg}</p>}
          <button onClick = {signUpHandler} className="block outline outline-2 px-4 py-2 text-2xl font-semibold rounded-xl transition-all duration-150 text-white bg-blue-800 hover:bg-white hover:text-blue-800 hover:outline-blue-800">
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
