import { createBrowserRouter } from "react-router";
import { Tasks } from "../pages/Tasks/Tasks";
import { Main } from "../pages/Main/Main";
import { Add } from "../pages/Add/Add";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/tasks',
    element: <Tasks />,
  },
  {
    path: '/add',
    element: <Add />,
  },
])