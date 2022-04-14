import mongoose from "mongoose";
import { Request, Response } from "express";
import { CitizenInterface } from "../models/citizen";
import citizenService from "../services/citizen.service";

async function get(req: Request, res: Response) {
    try {
        const citizens = await citizenService.getCitizens();
        res.send(citizens);
    } catch (error) {
        if (error as mongoose.MongooseError) {
            const err = error as mongoose.MongooseError;
            res.send({ error: String(err) });
        }
    }
}

interface CitizenRequest {
    citizens: CitizenInterface[];
}

async function post(req: Request<any, any, CitizenRequest>, res: Response) {
    try {
        const newCitizen = await citizenService.createCitizen(req.body.citizens);
        res.send(newCitizen);
    } catch (error) {
        if (error as mongoose.MongooseError) {
            const err = error as mongoose.MongooseError;
            res.send({ error: String(err) });
        }
    }
}

const citizenController = { get, post };
export default citizenController;
