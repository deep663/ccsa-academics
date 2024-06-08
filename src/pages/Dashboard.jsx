import Layout from "../components/Layout";
import SidebarItems from "../components/Sidebaritems";
import { Avatar } from "@nextui-org/react";
import profile from "../assets/profile1.png";
import { Input, Tooltip } from "@nextui-org/react";
import { EditIcon } from "../components/common/icon";
import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [user, setUser] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const getUser = async () => {
      const response = await axios.get("http://localhost:3000/user/student/", {
        withCredentials: true,
      });
      if (isMounted) {
        setUser(response.data);
      }
    };

    getUser();

    return () => {
      isMounted = false;
    };
  }, []);

  const editUserDetails = () => {
    setIsDisabled(false);
  };

  const updateUserDetails = async () => {
    // console.log(user)
    let { name, rollNo, course, email, semester, phoneNo } = user
    try {
      const response = await axios.put(
        "http://localhost:3000/user/student/",
        {
          name,
          rollNo,
          course,
          email,
          semester,
          phoneNo,
        },
        {
          withCredentials: true,
        }
      );
      if (response) {
        console.log(response.data)
        setIsDisabled(true);
        alert("User Details Updated Successfully");
        window.location.reload();
      }
    } catch (error) {
      alert("Something went wrong");
      console.log(error);
    }
  };

  return (
    <>
      <Layout>
        <div className="bg-red h-[100vh] flex gap-16">
          <SidebarItems />
          <div className="p-4 flex flex-col gap-4 bg-slate-100 w-[780px] h-[650px] rounded-lg mt-10">
            <div className="flex justify-between items-center p-4">
              <Avatar
                src={profile}
                className="w-24 h-24 text-large border-solid border-2 border-sky-500"
              />
              <div className="flex gap-4">
                <button
                  className="bg-yellow-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded h-10 mt-6"
                  hidden={isDisabled}
                  onClick={updateUserDetails}
                >
                  Save
                </button>
                <Tooltip content={`Edit Details`}>
                  <button
                    onClick={editUserDetails}
                    title="Drag to sort"
                    className={`mt-6 hover:bg-primary/20 p-1 hover:text-primary text-slate-400 flex items-center rounded-small justify-center w-10 h-10 outline-none`}
                  >
                    <EditIcon width={24} height={24} />
                  </button>
                </Tooltip>
              </div>
            </div>
            <div className="p-2 gap-4 m-5 grid">
              <div>
                <Input
                  color="primary"
                  type="Name"
                  variant="bordered"
                  label="Name"
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  defaultValue="Jhon Doe"
                  disabled={isDisabled}
                />
              </div>
              <div>
                <Input
                  color="primary"
                  type="text"
                  variant="bordered"
                  label="Roll No."
                  value={user.rollNo}
                  onChange={(e) => setUser({ ...user, rollNo: e.target.value })}
                  defaultValue="1234"
                  disabled={isDisabled}
                />
              </div>
              <div>
                <Input
                  color="primary"
                  type="text"
                  variant="bordered"
                  label="Course"
                  value={user.course}
                  onChange={(e) =>
                    setUser({ ...user, course: e.target.value })
                  }
                  defaultValue="BCA"
                  disabled={isDisabled}
                />
              </div>
              <div>
                <Input
                  color="primary"
                  type="text"
                  variant="bordered"
                  label="Semester"
                  value={user.semester}
                  onChange={(e) => setUser({ ...user, semester: e.target.value })}
                  defaultValue="1234"
                  disabled={isDisabled}
                />
              </div>
              <div>
                <Input
                  color="primary"
                  type="email"
                  variant="bordered"
                  label="Email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  defaultValue="example@mail.com"
                  disabled={isDisabled}
                />
              </div>
              <div>
                <Input
                  color="primary"
                  type="text"
                  variant="bordered"
                  label="Phone Number"
                  value={user.phoneNo}
                  onChange={(e) =>
                    setUser({ ...user, phoneNo: e.target.value })
                  }
                  defaultValue="1234567890"
                  disabled={isDisabled}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Dashboard;
