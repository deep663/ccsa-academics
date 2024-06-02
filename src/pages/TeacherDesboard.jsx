import Layout from "../components/Layout"
import SidebarItems from "../components/Sidebaritems"
import {Avatar} from "@nextui-org/react";
import profile from "../assets/profile.png";
import {Input, Tooltip} from "@nextui-org/react";
import { EditIcon } from "../components/common/icon";


const TeacherDesboard = () => {
  return (
    <>
      <Layout>
        <div className="bg-red h-[100vh] flex gap-16">
          <SidebarItems />
          <div className="p-4 flex flex-col gap-4 bg-slate-100 w-[780px] h-[500px] rounded-lg mt-10">
            <div className="flex justify-between items-center p-4">
              <Avatar
                src={profile}
                className="w-24 h-24 text-large border-solid border-2 border-sky-500"
              />
              <Tooltip content={`Edit Details`}>
                <button
                  onClick={() => {}}
                  title="Drag to sort"
                  className={`mt-6 hover:bg-primary/20 p-1 hover:text-primary text-slate-400 flex items-center rounded-small justify-center w-10 h-10 outline-none`}
                >
                  <EditIcon width={24} height={24} />
                </button>
              </Tooltip>
            </div>
            <div className="p-2 gap-4 m-5 grid">
              <div>
                <Input
                  color="primary"
                  type="Name"
                  variant="bordered"
                  label="Name"
                  value="Jhone Dea"
                  disabled={false}
                />
              </div>
              <div>
                <Input
                  color="primary"
                  type="email"
                  variant="bordered"
                  label="Email"
                  value="Niwash@gmail.com"
                  disabled={false}
                />
              </div>
              <div>
                <Input
                  color="primary"
                  type="text"
                  variant="bordered"
                  label="Department"
                  value="CCSA"
                  disabled={false}
                />
              </div>
              <div>
                <Input
                  color="primary"
                  type="text"
                  variant="bordered"
                  label="TeacherID"
                  value="DUITEC2013244"
                  disabled={false}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default TeacherDesboard
