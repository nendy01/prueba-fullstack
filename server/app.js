const express = require("express");
const { Agent } = require("./model");

const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/agents", async (req, res, next) => {
  const agents = await Agent.findAll();
  console.log(agents);
  return res.json(agents);
});

app.post("/agents", async (req, res, next) => {
  //const agents = await Agent.findAll();
  const agentSeed = req.body;
  const agent = await Agent.create(agentSeed);
  return res.json(agent);
});

module.exports = app;
