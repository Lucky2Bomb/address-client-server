import { CitizenInterface, CitizenModel } from "../models/citizen";

async function getCitizens() {
    const citizens = await CitizenModel.find();
    return citizens;
}

async function createCitizen(citizens: CitizenInterface[]) {

    const citizenArray = await CitizenModel.create(citizens);
    return await citizenArray;
}

const citizenService = { createCitizen, getCitizens };
export default citizenService;