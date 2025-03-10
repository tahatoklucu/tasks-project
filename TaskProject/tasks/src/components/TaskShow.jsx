import React, { useContext, useState } from 'react'
import './TaskList.css'
import TaskCreate from './TaskCreate';
import TaskContext from '../context/task'

function TaskShow({task}) {

    const {deleteUseId, editTaskUseId} = useContext(TaskContext);

    const [edit, setEdit] = useState(false);
    const deleteClick = () => {
        deleteUseId(task.id);
    }
    const editClick = () => {
        setEdit(!edit);
    }
    const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
        setEdit(false);
        editTaskUseId(id, updatedTitle, updatedTaskDesc);
    }
  return (
    <div className='show-container'>
        {edit ? (<>
            <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit} />
        </>) : (<div>
            <h3 className='show-head'>-Your Task-</h3>
            <p className='show-title'>{task.title}</p>
            <h3 className='show-head'>-Things to do-</h3>
            <p className='show-title'>{task.taskDesc}</p>
            <div>
                <button className='delete-button' onClick={deleteClick}>Delete</button>
                <button className='update-button' onClick={editClick}>Update</button>
            </div>
        </div>
        )}
    </div>
  )
}

export default TaskShow