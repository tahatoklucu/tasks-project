import axios from "axios";
import React, { createContext, useState } from "react";


const TaskContext = createContext();

function Provider({children}){
    const [taskList, setTaskList] = useState([])

    const create = async (title, taskDesc) => {
        const response = await axios.post('https://json-server-vercel-7bheydn0b-taha-toklucus-projects.vercel.app/taskList', {
            title, 
            taskDesc
    });
    console.log(response);
    const availableTasks=[
      ...taskList, 
      response.data
    ];
    setTaskList(availableTasks);
  };

    const fetchTasks = async () => {
        const response = await axios.get('https://json-server-vercel-7bheydn0b-taha-toklucus-projects.vercel.app/taskList');
        setTaskList(response.data);
    }

    const deleteUseId = async (id) => {
        await axios.delete(`https://json-server-vercel-7bheydn0b-taha-toklucus-projects.vercel.app/taskList/${id}`);
        const newTaskList = taskList.filter((task) => {
        return task.id !== id; 
    })
    setTaskList(newTaskList);
    }

    const editTaskUseId = async (id, updatedTitle, updatedTaskDesc) => {
        await axios.put(`https://json-server-vercel-7bheydn0b-taha-toklucus-projects.vercel.app/taskList/${id}`,{
            title: updatedTitle,
            taskDesc: updatedTaskDesc
        });

    const updatedTask = taskList.map((task) => {
      if(task.id === id){
        return {id, title: updatedTitle, taskDesc: updatedTaskDesc};
      }
      return task;
    })
    setTaskList(updatedTask);
    }
    const ValuesAndMethods = {
        taskList,
        create,
        fetchTasks,
        deleteUseId,
        editTaskUseId
    }
    return (
        <TaskContext.Provider value={ValuesAndMethods}>
            {children}
        </TaskContext.Provider>
    )
}

export {Provider}
export default TaskContext;
