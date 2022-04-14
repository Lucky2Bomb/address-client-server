import { CityInterface, CityModel } from "../models/city";

async function getCities() {
    const cities = await CityModel.find();
    return cities;
}

async function getCityById(id: string) {
    const city = await CityModel.findById(id);
    return city;
}

async function createCities(cities: CityInterface[]) {

    const cityArray = await CityModel.create(cities);
    return await cityArray;
}

const cityService = { getCities, getCityById, createCities };
export default cityService;