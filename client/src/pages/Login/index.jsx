import React , {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { logIn } from "../../helper";
import { useAuthContext } from "../../hooks/useAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState();
  const navigate = useNavigate();
  const {setUser} = useAuthContext()

  const loginHandler = async(e) => {
    
    e.preventDefault()
    console.log(email , password)
    const res = await logIn({email , password} ,setUser)
    console.log(res)

    if(!res.success){
      setError(true)
      setErrorMsg(res.res.message)
    } else {
      navigate('/dashboard')
    }
  }
  return (
    <div className="h-screen flex justify-center  items-center">
      <div className="flex flex-col justify-center gap-y-8 items-center w-[350px] h-[450px] rounded-2xl shadow-2xl">
        <h1 className="text-2xl font-semibold text-blue-800">Log In</h1>
        <input
          className="border-[1px] border-black  px-2 py-3 w-4/5 rounded-md text-xl focus:border-blue-950 "
          type="text"
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          className="border-[1px] border-black px-2 py-3 w-4/5 rounded-md text-xl focus:border-blue-950"
          type="password"
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
        />
        {error &&<p className="text-red-700"> {errorMsg}</p>}
        <button onClick={loginHandler} className="block outline outline-2 px-4 py-2 text-2xl font-semibold rounded-xl transition-all duration-150 text-white bg-blue-800 hover:bg-white hover:text-blue-800 hover:outline-blue-800">
          Log In!
        </button>
        <p>
          Not Signed Up?{" "}
          <Link to="/signup" className="text-blue-700">
            Sign Up!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
