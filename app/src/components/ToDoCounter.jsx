import React from 'react'
import '../css/ToDoCounter.css'

const ToDoCounter = ({ totalToDos, completedToDos }) => {

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