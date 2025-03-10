import React, { useContext } from 'react'
import TaskShow from './TaskShow'
import './TaskList.css'
import TaskContext from '../context/task'

function TaskList() {
  const {taskList} = useContext(TaskContext);
  return (
    <div className='task-list'>
        {taskList.map((task, index) => {
            return <TaskShow key={index} task={task}  />
        })}
    </div>
  )
}

export default TaskList