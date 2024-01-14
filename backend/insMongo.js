import products from "./prodMongo.js";
import users from "./userMongo.js";
import restaurents from './RestMongo.js'
import data from "./data.js";
import express from "express";
import cors from 'cors'
const update = express.Router();
update.get("/", cors(), async (req, res) => {
  try {
  await products.deleteMany();
  await products.insertMany(data.Products);
//   await users.insertMany(data.Users);
//   await restaurents.insertMany(data.Restaurents);
  await users.updateOne(
    {Email : data.Users.Email},
    {Password : data.Users.Password}
  )
  await restaurents.updateOne(
    {Email : data.Restaurents.Email},
    {Password : data.Restaurents.Password}
  )
  res.status(200).send(await products.find());
  } catch (error) {
    console.log("ERROR FROM INSERTING");
  }
});
export default update;
