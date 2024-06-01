import Layout from "../components/Layout"
import SidebarItems from "../components/Sidebaritems"
import {Avatar} from "@nextui-org/react";
import profile from "../assets/profile.png";
import {Input} from "@nextui-org/react";

function Dashboard() {

  return (
    <>
      <Layout>
        <div className="bg-red h-[100vh] flex gap-16">
          <SidebarItems />
          <div className="p-4 flex flex-col gap-4 bg-slate-200 w-[780px] h-[500px] rounded-lg mt-10">
            <Avatar
              src={profile}
              className="w-24 h-24 text-large border-solid border-2 border-sky-500"
            />
            <div className="p-4">
              <div >
                <Input color="primary" type="Name" variant="underlined" label="Name" value="Jhone Dea" disabled={false}
                />
              </div>
              <div >
                <Input color="primary" type="email" variant="underlined" label="Email" value="Niwash@gmail.com" disabled={false}
                />
              </div>
              <div >
                <Input color="primary" type="text" variant="underlined" label="Department" value="CCSA" disabled={false}
                />
              </div>
              <div >
                <Input color="primary" type="text" variant="underlined" label="Semester" value="Fift Sem" disabled={false}
                />
              </div>
             
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Dashboard