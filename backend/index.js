import express from "express";

const app = express()


app.get('/', (req, res) => {
  res.send("Test")
})
app.listen(5000, () => console.log(`server connected at http://localhost:5000`));