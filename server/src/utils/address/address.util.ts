import { CitizenInterface } from "../../models/citizen";

/**
 * addressByLevel(citizens) - get sorted structure [Not used]
 * @param arr citizens
 * @param level start level in citizen group
 * @param obj started object
 * @returns 
 */
function addressByLevel(arr: CitizenInterface[], level = 0, obj = {}) {
    arr.forEach((arrItem) => {
        const key: string = arrItem.groups[level].name;

        Object.assign(obj,
            {
                [key]: level + 1 < arrItem.groups.length ?
                    addressByLevel(arr.filter(item => item.groups[level].name === key), level + 1) :
                    arr.filter(item => item.groups[level].name === key)
            });
    });
    return obj;
}

/**
 * addressByLevel(citizens) or addressByLevel(citizens, ["city", "street"]) - get sorted structure
 * @param arr citizens
 * @param types types from citizen.group ["city", "district", "street", ...]
 * @param obj started object
 * @returns 
 */
function addressByTypes(arr: CitizenInterface[], types = ["city", "district", "street"], obj = {}) {
    const currentType = types.shift();

    arr.forEach((arrItem) => {
        const key = arrItem.groups.find(item => item.type === currentType ? item : null)?.name;
        const keyIndex = arrItem.groups.findIndex(item => item.name === key);

        if (key) {
            Object.assign(obj,
                {
                    [key]:
                        types.length !== 0 ?
                            addressByTypes(arr.filter(item => item.groups[keyIndex].name === key), types.slice()) :
                            //get arr with citizens if types length == 0
                            arr.filter(item => item.groups[keyIndex].name === key) 
                });
        }
    });

    return obj;
}

export { addressByTypes, addressByLevel }