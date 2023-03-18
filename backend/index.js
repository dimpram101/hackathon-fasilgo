import express from "express";
import { db } from "./models/Association.js";

const app = express()

try {
  await db.sync({ force: true });
  console.log("db connected")
} catch (error) {
  console.log(error)
}

app.get('/', (req, res) => {
  res.send("Test")
})
app.listen(5000, () => console.log(`server connected at http://localhost:5000`));