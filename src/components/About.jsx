import Footer from "./Footer";
import logo from "../assets/uniLogo.png";
import { NavLink } from "react-router-dom";
import { Navbar, NavbarBrand } from "@nextui-org/react";

function About() {
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
          <h1 className="text-4xl font-bold mb-6 text-center">About</h1>
          <p className="mb-6">
            Formerly known as Centre for Computer Studies, the Centre for
            Computer Science and Applications is one of the premier institutes
            of North-East India imparting computer education. Dibrugarh
            University initiated its journey of imparting computer education by
            establishing a Computer Centre in 1976. The Computer Centre was
            established with the objective of creating Computer awareness among
            the teachers, research scholars, and employees of the University. It
            started Computer education by introducing a “Six-months Certificate
            Course on Computer Programming”. It also trained the employees of
            various banks including State Bank of India, Dibrugarh University
            Branch, and helped them in computerization.
          </p>
          <p className="mb-6">
            In 2004, it was upgraded to the Centre for Computer Studies (CCS)
            and a “Post-Graduate Diploma in Computer Application (PGDCA)” course
            was started. BCA was introduced in July 2004 and MCA and BSc (IT)
            were introduced in January and July 2007, respectively. In 2018, the
            name of the centre was changed to “Centre for Computer Science and
            Applications”.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">Major Facilities</h2>
          <ul className="list-disc list-inside mb-6">
            <li>
              Computer Laboratories: Windows Lab (01 No.), Linux Lab (01 No.),
              Electronics Lab (01 No.), and Language Lab (01 No.)
            </li>
            <li>Library cum conference room</li>
            <li>Server</li>
            <li>Internet (LAN and Wi-Fi)</li>
            <li>Space for Student Activities</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
