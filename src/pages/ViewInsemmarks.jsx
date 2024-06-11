import Layout from "../components/Layout"
import { useEffect, useState } from "react";
import {  Button } from "@nextui-org/react";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import axios from "axios";

function ViewInsemMarks() {

   const [allImages, setAllImages] = useState(null);

  const getInsemMarks = async () => {
    const insemData = await axios.get(
      "http://localhost:3000/get-insemResults"
    );
    console.log(insemData.data.data);
    setAllImages(insemData.data.data);
  };

  useEffect(() => {
    getInsemMarks();
  }, []);

    const showPdf=(pdf)=>{
    window.open(`http://localhost:3000/files/${pdf}`, "_blank", "npreference");
  }

  return (
    <Layout>
        <div className="h-[100vh]">
         <div className="flex p-10 gap-4">
          <h4>Uploaded Insem Marks -</h4>
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

export default ViewInsemMarks