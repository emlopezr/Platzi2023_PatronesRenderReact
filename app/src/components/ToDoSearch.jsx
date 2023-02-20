import React from 'react'
import '../css/ToDoSearch.css'

const ToDoSearch = ({searchValue, setSearchValue}) => {

    const oncSearchValueChange = e => setSearchValue(e.target.value)

    return (
        <input
            className="ToDoSearch"
            placeholder="Buscar To-Dos"
            onChange={oncSearchValueChange}
            value={searchValue}
        />
    )
}

export default ToDoSearch