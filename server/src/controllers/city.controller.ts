import { Request, Response } from "express";
import { CityInterface } from "../models/city";
import mongoose from "mongoose";
import cityService from "../services/city.service";

async function get(req: Request, res: Response) {
  try {
    const cities = await cityService.getCities();
    res.send(cities);
  } catch (error) {
    if (error as mongoose.MongooseError) {
      const err = error as mongoose.MongooseError;
      res.send({ error: String(err) });
    }
  }
}

interface CityByIdParams {
  id: string;
}

async function getById(req: Request<CityByIdParams>, res: Response) {
  try {
    const city = await cityService.getCityById(req.params.id);
    res.send(city);
  } catch (error) {
    if (error as mongoose.MongooseError) {
      const err = error as mongoose.MongooseError;
      res.send({ error: String(err) });
    }
  }
}

interface CitiesRequest {
  cities: CityInterface[];
}

async function post(req: Request<any, any, CitiesRequest>, res: Response) {
  try {
    const newCity = await cityService.createCities(req.body.cities);
    res.send(newCity);
  } catch (error) {
    if (error as mongoose.MongooseError) {
      const err = error as mongoose.MongooseError;
      res.send({ error: String(err) });
    }
  }
}

const cityController = { get, getById, post };
export default cityController;
