import { Request, Response } from 'express';
const { getGuns } = require('./data/getGuns');
const express = require("express");

const app = express();
const cors = require("cors");

const port = 5000;

app.use(express.json());
app.use(cors());


app.listen(port, () => {
  console.log(`Black Ice Track Node API listening at http://localhost:${port}`);
});

app.get('/', (req: Request, res: Response) => {
  console.log("HTTP Request: ", req)
  res.send(`req: ${req}`)
})

app.get('/api/guns', async (req: Request, res: Response) => {
  return await getGuns(req, res);
})
