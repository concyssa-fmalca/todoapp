import React, { useState } from 'react'
import uniqid from 'uniqid'

export const FormNew = ({setTasks, tasks}) => {
    const [task, setTask] = useState(''); 

    const handleChange = (e) => {
        setTask(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();                  
        setTasks([...tasks, {taskName: task, completed:false, key: uniqid() }])
        setTask('');
    }

  return (
    <form onSubmit={handleSubmit}>
        <input 
            className='addTask'  
            type="text" 
            placeholder='Add New' 
            value={task}
            onChange={handleChange}

            />
    </form>
  )
}
