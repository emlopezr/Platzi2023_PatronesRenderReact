import React from 'react'
import '../css/ToDoList.css'

const ToDoList = ({children}) => {
    return (
        <section>
            <ul>
                {children}
            </ul>
        </section>
    )
}

export default ToDoList