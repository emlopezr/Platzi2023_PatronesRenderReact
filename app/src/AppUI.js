import React, { useContext } from "react";

import { ToDoContext } from "./ToDoContext";

import CreateToDoButton from "./components/CreateToDoButton";
import ToDoCounter from "./components/ToDoCounter";
import ToDoSearch from "./components/ToDoSearch";
import ToDoList from "./components/ToDoList";
import ToDoItem from "./components/ToDoItem";
import ToDoForm from "./components/ToDoForm";
import Modal from "./components/Modal";

const AppUI = () => {
    const {
        error,
        loading,
        filteredToDos,
        completeToDo,
        deleteToDo,
        openModal,
        setOpenModal,
    } = useContext(ToDoContext);

    return (
        <>
            <ToDoCounter />

            <ToDoSearch />

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
                    <ToDoForm />
                </Modal>
            )}

            <CreateToDoButton
                setOpenModal={setOpenModal}
            />
        </>
    );
};

export default AppUI;
