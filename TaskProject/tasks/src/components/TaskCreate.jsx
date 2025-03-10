import React, { useContext, useState } from 'react'
import './TaskCreate.css';
import TaskContext from '../context/task'

function TaskCreate({ task, taskFormUpdate, onUpdate }) {

    const {create, editTaskUseId} = useContext(TaskContext);

    const [title, setTitle] = useState(task ? task.title : '');
    const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : '');
    const taskChange = (event) => {
        setTitle(event.target.value);
    }
    const taskAreaChange = (event) => {
        setTaskDesc(event.target.value);
    }
    const taskSubmit = (event) => {
        event.preventDefault();
        if(taskFormUpdate){
            onUpdate(task.id, title, taskDesc)
        }
        else{
            create(title, taskDesc);
        }
        setTitle('');
        setTaskDesc('');
    }
    return (
        <div>
            {taskFormUpdate ? (
                <div className='task-update'>
                    <h3 className='task-notify task-color'>Please edit the Task!</h3>
                    <form className='task-form' onSubmit={taskSubmit}>
                        <label className='task-head task-color'>Edit The Task Title</label>
                        <input className='task-input' value={title} onChange={taskChange} type='text' required />
                        <label className='task-head task-color'>Edit The Tasks</label>
                        <textarea className='task-input' value={taskDesc} onChange={taskAreaChange} rows={5} required />
                        <button className='task-button save-button'>Save</button>
                    </form>
                </div>
            ) : 
                <div className='task-container'>
                    <h3 className='task-notify'>Please Add a Task!</h3>
                    <form className='task-form' onSubmit={taskSubmit}>
                        <label className='task-head'>Task Title</label>
                        <input className='task-input' value={title} onChange={taskChange} type='text' required />
                        <label className='task-head'>Enter The Tasks</label>
                        <textarea className='task-input' value={taskDesc} onChange={taskAreaChange} rows={5} required />
                        <button className='task-button'>Create</button>
                    </form>
                </div>
            }
        
            
        </div>
    )
}

export default TaskCreate