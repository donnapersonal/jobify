import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
const app = express();
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cloudinary from "cloudinary";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";

// routers
import jobRouter from "./routes/jobRouter.js";
import authRouter from "./routes/authRouter.js";
import userRouter from './routes/userRouter.js';

// public
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

// middleware
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import { authenticateUser } from "./middleware/authMiddleware.js";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// 将上传的文件保存到public中
const __dirname = dirname(fileURLToPath(import.meta.url));

if(process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.static(path.resolve(__dirname, './client/dist')));

app.use(cookieParser());
// Setup express middleware to accept json
app.use(express.json());
app.use(helmet());
app.use(mongoSanitize());

app.use("/api/v1/jobs", authenticateUser, jobRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", authenticateUser, userRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/dist', 'index.html'));
});

// The "not found" middleware in Express.js is used when a request is made to a route that does not exist. 
// It catches these requests and responds with a 404 status code, indicating that the requested resource was not found.
app.use("*", (req, res) => {
  res.status(404).json({ msg: "Not found!" });
});

// 一定要放在最后
// The "error" middleware in Express.js is used to handle any errors that occur during the processing of a request. 
// It is typically used to catch unexpected errors or exceptions that are not explicitly handled in the application code. 
// It logs the error and sends a 500 status code, indicating an internal server error.
app.use(errorHandlerMiddleware);

// 在 production 就会使用 process.env.PORT
const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);

  // 如果连接成功，就开启监听
  app.listen(port, () => {
    console.log(`Server running on PORT ${port} ...`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}



