import React from 'react'
import '../css/ToDoList.css'

const ToDoList = ({ error, loading, filteredToDos, onError, onLoading, render }) => {
    return (
        <section className='ToDoList-container'>
            {error && onError()}
            {loading && onLoading()}

            {!error && !loading &&
                <ul>
                    {filteredToDos.map(render)}
                </ul>
            }
        </section>
    )
}

export default ToDoList