import { Router } from "express";
import citizenController from "../controllers/citizen.controller";

const citizenRouter = Router();

citizenRouter.get("/citizen", citizenController.get);

/**
 * body: {
 *  citizens: CitizenInterface[]
 * }
 */
citizenRouter.post("/citizen", citizenController.post);

export default citizenRouter;
