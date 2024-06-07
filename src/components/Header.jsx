import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  Avatar,
  DropdownMenu,

} from "@nextui-org/react";

import logo from "../assets/uniLogo.png";
import profile from "../assets/profile.png";
import { NavLink, useNavigate } from "react-router-dom";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';

function Header() {
  const navigate = useNavigate();
  const signOut = useSignOut();
  const auth = useAuthUser();
  const logOut = () => {
    signOut();
    navigate("/login");
  };

  return (
    <>
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

        <NavbarContent as="div" justify="end">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src={profile}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                {/* <p className="font-semibold">Signed in as</p> */}
                <p className="font-semibold">{auth.email}</p>
              </DropdownItem>
              <DropdownItem key="logout" color="danger" onClick={logOut}>
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>
    </>
  );
}

export default Header;
