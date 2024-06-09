import Layout from "../components/Layout"
import { useEffect, useState } from "react";
import {  Button } from "@nextui-org/react";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import axios from "axios";

function FinalResults() {

   const [allImages, setAllImages] = useState(null);

  const getAssignment = async () => {
    const assignmentData = await axios.get(
      "http://localhost:3000/get-results"
    );
    console.log(assignmentData.data.data);
    setAllImages(assignmentData.data.data);
  };

  useEffect(() => {
    getAssignment();
  }, []);

    const showPdf=(pdf)=>{
    window.open(`http://localhost:3000/files/${pdf}`, "_blank", "npreference");
  }

  return (
    <Layout>
        <div className="h-[100vh]">
         <div className="flex p-10 gap-4">
          <h4>Uploaded Results -</h4>
          <div className="flex gap-4">
            {
              allImages == null ? "" : allImages.map(data => {
                return (
                  <div key={data.id}>
                  <h6>Title : {data.title}</h6>
                  <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                  <Viewer fileUrl={data.pdf} />
                  </Worker>
                  <Button color="primary" onClick={()=> showPdf(data.pdf)}>Showpdf</Button>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default FinalResults