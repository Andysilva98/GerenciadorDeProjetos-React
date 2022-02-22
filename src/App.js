import React, { useState } from 'react';
import Tasks from './components/Tasks/Tasks'
import AddTask from './components/AddTask/AddTask';
import{v4 as uuidv4} from 'uuid'

import './App.css'

export default function App() {
  
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar',
      complete: false
    },
    {
      id: '2',
      title: 'Ler livros',
      complete: true
    }
  ])

  const handleTaskAddition = taskTitle => {
    const newTasks = [...tasks,
      {
        id: uuidv4(),
        title: taskTitle ,
        complete: false
      }
    ]
    setTasks(newTasks)
  }

  return (
    <>
      <div className='container'>
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks tasks={tasks}/>
      </div>
    
    </>      
  )
}
