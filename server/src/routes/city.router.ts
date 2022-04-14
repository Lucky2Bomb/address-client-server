import { Router } from "express";
import cityController from "../controllers/city.controller";

const cityRouter = Router();

cityRouter.get("/city", cityController.get);
cityRouter.get("/city/:id", cityController.getById);
cityRouter.post("/city", cityController.post);

export default cityRouter;
