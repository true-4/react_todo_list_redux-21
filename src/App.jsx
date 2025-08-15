import './App.css'
import { RouterProvider } from 'react-router'
import { router } from './app/router'
import store from './app/store'
import { Provider } from 'react-redux'


function App() {
  return (
    <Provider store={store}>
      <RouterProvider router = {router} /> 
    </Provider>
  )
}

export default App