import React, { useContext, useState } from 'react'
import { ToDoContext } from "../ToDoContext";
import '../css/ToDoForm.css'

const ToDoForm = () => {
    const [toDoText, setToDoText] = useState('')

    const { addToDo, setOpenModal } = useContext(ToDoContext)

    const onCancel = () => {
        setOpenModal(false)
    }

    const onAdd = e => {
        e.preventDefault()
        addToDo(toDoText)
        setOpenModal(false)
    }

    return (
        <form onSubmit={onAdd}>
            <label htmlFor=""></label>
            <textarea
                placeholder='Añade un To-Do. Por ejemplo: Seguir a @lopezemmanuel en GitHub :)'
                onChange={e => setToDoText(e.target.value)}
                value={toDoText}
            />

            <div className="TodoForm-buttonContainer">

                <button
                    className='TodoForm-button TodoForm-button-cancel'
                    type='button'
                    onClick={onCancel}
                >
                    Cancelar
                </button>

                <button
                    className='TodoForm-button TodoForm-button-add'
                    type='submit'
                >
                    Añadir
                </button>

            </div>
        </form>
    )
}

export default ToDoForm