const express = require("express");
const app = express();
const port = 3000;
const fetch = require("node-fetch");
const axios = require("axios");

const { estimateFare, createOrder } = require("./controller/controller");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log("req :>> ", req);
});

app
  .post("/fetch-fare", (req, res) => {
    console.log("req.body :>> ", req.body);
    estimateFare(req, res);
  })
  .post("/create-order", (req, res) => {
    createOrder(req, res);
  });
app.listen(port, () => console.log(`Example app listening on port port!`));
