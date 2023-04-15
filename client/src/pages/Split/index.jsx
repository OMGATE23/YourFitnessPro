import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import { useParams } from 'react-router-dom'
import { getOneExercisebyID, getSplitsAndExercisesAction } from '../../helper'
import Card from '../../components/Card'

const Split = () => {
    const {id} = useParams()
    const [exerciseList , setExerciseList] = useState()
    const splitLoader = async() =>{
        const data = await getSplitsAndExercisesAction(id)
        console.log(data.exerciseDetails)

        let listofExercises = []

        for(let i = 0 ; i < data.exerciseDetails.length ; i++ ){
            let exercise = getOneExercisebyID(data.exerciseDetails[i].exercise_id)
            listofExercises.push(exercise)
        }
        console.log(listofExercises)
        setExerciseList(listofExercises)
    }

    useEffect(() => {
        console.log(id)
        splitLoader()
    } , [])
  return (
    <div className='flex'>
        <Sidebar/>
        <div className='w-full'>
            <h1 className='text-4xl m-8 font-semibold'>Welcome to Your Split</h1>
            {
                exerciseList && (
                    <div className='flex py-8 flex-wrap justify-center gap-8'>
                        {
                            exerciseList.map( exercise => (
                                <Card name = {exercise.name} gifUrl={exercise.gifUrl} id={exercise.id}/>
                            ))
                        }
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Split