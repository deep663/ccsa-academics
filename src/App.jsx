import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Assignment from './pages/Assignment'
import Dashboard from './pages/Dashboard'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FinalResults from './pages/FinalResults'
import InsemMarks from './pages/InsemMarks'
import Lab from './pages/Lab'
import About from './pages/About'
import Pagenotfound from './pages/Pagenotfound'
import TeacherReg from './components/TeacherReg'
import StudentReg from './components/StudentReg'
import StudentLogin from './components/StudentLogin'
import TeacherLogin from './components/TeacherLogin'
import TeacherDesboard from './pages/TeacherDesboard'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: < Dashboard/>
    },
        {
      path: "/techerdesboard",
      element: <TeacherDesboard/>
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
      path: "/teacherreg",
      element: <TeacherReg/>
    },
    {
      path: "/studentreg",
      element: <StudentReg/>
    },
    {
      path: "/studentlogin",
      element: <StudentLogin/>
    },
    {
      path: "/teacherlogin",
      element: <TeacherLogin/>
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
