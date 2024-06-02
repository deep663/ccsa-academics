import { useState } from "react";
import Layout from "../components/Layout"
import { Input, Button } from "@nextui-org/react"

function Assignment() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [semester, setSemester] = useState("");
  const [course, setCourse] = useState("");

  const submitData = async (el) => {
      el.preventDefault();
      const formData = new FormData();
      formData.append("title", title);
      formData.append("file", file);
      formData.append("semester", semester);
      formData.append("course", course);
      console.log(title, semester, course, file);
  }
  return (
    <Layout>
      <div className="h-[100vh]">
        <div className="flex items-center justify-center m-10">
          <form className=" bg-slate-100 gap-4 rounded-lg p-4 flex flex-col items-center "
          onSubmit={submitData}>
            <h4>Upload PDF for assignment-</h4>
            <Input
              color="primary"
              type="Title"
              variant="bordered"
              label="Title"
              required={true}
              onChange={(el) => setTitle(el.target.value)}
            />
            <Input
              color="primary"
              type="Semester"
              variant="bordered"
              label="Semester"
              required={true}
              onChange={(el) => setSemester(el.target.value)}
            />
            <Input
              color="primary"
              type="Course"
              variant="bordered"
              label="Course"
              required={true}
              onChange={(el) => setCourse(el.target.value)}
            />
            <input type="file" accept="application/pdf" required
            onChange={(el)=> setFile(el.target.files[0])}
            />
            <Button color="primary" type="submit">Submit</Button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Assignment