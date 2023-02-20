import React from 'react'
import '../css/ToDoItem.css'

const ToDoItem = ({text, completed, onComplete, onDelete}) => {

    return (
        <li className="ToDoItem">
            <span
                className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
                onClick={onComplete}
            >
                <i className="fa-sharp fa-solid fa-circle-check"></i>
            </span>

            <p className={`ToDoItem-p ${completed && 'ToDoItem-p--completed'}`}>
                {text}
            </p>

            <span
                className="Icon Icon-delete"
                onClick={onDelete}
            >
                <i className="fa-sharp fa-solid fa-circle-xmark"></i>
            </span>

        </li>
    )
}

export default ToDoItem