import express from "express";
import { db } from "./models/Association.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import indexRoute from "./routes/index.js";

dotenv.config();

const app = express();

app.use(cors({
  AccessControlAllowOrigin: "*",
  origin: ["http://127.0.0.1:5173", "http://192.168.2.48:5173"],
  credentials: true,
}))
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))

app.use(indexRoute)

// try {
//   await db.sync({ force: true });
//   console.log("db connected")
// } catch (error) {
//   console.log(error)
// }

app.get('/', (req, res) => {
  res.send("Test")
})
app.listen(5000, () => console.log(`server connected at http://localhost:5000`));