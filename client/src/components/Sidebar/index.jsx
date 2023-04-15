import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  DocumentIcon,
  CalculatorIcon,
  MagnifyingGlassIcon,
  ClipboardDocumentCheckIcon,
  ArrowRightOnRectangleIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import { useAuthContext } from "../../hooks/useAuthContext";
import {logoutAction} from '../../helper'

const Sidebar = () => {
  const navigate = useNavigate();
  const {setUser} = useAuthContext()

  async function logout() {
    try {
      await logoutAction()
      localStorage.clear();
      setUser(null)
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className=" sticky top-0 left-0 h-[100vh] w-[5rem] lg:w-[25%] flex items-center border-r border-gray-500 text-white">
      <div className=" flex flex-col text-black w-full mb-36">
        <Link to="/dashboard" className="block">
          <div className="flex justify-center lg:justify-start gap-4  w-2/3 mx-auto my-4 lg:my-0">
            <DocumentIcon className=" w-[26px] lg:w-[20px]" width={20} />
            <span className="hidden lg:block  py-3 text-center text-xl ">
              Dashboard
            </span>
          </div>
        </Link>
        <Link to="/calculators" className="block">
          <div className="flex justify-center lg:justify-start gap-4  w-2/3 mx-auto my-4 lg:my-0">
            <CalculatorIcon className="  w-[26px] lg:w-[20px]" width={24} />
            <span className="hidden lg:block  py-3 text-center text-xl ">
              Calculators
            </span>
          </div>
        </Link>
        <Link to="/enrolledsplits" className="block">
          <div className="flex justify-center lg:justify-start gap-4  w-2/3 mx-auto my-4 lg:my-0">
            <ClipboardDocumentCheckIcon className="w-[26px] lg:w-[20px]" width={20} />
            <span className="hidden lg:block  py-3 text-center text-xl ">
              Splits
            </span>
          </div>
        </Link>
        <Link to="/search" className="block">
          <div className="flex justify-center lg:justify-start gap-4  w-2/3 mx-auto my-4 lg:my-0">
            <MagnifyingGlassIcon className="w-[26px] lg:w-[20px]" width={20} />
            <span className="hidden lg:block  py-3 text-center text-xl ">
              Search
            </span>
          </div>
        </Link>
        
        <button className="block" onClick={logout}>
          <div className="flex justify-center lg:justify-start gap-4  w-2/3 mx-auto my-4 lg:my-0">
            <ArrowRightOnRectangleIcon
              className="w-[26px] lg:w-[20px]"
              width={20}
            />
            <span className="hidden lg:block  py-3 text-center text-xl ">
              Log Out
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
