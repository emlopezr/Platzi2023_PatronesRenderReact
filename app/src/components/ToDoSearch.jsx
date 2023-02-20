import React, { useContext } from 'react'
import { ToDoContext } from "../ToDoContext";
import '../css/ToDoSearch.css'

const ToDoSearch = () => {
    const {searchValue, setSearchValue} = useContext(ToDoContext)

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