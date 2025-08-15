import { NavLink } from "react-router"

export const Main = () => {

  
  return (
    <header>
      <h1>Добро пожаловать в ToDo-приложение</h1>
      <NavLink to = '/tasks'><button>Перейти к списку задач</button></NavLink>
    </header>
  ) 
}