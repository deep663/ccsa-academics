const express = require("express");
const connectDB = require("./config/dbConnection");
const { errorHandler } = require("./middleware/errorHandler");
const cors = require("cors");



connectDB();
const app = express();

const port = 3000;

app.use(cors());
app.use(express.json());
app.use(errorHandler);
app.use("/user", require("./routes/userRoutes"));

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
