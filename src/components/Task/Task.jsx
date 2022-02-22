import React from 'react'

import './Task.css'

export default function Task({task}) {
    return (
        <div className='task-container'>
            {task.title}
        </div>
        
    )
}