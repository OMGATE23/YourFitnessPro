import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getExerciseDescription,
  getOneExercisebyID,
  getYouTubeVideo,
  getAllSplitsAction,
  enrollExerciseAction,
} from "../../helper";
import Paragraph from "../../components/Paragraph";
import Sidebar from "../../components/Sidebar";
import { useAuthContext } from "../../hooks/useAuthContext";
import { toast } from "react-toastify";

const Exercise = () => {
  const { id } = useParams();
  const [exercise, setExercise] = useState();
  const [url, setUrl] = useState();
  const [splits, setSplits] = useState();
  const [selectedSplit, setSelectedSplit] = useState("");
  const { user } = useAuthContext();

  const handleSelectChange = (event) => {
    setSelectedSplit(event.target.value);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log(selectedSplit);
    console.log({name : exercise.name , split_id : selectedSplit , exercise_id : id})
    const data= await enrollExerciseAction({name : exercise.name , split_id : selectedSplit , exercise_id : id})
    console.log(data)
    if(data.success){
      toast.success("Exercise enrolled successfully")
    }
  };

  const splitsLoader = async () => {
    const response = await getAllSplitsAction();
    console.log(JSON.stringify(response.splitDetails));
    setSplits(response.splitDetails);
  };

  useEffect(() => {
    splitsLoader();
  }, []);

  async function getVideo(name) {
    const { data } = await getYouTubeVideo(name);
    console.log(
      data?.results[1].url.replace("https://www.youtube.com/watch?v=", "")
    );
    setUrl(
      data?.results[1].url.replace("https://www.youtube.com/watch?v=", "")
    );
  }
  useEffect(() => {
    const exercise = getOneExercisebyID(id);
    setExercise(exercise);
    console.log(exercise);
    getVideo(exercise.target);
  }, []);
  return (
    <div className="flex">
      <Sidebar />
      {exercise && (
        <div className="w-full  xl:m-12  flex  items-center justify-between gap-12 ">
          
          <div className="flex flex-col items-center justify-evenly bg-white w-[90%] py-12  mx-auto rounded-md shadow-xl overflow-hidden xl:flex-row">
            {/* YouTube embed video */}
            <div className=" bg-gray-100 rounded-2xl w-[400px] p-6  xl:p-16 xl:w-[55%]">
              <iframe
                title={exercise.name}
                src={`https://www.youtube.com/embed/${url}`}
                allowFullScreen
                className="w-full aspect-video"
              />
              <h1 className="text-3xl font-bold text-gray-800 p-4 capitalize text-center xl:text-left">
                {exercise.name}
              </h1>
            </div>

            {/* Title */}

            {/* List of points */}
            <div className="border-2 border-gray-300 mt-12 ">
              <ul className="text-lg w-[70%] mx-auto text-gray-600 p-4">
                <li>
                  <span className="font-bold">Equipment:</span>{" "}
                  {exercise.equipment}
                </li>
                <li>
                  <span className="font-bold">Body Part:</span>{" "}
                  {exercise.bodyPart}
                </li>
                <li>
                  <span className="font-bold">Target Muscle:</span>{" "}
                  {exercise.target}
                </li>
              </ul>
              {splits && (
                <div className="flex items-center justify-center gap-3">
                  <label htmlFor="split-select"></label>
                  <select
                    id="split-select"
                    value={selectedSplit}
                    onChange={handleSelectChange}
                    className="py-2 px-1 rounded-lg"
                  >
                    <option value="">-- Select a split --</option>
                    {splits.map((split) => (
                      <option key={split._id} value={split._id}>
                        {split.name}
                      </option>
                    ))}
                  </select>
                  <button className="py-1 px-2 outline outline-1 rounded-lg" onClick={handleSubmit} type="submit">
                    Submit
                  </button>
                </div>
              )}
              {/* Exercise gif */}
              <div className="">
                <img
                  src={exercise.gifUrl}
                  alt={`${exercise.name} gif`}
                  className="object-cover w-2/3 mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Exercise;
