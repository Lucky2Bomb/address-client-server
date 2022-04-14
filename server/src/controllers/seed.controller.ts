import { Request, Response } from "express";
import mongoose from "mongoose";
import seedService from "../services/seeder.service";


async function seedCity(req: Request, res: Response) {
  try {
    const seedResult = await seedService.seedCity();
    res.send({
      "seed city": "success",
      "cities": seedResult
    });
  } catch (error) {
    if (error as mongoose.MongooseError) {
      const err = error as mongoose.MongooseError;
      res.send({ error: String(err) });
    }
  }
}

async function seedCitizen(req: Request, res: Response) {
  try {
    const seedResult = await seedService.seedCitizen();
    res.send({
      "seed citizen": "success",
      "citizens": seedResult
    });
  } catch (error) {
    if (error as mongoose.MongooseError) {
      const err = error as mongoose.MongooseError;
      res.send({ error: String(err) });
    }
  }
}

async function seedAll(req: Request, res: Response) {
  try {
    const seedCity = await seedService.seedCity();
    const seedCitizen = await seedService.seedCitizen();
    res.send({
      "seed all": "success",
      "cities": seedCity,
      "citizens": seedCitizen,
    });
  } catch (error) {
    if (error as mongoose.MongooseError) {
      const err = error as mongoose.MongooseError;
      res.send({ error: String(err) });
    }
  }
}

const seedController = { seedCitizen, seedCity, seedAll };
export default seedController;