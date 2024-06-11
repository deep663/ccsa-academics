import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Assignment from "./pages/Assignment";
import Dashboard from "./pages/Dashboard";
import FinalResults from "./pages/FinalResults";
import InsemMarks from "./pages/InsemMarks";
import Pagenotfound from "./pages/Pagenotfound";
import TeacherReg from "./components/TeacherReg";
import StudentReg from "./components/StudentReg";
import StudentLogin from "./components/StudentLogin";
import TeacherLogin from "./components/TeacherLogin";
import TeacherDesboard from "./pages/TeacherDesboard";
import AuthOutlet from "@auth-kit/react-router/AuthOutlet";
import ViewAssignment from "./pages/ViewAssignment";
import UplodaFinalResults from "./pages/UplodaFinalResults";
import About from "./components/About";
import Contact from "./components/Contact";
import Certificate from "./pages/Certificate";
import ViewCertificate from "./pages/ViewCertificate";
import ViewInsemMarks from "./pages/ViewInsemmarks";
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
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route element={<AuthOutlet fallbackPath="/login" />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/teacherdashboard" element={<TeacherDesboard />} />
          <Route path="/viewAssignment" element={<ViewAssignment />} />
          <Route path="/finalresults" element={<FinalResults />} />
          <Route path="/insemmarks" element={<InsemMarks />} />
          <Route path="/viewInsemMarks" element={<ViewInsemMarks />} />
          <Route path="/assignment" element={<Assignment />} />
          <Route path="/uploadFinalResults" element={<UplodaFinalResults />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/viewCertificate" element={<ViewCertificate/>} />
        </Route>
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </Router>
  );
}

export default App;
