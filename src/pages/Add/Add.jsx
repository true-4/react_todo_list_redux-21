import { useState } from "react"
import { useDispatch } from "react-redux"
import { NavLink, useNavigate } from "react-router"
import { addTask } from "../../features/counter/counterSlice"

export const Add = () => {
  const [title, setTitle] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSave = () => {
    if (title.trim() !== '') {
      dispatch(addTask(title))
      navigate('/tasks')
    }
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(), handleSave()}} style = {{display: 'flex', gap: '20px'}}>
      <input 
      value = {title}
      onChange = {ev => setTitle(ev.target.value)}
      type="text" 
      placeholder="Name your task" 
      />
      <button type="submit">Save</button>
    </form>
  )
}