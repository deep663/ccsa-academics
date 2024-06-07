import { useState } from "react";
import logo from "../assets/uniLogo.png";
import Footer from "./Footer";
import axios from "axios";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { useNavigate } from "react-router-dom";

const TeacherLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signin = useSignIn();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/user/teacherLogin",
        {
          email,
          password,
        }
      );
      // console.log(response.data);
      signin({
        auth: {
          token: response.data.token,
          type: "Bearer",
        },
        userState: { userType: "teacher", email: email },
      });

      if (response.status === 200) {
        alert("Login successful");
        navigate("/teacherdashboard");
      }
    } catch (error) {
      if(error.response.status === 401){
        alert("Invalid email or password");
      }
      console.error(error);
    }
  };

  return (
    <>
      <div className="min-h-screen flex">
        <div className="w-2/3 bg-[#13178f] text-white flex flex-col justify-center p-8">
          <div className="mb-8 flex justify-center items-center">
            <img src={logo} alt="University Logo" className="h-40" />
          </div>
          <div className="flex justify-center items-center">
            <h2 className="text-3xl font-bold mb-4">
              Centre for Computer Science and Applications
            </h2>
          </div>
        </div>
        <div className="w-1/3 bg-white flex flex-col justify-center p-8 shadow-lg">
          <h2 className="text-3xl mx-auto font-bold mb-8 text-[#13178f]">
            Teacher Login
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
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
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#1f5ad9] text-white py-2 rounded hover:bg-[#13178f] transition duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TeacherLogin;
