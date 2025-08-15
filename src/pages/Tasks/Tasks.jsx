import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router"
import { deleteTask } from "../../features/counter/counterSlice"

export const Tasks = () => {
  const tasks = useSelector(state => state.tasks.tasks)
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }
  
  return (
    <div>
      <h2>Tasks List</h2>
      <ul>
        {tasks.map(task => (
          <li key = {task.id} style = {{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <input type = "checkbox" />
            <h3>{task.title}</h3>
            <button onClick = {() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <NavLink to='/add'><button>Add Task</button></NavLink>
    </div>
  )
}