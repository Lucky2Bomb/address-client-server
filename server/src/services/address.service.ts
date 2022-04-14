import { CitizenModel } from "../models/citizen";
import { addressByLevel, addressByTypes } from "../utils/address/address.util";

/**
 * @param config array from citizen group types: city, district, street
 * @returns 
 */
async function getAddresses(config: string[] = ["city", "district", "street"]) {
    const citizens = await CitizenModel.find();

    // const address = addressByLevel(citizens);
    const address = addressByTypes(citizens, config);

    return address;
}


const addressService = { getAddresses };
export default addressService;