import { RouterProvider } from 'react-router';
import { router } from './app.routes.jsx';
import './main.css';
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
