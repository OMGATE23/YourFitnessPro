import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { createSplitAction, getAllSplitsAction } from "../../helper";
import {Link} from 'react-router-dom'

const EnrolledSplits = () => {
  const [splits, setSplits] = useState();
  const [name , setName] = useState()
  const splitsLoader = async () => {
    const response = await getAllSplitsAction();
    console.log(response.splitDetails);
    setSplits(response.splitDetails);
  };

  const createNewSplit = async () => {
    const data = await createSplitAction(name)
    await splitsLoader()
  }
  useEffect(() => {
    splitsLoader();
  }, []);
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <h1 className="text-6xl font-semibold m-8">Enrolled Splits</h1>
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row ">
          <input className="py-2  px-2 w-[300px] md:w-[30%] outline outline-1 rounded-xl" onChange={e => setName(e.target.value)} placeholder="Enter new split name ..." />
          <button className="py-2 px-3 rounded-xl outline outline-1 hover:bg-gray-200" onClick={createNewSplit}>Create</button>
        </div>
        <div className=" w-2/3 grid grid-cols-1 gap-12 justify-items-center my-12 mx-auto md:grid-cols-2 lg:grid-cols-3">
          {splits &&
            splits.map((split) => (
              <Link to = {`/split/${split._id}`}
                className="flex flex-col items-center text-xl justify-center gap-2 outline outline-1 rounded-xl hover:bg-gray-100 hover:cursor-pointer transition-all mx-2 duration-150 shadow-lg w-[200px] h-[150px]"
                key={split._id}
              >
                <p className="font-semibold capitalize">{split.name}</p>
                <p>No of Exercises : {split.exercises.length}</p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default EnrolledSplits;
