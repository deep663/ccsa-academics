import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Assignment from "./pages/Assignment";
import Dashboard from "./pages/Dashboard";
import FinalResults from "./pages/FinalResults";
import InsemMarks from "./pages/InsemMarks";
import Lab from "./pages/Lab";
import About from "./pages/About";
import Pagenotfound from "./pages/Pagenotfound";
import TeacherReg from "./components/TeacherReg";
import StudentReg from "./components/StudentReg";
import StudentLogin from "./components/StudentLogin";
import TeacherLogin from "./components/TeacherLogin";
import TeacherDesboard from "./pages/TeacherDesboard";
import AuthOutlet from "@auth-kit/react-router/AuthOutlet";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/teacherreg" element={<TeacherReg />} />
        <Route path="/studentreg" element={<StudentReg />} />
        <Route path="/studentlogin" element={<StudentLogin />} />
        <Route path="/teacherlogin" element={<TeacherLogin />} />
        <Route element={<AuthOutlet fallbackPath="/login" />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/teacherdashboard" element={<TeacherDesboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/assignment" element={<Assignment />} />
          <Route path="/finalresults" element={<FinalResults />} />
          <Route path="/insemmarks" element={<InsemMarks />} />
          <Route path="/lab" element={<Lab />} />
        </Route>
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </Router>
  );
}

export default App;
