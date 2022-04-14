import { Request, Response } from "express";
import mongoose from "mongoose";
import addressService from "../services/address.service";

interface Query {
    config?: string;
}

async function get(req: Request<any, any, any, Query>, res: Response) {
    try {
        const config = req.query.config ? JSON.parse(req.query.config) : undefined;
        const addresses = await addressService.getAddresses(config);
        res.send(addresses);
    } catch (error) {
        if (error as mongoose.MongooseError) {
            const err = error as mongoose.MongooseError;
            res.send({ error: String(err) });
        }
    }
}

const addressController = { get };
export default addressController;
