import React from 'react'
import Task from '../Task/Task'

 


export default function Tasks({tasks}) {
    return (
        <>
            {tasks.map(task => <Task task={task}/>)}
        </>        
    )
}