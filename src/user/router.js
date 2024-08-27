import { authMiddleware } from "../middlewares/authMiddleware.js";
import { getMyInfo, login, register } from "./controller.js";
import { Router } from "express";

const router = Router();

const userRouter = (app) => {
  router.post("/register", register);
  router.post("/login", login);
  router.get("/profile", authMiddleware, getMyInfo);
  app.use("/user", router);
};

export default userRouter;
