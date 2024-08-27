import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

import userRouter from "./user/router.js";
import boardgameRouter from "./boardgame/router.js";

const app = express();
const port = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

userRouter(app);
boardgameRouter(app);

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to Mongo!"))
  .catch((err) => console.error("🔥 ERROR on mongo connection:", err));

app.get("/", (req, res) => {
  res.send("Service alive!");
});

app.listen(port, () => {
  console.log(`✅ Server is running at http://localhost:${port}`);
});
