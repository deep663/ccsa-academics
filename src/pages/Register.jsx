import { NavLink } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/Footer";
import logo from "../assets/uniLogo.png";

function Register() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [standart, setStandart] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(user, name, standart, age, email, password);

    setUser(null);
    setName("");
    setStandart("");
    setAge("");
    setEmail(""); 
    setPassword("");
  }

  function handleCheckLogin(value) {
    setUser(value);
    document.getElementById("loginCheck").classList.add("hidden");
    document.getElementById("register").classList.remove("hidden");
  }

  return (
    <>
      <div className="w-full flex items-center justify-center
       text-center mx-auto  md:h-screen bg-slate-400">
        
        <div id="loginCheck"
          className="flex flex-col justify-center items-center 
            w-full h-[68vh] md:h-15
           bg-white md:rounded-lg md:shadow-xl dark:border 
           md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 
           dark:border-gray-700 gap-4"
        >
          <div className="flex flex-col justify-center items-center">
            <img src={logo} alt="Dibru" className="h-20 drop-shadow-lg" />
            <p className=" text-xl md:text-2xl font-bold">CCSA ACADEMICS</p>
          </div>
          <div className="text-xl md:text-2xl font-bold dark:text-white">
            Register as
          </div>
          <div className="flex items-center justify-between p-6 text-white space-x-8 mx-auto">
            <button value={"Admin"} onClick={(e)=>handleCheckLogin(e.target.value)} className="border-2  dark:border-gray-200 rounded-lg px-4 py-2 md:text-2xl bg-[#1f5ad9] hover:bg-[#13178f]">
              Admin
            </button>
            <button value={"Parent"} onClick={(e)=>handleCheckLogin(e.target.value)} className="border-2  dark:border-gray-200 rounded-lg px-4 py-2 md:text-2xl bg-[#1f5ad9] hover:bg-[#13178f]">
              Parent
            </button>
          </div>
          <div>
            <p>Alreday have a account ?
              <NavLink
          to="/login"
          className={
            "text-[#293dd0]"
          }
        >
          Log In
        </NavLink>
            </p>
          </div>
        </div>
      

        <div id="register" className="hidden w-full h-[68vh] md:h-auto bg-white md:rounded-lg md:shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign Up
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white pl-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Name"
                  required={true}
                />
              </div>
              <div className="flex gap-4 justify-between">
                <div className="basis-1/2">
                  <label
                    className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white pl-2"
                  >
                    Class/Standard
                  </label>
                  <input
                    type="text"
                    id="class"
                    value={standart}
                    onChange={(e) => setStandart(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Class/Standard"
                    required={true}
                  />
                </div>
                <div className="basis-1/2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white pl-2"
                  >
                    Age
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    id="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Age"
                    required={true}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white pl-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="example@mail.com"
                  required={true}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white pl-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required={true}
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign up
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <NavLink
                  to="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign in
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
