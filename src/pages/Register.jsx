import { NavLink, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import logo from "../assets/uniLogo.png";

function Register() {


  let navigate = useNavigate(); 


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
            <button value={"teacher"} onClick={()=>navigate("/teacherreg")} className="border-2  dark:border-gray-200 rounded-lg px-4 py-2 md:text-2xl bg-[#1f5ad9] hover:bg-[#13178f]">
              Teacher
            </button>
            <button value={"student"} onClick={()=>navigate("/studentreg")} className="border-2  dark:border-gray-200 rounded-lg px-4 py-2 md:text-2xl bg-[#1f5ad9] hover:bg-[#13178f]">
              Student
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
      </div>
      <Footer />
    </>
  );
}

export default Register;
