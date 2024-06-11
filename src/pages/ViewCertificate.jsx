import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";

import axios from "axios";

const ViewCertificate = () => {
  const [allImages, setAllImages] = useState(null);

  const getCertificate = async () => {
    const certificateData = await axios.get(
      "http://localhost:3000/get-certificate"
    );
    console.log(certificateData.data.data);
    setAllImages(certificateData.data.data);
  };

  useEffect(() => {
    getCertificate();
  }, []);

  const showPdf = (pdf) => {
    window.open(`http://localhost:3000/files/${pdf}`, "_blank", "npreference");
  };

  return (
    <Layout>
      <div className="h-[100vh]">
        <div className="flex p-10 gap-4">
          <h4>Uploaded Certificates -</h4>
          <div className="flex gap-4">
            {allImages == null
              ? ""
              : allImages.map((data) => {
                  return (
                    <div key={data.id}>
                      <h6>Title : {data.title}</h6>
                      <h6>Semester : {data.semester}</h6>
                      <h6>Course : {data.course}</h6>

                      <Button color="primary" onClick={() => showPdf(data.pdf)}>
                        Showpdf
                      </Button>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ViewCertificate;
