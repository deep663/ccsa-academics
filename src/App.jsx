import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import Assignment from './pages/Assignment'
import Dashboard from './pages/Dashboard'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FinalResults from './pages/FinalResults'
import InsemMarks from './pages/InsemMarks'
import Lab from './pages/Lab'
import About from './pages/About'
import Pagenotfound from './pages/Pagenotfound'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard/>
    },
    {
      path: "/about",
      element: <About/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element: <Register/>
    },
    {
      path: "/assignment",
      element: <Assignment/>
    },
    {
      path:"/finalresults",
      element: <FinalResults/>
    },
    {
      path: "/insemmarks",
      element: <InsemMarks/>
    },
    {
      path: "/lab",
      element: <Lab/>
    },
    {
      path: "*",
      element: <Pagenotfound/>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
