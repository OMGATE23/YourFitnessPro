import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getExerciseDescription,
  getOneExercisebyID,
  getYouTubeVideo,
} from "../../helper";
import Paragraph from "../../components/Paragraph";
import Sidebar from "../../components/Sidebar";

const Exercise = () => {
  const { id } = useParams();
  const [exercise, setExercise] = useState();
  const [url, setUrl] = useState();

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
        <div className="w-full m-12  flex items-center justify-between gap-12">
          {/* <div className="w-[60%] h-4/5 ml-12 flex flex-col justify-evenly gap-12 items-center">
            {url && (
              <iframe
                className="w-4/5 aspect-video"
                src={`https://www.youtube.com/embed/${url}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            )}
          </div>
          <div className="mr-12 outline outline-2 h-full flex flex-col items-center justify-center gap-8">
            <div>
              <h1> Name : {exercise.name}</h1>
              <p>Target Muscle : {exercise.target} </p>
              <p>Body Part Exercised : {exercise.bodyPart}</p>
              <p>Equipment : {exercise.equipment}</p>
            </div>
            <img src={exercise.gifUrl} />
          </div> */}
          <div className="bg-white w-[90%] py-12  mx-auto rounded-md shadow-xl overflow-hidden flex items-center justify-evenly">
            {/* YouTube embed video */}
            <div className=" bg-gray-100 rounded-2xl w-[60%] p-16">
              <iframe
                title={exercise.name}
                src={`https://www.youtube.com/embed/${url}`}
                allowFullScreen
                className="w-full aspect-video"
              />
              <h1 className="text-3xl font-bold text-gray-800 p-4 capitalize">
              {exercise.name}
            </h1>
            </div>

            {/* Title */}
            

            {/* List of points */}
            <div className="border-2 border-gray-300 ">
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
