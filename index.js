const express = require("express");
const { connect } = require("mongoose");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
app.use(express.json());

const port = parseInt(process.env.PORT);

//router
// const userRoute = require("./Router/users");
const authRoute = require("./Router/auth");
// const predictRoute = require("./Router/predict");
const recipeRoute = require("./Router/recipe")

//db Connect

connect(`${process.env.MONGO_DB}`)
  .then(() => console.log("DB Connected!!"))
  .catch((error) => console.log(error));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//API endpoint
// app.use("/users", userRoute);
app.use("/auth", authRoute);
// app.use("/predict", predictRoute);
app.use("/recipe", recipeRoute)
