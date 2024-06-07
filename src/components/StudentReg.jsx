import { useState } from "react";
import logo from "../assets/uniLogo.png";
import Footer from "./Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StudentReg = () => {
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [course, setCourse] = useState("");
  const [semester, setSemester] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/user/studentRegister", {
        name,
        rollNo,
        course,
        semester,
        email,
        phoneNo,
        password,
      });

      if (response.status === 201) {
        alert("Registration successful!");
        navigate('/studentlogin');
      } else {
        alert(`Registration failed`);
        console.log(response.data);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      if (error.response && error.response.data) {
        alert(error.response.data);
        console.log(error.response.data);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="min-h-screen flex">
      <div className="w-1/2 bg-[#13178f] text-white flex flex-col justify-center p-8">
          <div className="mb-8 flex justify-center items-center">
            <img src={logo} alt="University Logo" className="h-40" />
          </div>
          <div className="flex justify-center items-center">
            <h2 className="text-3xl font-bold mb-4">
              Centre for Computer Science and Applications
            </h2>
          </div>
        </div>
        <div className="w-1/2 bg-white flex flex-col justify-center p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#13178f]">Student Register</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Roll No</label>
              <input
                type="text"
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Course</label>
              <input
                type="text"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700"> Semester </label>
              <input
                type="text"
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone No.</label>
              <input
                type="text"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#1f5ad9] text-white py-2 rounded hover:bg-[#13178f] transition duration-200"
            >
              Register
            </button>
          </form>
        </div>
        
      </div>
      <Footer />
    </>
  );
};

export default StudentReg;
