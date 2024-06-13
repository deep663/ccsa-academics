const express = require("express");
const connectDB = require("./config/dbConnection");
const { errorHandler } = require("./middleware/errorHandler");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");

connectDB();
const app = express();

const port = 3000;

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true 
}));
app.use(cookieParser());
app.use("/files", express.static("files"))
app.use(express.json());
app.use(errorHandler);
app.use("/user", require("./routes/userRoutes"));

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});




//multer

const multer = require("multer");
const { default: mongoose } = require("mongoose");
const { send } = require("vite");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() 
    cb(null,uniqueSuffix+file.originalname);
  },
});

require("./models/assignmentModel");
const assignmentSchema = mongoose.model("assignment");

require("./models/resultModel");
const resultSchema = mongoose.model("results");

require("./models/insemModel");
const insemSchema = mongoose.model("insem");

require("./models/certificatesModel")
const certificatesSchema = mongoose.model("certificates")

const upload = multer({ storage: storage });


app.post("/upload-assignment", upload.single("file"), async(req, res) => {
  console.log(req.file);
  const title = req.body.title;
  const semester = req.body.semester;
  const course = req.body.course;
  const filename = req.file.filename;
  try {
    await assignmentSchema.create({title : title, semester: semester, course: course, pdf : filename});
    res.send({status: "ok"});
  } catch (error) {
    res.json({status: error})
  }
})

app.post("/upload-results", upload.single("file"), async (req, res) => {
    
    console.log(req.file);
    const title = req.body.title;
    const semester = req.body.semester;
    const course = req.body.course;
    const filename = req.file.filename;
    
    try {
        await resultSchema.create({title : title, semester: semester,
             course: course, pdf : filename});
             res.send({status: "ok"});
    } catch (error) {
        res.json({status: error})
    }
})

app.post("/upload-insemResult", upload.single("file"), async (req, res) => {
    
    console.log(req.file);
    const title = req.body.title;
    const semester = req.body.semester;
    const course = req.body.course;
    const filename = req.file.filename;   
    try {
        await insemSchema.create({title : title, semester: semester,
             course: course, pdf : filename});
             res.send({status: "ok"});
    } catch (error) {
        res.json({status: error})
    }
})

app.post("/upload-certificates", upload.single("file"), async (req, res) => {
    console.log(req.file);
    const title = req.body.title;
    const semester = req.body.semester;
    const course = req.body.course;
    const filename = req.file.filename;
    try {
        await certificatesSchema.create({title : title, semester: semester,
             course: course, pdf : filename});
             res.send({status: "ok"});
    } catch (error) {
        res.json({status: error}
        )
    }
})

app.get("/get-assignment", async(req, res) => { 
  try {
    assignmentSchema.find({}).then((data) => {
      res.send({status:"ok", data: data});
    })
  } catch (error) {
    res.json({ status: error });
  }
})

app.get("/get-results", async (req, res) => {
  try {
    resultSchema.find({}).then((data) => {
      res.send({ status: "ok", data: data });
    });
  } catch (error) {
    res.json({ status: error });
  }
});

app.get("/get-insemResults", async (req, res) => {
  try {
    insemSchema.find({}).then((data) => {
      res.send({ status: "ok", data: data });
    });
  } catch (error) {
    res.json({ status: error });
  }
});

app.get("/get-certificates", async (req, res) => {
  try {
    certificatesSchema.find({}).then((data) => {
      res.send({ status: "ok", data: data });
    });
  } catch (error) {
    res.json({ status: error });
  }
}); 

