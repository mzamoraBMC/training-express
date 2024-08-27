import { authMiddleware } from "../middlewares/authMiddleware.js";
import { createBoardgame } from "./controller.js";
import { Router } from "express";

const router = Router();

const boardgameRouter = (app) => {
  router.post("/", authMiddleware, createBoardgame);
  app.use("/boardgame", router);
};

export default boardgameRouter;
