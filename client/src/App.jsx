import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./layouts/Main";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { AuthContextProvider } from "./context/AuthContext";
import Calculators from "./pages/Calculators";
import EnrolledSplits from "./pages/EnrolledSplits";
import Search from "./pages/Search";
import VideoSearch from "./pages/VideoSearch";
import Exercise from "./pages/Exercise";
import Split from "./pages/Split";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path : "calculators",
          element : <Calculators/>
        },
        {
          path : "enrolledsplits",
          element : <EnrolledSplits/>
        },
        {
          path : "search",
          element : <Search/>
        },
        {
          path : "videosearch",
          element : <VideoSearch/>
        },
        {
          path : "exercise/:id",
          element : <Exercise/>
        },
        {
          path : "split/:id",
          element : <Split/>
        }
      ],
    },
  ]);
  return (
    <div className="App font-rubik  bg-white">
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
