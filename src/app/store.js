import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from '../features/counter/counterSlice'

export default configureStore({
  reducer: {
    tasks: tasksReducer,
  },
})