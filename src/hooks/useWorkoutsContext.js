import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext)

    if(!context){
        throw Error("use WorkoutsContext must be used inside WorkoutsContextProvider")
    }

    return context
}