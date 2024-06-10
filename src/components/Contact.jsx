import logo from "../assets/uniLogo.png";
import Footer from "./Footer";
import { Navbar, NavbarBrand } from "@nextui-org/react";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <>
    <div className="min-h-screen">
        <Navbar
          className="bg-[#1f2f52] border-gray-200 shadow-md"
          maxWidth="full"
        >
          <NavbarBrand>
            <NavLink to={"/"} className={"flex gap-2"}>
              <img src={logo} alt="Dibru" className="h-8 drop-shadow-lg" />
              <p className="hidden sm:block font-bold text-[#ffffff] text-xl">
                CCSA ACADEMICS
              </p>
            </NavLink>
          </NavbarBrand>
        </Navbar>
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold my-6 text-center">Contact Us</h1>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Phone No:</h3>
            <p className="text-base">(0373) 2911704</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">E-mail:</h3>
            <p className="text-base">ccsduoffice@gmail.com</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Address:</h3>
            <p className="text-base">Dibrugarh, Assam, Pin-786004</p>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
