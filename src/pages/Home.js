import {useEffect, useState} from "react";
import {Box} from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
import {exerciseOptions, fetchData} from "../utils/fetchData";

export default function Home() {

    const [bodyPart, setBodyPart] = useState("all");
    const [exercises, setExercises] = useState([]);
    // const [] = useState();

    // useEffect(() => {
    //     const fetchExercisesData = async () => {
    //         let exercisesData = [];
    //
    //         exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", exerciseOptions);
    //         setExercises(exercisesData)
    //     }
    //     fetchExercisesData();
    //
    // }, [])


    return (
        <Box>
            <HeroBanner/>
            <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
            <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises}/>
        </Box>
    )
}