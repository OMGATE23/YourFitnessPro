import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import Main from "./layouts/Main";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
 const router = createBrowserRouter([
  {
    path : '/',
    element : <Main/>,
    children : [
      {
        index : true,
        element : <LandingPage/>
      },
      {
        path : "login",
        element : <Login/>
      },
      {
        path : "signup",
        element : <Signup/>
      }
    ]
  }
 ])
  return (
    <div className="App font-rubik  bg-white">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
