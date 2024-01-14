import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const password = process.env.CON_STR;
mongoose
  .connect(password)
  .then(() => {
  })
  .catch(() => {
    console.log("FAILED MR FROM RESTMONGO");
  });
const Schema = mongoose.Schema({
  Email: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
});
const restaurents = mongoose.model("Restaurents", Schema);
export default restaurents;
