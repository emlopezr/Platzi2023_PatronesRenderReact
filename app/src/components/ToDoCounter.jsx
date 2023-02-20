import React, { useContext } from 'react'
import { ToDoContext } from "../ToDoContext";
import '../css/ToDoCounter.css'

const ToDoCounter = () => {
    const {totalToDos, completedToDos} = useContext(ToDoContext)

    return (
        <h2 className="ToDoCounter">
            {totalToDos !== 0
                ? `Has completado ${completedToDos} de ${totalToDos} To-Dos`
                : 'No hay To-Dos, agrega uno!'
            }
            
        </h2>
    )
}

export default ToDoCounter