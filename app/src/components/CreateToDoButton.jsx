import React from 'react'
import '../css/CreateToDoButton.css'

const CreateToDoButton = ({ setOpenModal }) => {

    const onClickButton = () => {
        setOpenModal(prevState => !prevState)
    }

    return (
        <button
            className="CreateToDoButton"
            onClick={onClickButton}
        >
            +
        </button>
    )
}

export default CreateToDoButton