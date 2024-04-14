import { NavLink } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/Footer";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [user, setUser] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(user,email, password, rememberMe);

    setUser(null);
    setEmail("");
    setPassword("");
    setRememberMe(false);
  }

  function handleCheckLogin(value) {
    setUser(value);
    document.getElementById("loginCheck").classList.add("hidden");
    document.getElementById("login").classList.remove("hidden");
  }

  return (
    <>
      <nav className="flex px-4 py-4 h-20 bg-[#1f2f52] border-gray-200 dark:bg-gray-900 justify-between">
        <NavLink
          to="/"
          className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#fbfbfb]">
            CCSA ACADEMICS
          </span>
        </NavLink>
        <NavLink
          to="/register"
          className={
            "dark:text-white text-center border-2 border-gray-700 dark:border-gray-200 bg-[#409d5e] rounded-md px-4 py-1 my-2 md:my-0 md:mx-4 hover:bg-[#26643d]"
          }
        >
          Register
        </NavLink>
      </nav>
      <div className="w-full flex items-center justify-center text-center mx-auto  md:h-screen dark:bg-gray-900 z-0">
        <div id="loginCheck"
          className="flex flex-col justify-center items-center w-full h-[68vh] md:h-15 bg-white md:rounded-lg md:shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 gap-4"
        >
          <div className="text-xl md:text-2xl font-bold dark:text-white">
            Login as
          </div>
          <div className="flex items-center justify-between p-6 dark:text-white space-x-8 mx-auto">
            <button value={"Admin"} onClick={(e)=>handleCheckLogin(e.target.value)} className="border-2 border-gray-900 dark:border-gray-200 rounded-md px-4 py-2 md:text-2xl bg-[#409d5e] hover:bg-[#26643d]">
              Teacher
            </button>
            <button value={"Parent"} onClick={(e)=>handleCheckLogin(e.target.value)} className="border-2 border-gray-900 dark:border-gray-200 rounded-md px-4 py-2 md:text-2xl bg-[#409d5e] hover:bg-[#26643d]">
              Student
            </button>
          </div>
        </div>

        <div
          id="login"
          className="hidden w-full h-[68vh] md:h-auto bg-white md:rounded-lg md:shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
        >
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign In
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
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
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 shadow-lg hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account?{" "}
                <NavLink
                  to="/register"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Register here
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

export default Login;
