//packages
require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const rateLimiter = require("express-rate-limit");
const helmet = require("helmet");
const xss = require("xss-clean");
const cors = require("cors");
const mongoSanitize = require("express-mongo-sanitize");

//imports
const connectDB = require("./db/connectDb");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
const linksRouter = require("./routers/linksRouter");
const worksRouter = require("./routers/worksRouter");
const projectsRouter = require("./routers/projectsRouter");
const metricsRouter = require("./routers/metricsRouter");
const adminRouter = require("./routers/adminRouter");

//router imports

//middleware
app.use(morgan("tiny"));
app.set("trust proxy", 1);
app.use(helmet());
var corsOptions = {
  origin: [
    "https://myohtetsandev.netlify.app",
    "https://myohtetsan.netlify.app",
    "https://myohtetsanadmin.netlify.app",
    "http://127.0.0.1:5500",
  ],
};
app.use(cors(corsOptions));
app.use(xss());
app.use(mongoSanitize());
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

//routes
app.get("/", async (req, res) => {
  res.send("No doc for now:(");
});

app.use("/api/v1/links/", linksRouter);
app.use("/api/v1/works/", worksRouter);
app.use("/api/v1/projects/", projectsRouter);
app.use("/api/v1/metrics/", metricsRouter);
app.use("/api/v1/admin/", adminRouter);

//lower order middleware
app.use(notFound);
app.use(errorHandler);

//start the app
const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
