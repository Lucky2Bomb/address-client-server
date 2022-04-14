import { Router } from "express";
import addressController from "../controllers/address.controller";

const addressRouter = Router();

/** 
 *  not required param: config = "["city", "district", "street"]"
*/
addressRouter.get("/address", addressController.get);

export default addressRouter;
