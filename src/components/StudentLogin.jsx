import { useState } from "react";
import logo from "../assets/uniLogo.png";
import Footer from "./Footer";

const StudentLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
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
          {/* <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p> */}
        </div>
      <div className="w-1/3 bg-white flex flex-col justify-center p-8 shadow-lg">
        <h2 className="text-3xl mx-auto font-bold mb-8 text-[#13178f]">Student Login</h2>
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
    <Footer/>
    </>
  );
};

export default StudentLogin;