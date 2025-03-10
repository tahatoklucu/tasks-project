import { useContext, useEffect } from 'react'
import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'
import TaskContext from './context/task'

function App() {
  
  const {fetchTasks} = useContext(TaskContext);

  useEffect(() => {
    fetchTasks();
  },[])

 
  return (
    <div className='app-container'>
      <TaskCreate />
      <h1 className='available-tasks'>Available Tasks</h1>
      <TaskList />
    </div>
  )
}

export default App