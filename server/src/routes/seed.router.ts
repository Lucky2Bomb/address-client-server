import { Router } from "express";
import seedController from "../controllers/seed.controller";

const seedRouter = Router();

seedRouter.post("/seed/citizen", seedController.seedCitizen);
seedRouter.post("/seed/city", seedController.seedCity);
seedRouter.post("/seed/all", seedController.seedAll);

export default seedRouter;
