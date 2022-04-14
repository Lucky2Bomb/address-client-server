import { CitizenModel } from "../models/citizen";
import citizensJSON from "../seeds/citizens.json";
import citiesJSON from "../seeds/cities.json";
import { getRandomInt } from "../utils/random.util";
import cityService from "./city.service";
import { CityModel } from "../models/city";

async function seedCity() {
    return await CityModel.create(citiesJSON);
}

async function seedCitizen() {

    const cities = await cityService.getCities();

    const newCitizens = citizensJSON.map(citizen => {
        const cityName = citizen.groups.find(group => group.type === "city")?.name || null;
        const cityNameClean = cityName?.replace(" г.", "");
        const cityId = cities.find(city => city.name === cityNameClean);

        return {
            city_id: cityId,
            ...citizen
        }
    });

    return await CitizenModel.create(newCitizens);
}

const seedService = { seedCitizen, seedCity };
export default seedService;