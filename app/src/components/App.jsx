import React from "react";
import { useToDos } from "../hooks/useToDos";

import CreateToDoButton from "./CreateToDoButton";
import ToDoCounter from "./ToDoCounter";
import ToDoHeader from "./ToDoHeader";
import ToDoSearch from "./ToDoSearch";
import ToDoList from "./ToDoList";
import ToDoItem from "./ToDoItem";
import ToDoForm from "./ToDoForm";
import Modal from "./Modal";

import '../css/App.css'

const App = () => {

    const {
        error,
        loading,
        filteredToDos,
        completeToDo,
        deleteToDo,
        addToDo,
        openModal,
        setOpenModal,
        totalToDos,
        completedToDos,
        searchValue,
        setSearchValue
    } = useToDos();

    return (
        <>
            <ToDoHeader>
                <ToDoCounter
                    totalToDos={totalToDos}
                    completedToDos={completedToDos}
                />

                <ToDoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
            </ToDoHeader>

            <ToDoList>
                {error && <p>Error!</p>}
                {loading && <p>Cargando...</p>}

                {filteredToDos.map((todo) => (
                    <ToDoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeToDo(todo.text)}
                        onDelete={() => deleteToDo(todo.text)}
                    />
                ))}
            </ToDoList>

            {openModal && (
                <Modal>
                    <ToDoForm
                        setOpenModal={setOpenModal}
                        addToDo={addToDo}
                    />
                </Modal>
            )}

            <CreateToDoButton
                setOpenModal={setOpenModal}
            />
        </>
    );
};

export default App;
