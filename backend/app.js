import express from "express";
import bodyParser from "body-parser";
import update from "./insMongo";
import user from "./userMongo";
import restaurents from "./RestMongo";
import products from "./prodMongo";
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use("/api/products", update);
app.get('/api/products/id/:id', async(req, res) => {
    res.send(await products.findById(req.params.id));
})
app.post('/api/users', async (req, res) => {
    const userExists = await user.findOne({Email: req.body.email, Password: req.body.password});
    return userExists ? res.sendStatus(200) : res.status(201).send("Account Not Found"); 
})
app.post('/api/signup', async (req, res) => {
  try {
  const userExists = await user.findOne({Email: req.body.email, Password: req.body.password});
  const restExists = await restaurents.findOne({Email: req.body.email, Password: req.body.password});
  if(userExists){
    return res.status(201).send('User Account Already Exists');
  }
  if(restExists){
    return res.status(201).send('Rest Account Already Exists');
  }
  if(!restExists) {
    await restaurents.create({Email: req.body.email, Password: req.body.password});
    return res.status(200).send('Rest Account Created');
  }
  else {
    await user.create({Email: req.body.email, Password: req.body.password});
    return res.status(200).send('User Account Created');
  }
}  catch (error) {
  console.error("MongoDB Operation Error:", error);
  res.status(500).send("Internal Server Error");
}
})
app.all('*', (req, res) => {
  res.sendStatus(404);
});
app.listen(5000, () => console.log("Server is listening on port 5000"));