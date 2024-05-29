import { NavLink } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/Footer";
import TeacherReg from "../components/TeacherReg";

function Register() {
  const [user, setUser] = useState(null);

  function handleCheckLogin(value) {
    setUser(value);
    if (user === "teacher") {
      document.getElementById("loginCheck").classList.add("hidden");
      document.getElementById("register").classList.remove("hidden");
    } else if (user === "student") {
      document.getElementById("loginCheck").classList.add("hidden");
      document.getElementById("register").classList.remove("hidden");
    }
  }

  return (
    <>
      <nav className="flex px-4 py-4 bg-slate-50 border-gray-200 dark:bg-gray-900 justify-between">
        <NavLink
          to="/"
          className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            CCSA ACADEMICS
          </span>
        </NavLink>
        <NavLink
          to="/login"
          className={
            "dark:text-white text-center border-2 border-gray-700 bg-green-600 rounded-md px-4 py-1 my-2 md:my-0 md:mx-4"
          }
        >
          Log In
        </NavLink>
      </nav>

      <div className=" w-full flex items-center justify-center text-center mx-auto  md:h-screen ">
        <div
          id="loginCheck"
          className="flex flex-col justify-center items-center w-full h-screen bg-white md:rounded-lg md:shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 gap-4"
        >
          <div className="text-xl md:text-2xl font-bold dark:text-white">
            Register as
          </div>
          <div className="flex items-center justify-between p-6 dark:text-white space-x-8 mx-auto">
            <button
              value={"teacher"}
              onClick={(e) => handleCheckLogin(e.target.value)}
              className="border-2 border-gray-900 dark:border-gray-200 rounded-md px-4 py-2 md:text-2xl bg-green-600 hover:bg-green-500"
            >
              Teacher
            </button>
            <button
              value={"student"}
              onClick={(e) => handleCheckLogin(e.target.value)}
              className="border-2 border-gray-900 dark:border-gray-200 rounded-md px-4 py-2 md:text-2xl bg-green-600 hover:bg-green-500"
            >
              Student
            </button>
          </div>
        </div>
        <TeacherReg />
      </div>
      <Footer />
    </>
  );
}

export default Register;
