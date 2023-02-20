import React, { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";

const ToDoContext = React.createContext();

function ToDoProvider(props) {
    // Custom hook localStorage
    const {
        item: toDos,
        saveItem: saveToDos,
        loading,
        error,
    } = useLocalStorage("ToDos", []);

    // useStates
    const [searchValue, setSearchValue] = useState("");
    const [openModal, setOpenModal] = useState(false);

    // Funcionalidad de contar ToDos
    const totalToDos = toDos.length;
    const completedToDos = toDos.filter((todo) => todo.completed).length;

    // Funcionalidad de búsqueda
    let filteredToDos = [];

    if (searchValue.length > 0) {
        filteredToDos = toDos.filter((toDo) =>
            toDo.text.toLowerCase().includes(searchValue.toLowerCase())
        );
    } else {
        filteredToDos = toDos;
    }

    // Funcionalidad de completar ToDos
    const completeToDo = text => {
        const newToDos = toDos.map((toDo) => {
            if (toDo.text === text) {
                return { ...toDo, completed: !toDo.completed };
            } else {
                return toDo;
            }
        });

        saveToDos(newToDos);
    };

    // Funcionalidad de borrar ToDos
    const deleteToDo = text => {
        const newToDos = toDos.filter((toDo) => toDo.text !== text);
        saveToDos(newToDos);
    };

    // Funcionalidad de agregar ToDo
    const addToDo = text => {
        const newToDos = [...toDos, { text, completed: false }];
        saveToDos(newToDos);
    }

    return (
        <ToDoContext.Provider
            value={{
                loading,
                error,
                totalToDos,
                completedToDos,
                searchValue,
                setSearchValue,
                filteredToDos,
                completeToDo,
                deleteToDo,
                addToDo,
                openModal,
                setOpenModal,
            }}
        >
            {props.children}
        </ToDoContext.Provider>
    );
}

export { ToDoContext, ToDoProvider };
