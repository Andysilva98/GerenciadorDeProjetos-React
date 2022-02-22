import React, { useState } from 'react'

import Button from '../Button/Button'

import './AddTask.css'

export default function AddTask({ handleTaskAddition}) {
    const [inputData, setInputData] = useState('')

    const handleInputChange = e => {
        setInputData(e.target.value)
    }

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData)
        setInputData('')
    }

    return (
        <div className='add-task-container'>
            <input
                type="text"
                className='add-task-input'
                value={inputData}
                onChange={handleInputChange}
            />
            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
    )
}