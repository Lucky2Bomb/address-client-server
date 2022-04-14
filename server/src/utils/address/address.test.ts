import { addressByTypes } from "./address.util"
import { CitizenInterface } from "../../models/citizen";

describe('validate address from citizens', () => {
    test('simple', () => {
        const input: CitizenInterface[] = [{
            name: "Анна",
            city_id: 1,
            groups: [
                {
                    "type": "city",
                    "name": "Москва г."
                },
                {
                    "type": "district",
                    "name": "Пресненский р-н"
                },
                {
                    "type": "street",
                    "name": "Гашека ул."
                }
            ]
        },
        {
            name: "Олег",
            city_id: 2,
            groups: [
                {
                    "type": "city",
                    "name": "Воронеж г."
                },
                {
                    "type": "district",
                    "name": "Пресненский р-н"
                },
                {
                    "type": "street",
                    "name": "Гашека ул."
                }
            ]
        }
        ];

        const output = {
            "Москва г.": {
                "Пресненский р-н": {
                    "Гашека ул.": [
                        input[0]
                    ]
                },
            },
            "Воронеж г.": {
                "Пресненский р-н": {
                    "Гашека ул.": [
                        input[1]
                    ]
                },
            }
        }

        expect(addressByTypes(input, ["city", "district", "street"])).toStrictEqual(output);
    });

    test('easy', () => {
        const input: CitizenInterface[] = [{
            name: "Анна",
            city_id: 1,
            groups: [
                {
                    "type": "city",
                    "name": "Москва г."
                },
                {
                    "type": "district",
                    "name": "Пресненский р-н"
                },
                {
                    "type": "street",
                    "name": "Гашека ул."
                }
            ]
        }, {
            name: "Валера",
            city_id: 1,
            groups: [
                {
                    "type": "city",
                    "name": "Москва г."
                },
                {
                    "type": "district",
                    "name": "Пресненский р-н"
                },
                {
                    "type": "street",
                    "name": "Гашека ул."
                }
            ]
        },
        {
            name: "Олег",
            city_id: 2,
            groups: [
                {
                    "type": "city",
                    "name": "Воронеж г."
                },
                {
                    "type": "district",
                    "name": "Пресненский р-н"
                },
                {
                    "type": "street",
                    "name": "Гашека ул."
                }
            ]
        }
        ];

        const output = {
            "Москва г.": {
                "Пресненский р-н": {
                    "Гашека ул.": [
                        input[0],
                        input[1]
                    ]
                },
            },
            "Воронеж г.": {
                "Пресненский р-н": {
                    "Гашека ул.": [
                        input[2]
                    ]
                },
            }
        }

        expect(addressByTypes(input, ["city", "district", "street"])).toStrictEqual(output);
    });

    test('medium', () => {
        const input: CitizenInterface[] = [{
            name: "Анна",
            city_id: 1,
            groups: [
                {
                    "type": "city",
                    "name": "Москва г."
                },
                {
                    "type": "district",
                    "name": "Пресненский р-н"
                },
                {
                    "type": "street",
                    "name": "Гашека ул."
                }
            ]
        }, {
            name: "Валера",
            city_id: 1,
            groups: [
                {
                    "type": "city",
                    "name": "Москва г."
                },
                {
                    "type": "district",
                    "name": "Пресненский р-н"
                },
                {
                    "type": "street",
                    "name": "Гашека ул."
                }
            ]
        }, {
            name: "Ольга",
            city_id: 1,
            groups: [
                {
                    "type": "city",
                    "name": "Москва г."
                },
                {
                    "type": "district",
                    "name": "Коптево р-н"
                },
                {
                    "type": "street",
                    "name": "Гашека ул."
                }
            ]
        },
        {
            name: "Олег",
            city_id: 2,
            groups: [
                {
                    "type": "city",
                    "name": "Воронеж г."
                },
                {
                    "type": "district",
                    "name": "Пресненский р-н"
                },
                {
                    "type": "street",
                    "name": "Гашека ул."
                }
            ]
        }
        ];

        const output = {
            "Москва г.": {
                "Пресненский р-н": {
                    "Гашека ул.": [
                        input[0],
                        input[1]
                    ]
                },
                "Коптево р-н": {
                    "Гашека ул.": [
                        input[2]
                    ]
                }
            },
            "Воронеж г.": {
                "Пресненский р-н": {
                    "Гашека ул.": [
                        input[3]
                    ]
                },
            }
        }

        expect(addressByTypes(input, ["city", "district", "street"])).toStrictEqual(output);
    });

    test('custom', () => {
        const input: CitizenInterface[] = [{
            name: "Анна",
            city_id: 1,
            groups: [
                {
                    "type": "city",
                    "name": "Москва г."
                },
                {
                    "type": "district",
                    "name": "Пресненский р-н"
                },
                {
                    "type": "street",
                    "name": "Гашека ул."
                }
            ]
        }, {
            name: "Валера",
            city_id: 1,
            groups: [
                {
                    "type": "city",
                    "name": "Москва г."
                },
                {
                    "type": "district",
                    "name": "Пресненский р-н"
                },
                {
                    "type": "street",
                    "name": "Гашека ул."
                }
            ]
        }, {
            name: "Ольга",
            city_id: 1,
            groups: [
                {
                    "type": "city",
                    "name": "Москва г."
                },
                {
                    "type": "district",
                    "name": "Коптево р-н"
                },
                {
                    "type": "street",
                    "name": "Гашека ул."
                }
            ]
        },
        {
            name: "Олег",
            city_id: 2,
            groups: [
                {
                    "type": "city",
                    "name": "Воронеж г."
                },
                {
                    "type": "district",
                    "name": "Пресненский р-н"
                },
                {
                    "type": "street",
                    "name": "Гашека ул."
                }
            ]
        }
        ];

        const output = {
            "Москва г.": {
                "Пресненский р-н": [
                    input[0],
                    input[1]
                ],
                "Коптево р-н": [
                    input[2]
                ]

            },
            "Воронеж г.": {
                "Пресненский р-н": [
                    input[3]
                ],
            }
        }

        expect(addressByTypes(input, ["city", "district"])).toStrictEqual(output);
    });

    test('error', () => {
        const input: CitizenInterface[] = [{
            name: "Анна",
            city_id: 1,
            groups: [
                {
                    "type": "city",
                    "name": "Москва г."
                },
                {
                    "type": "district",
                    "name": "Пресненский р-н"
                },
                {
                    "type": "street",
                    "name": "Гашека ул."
                }
            ]
        }, {
            name: "Валера",
            city_id: 1,
            groups: [
                {
                    "type": "city",
                    "name": "Москва г."
                },
                {
                    "type": "district",
                    "name": "Пресненский р-н"
                },
                {
                    "type": "street",
                    "name": "Гашека ул."
                }
            ]
        }, {
            name: "Ольга",
            city_id: 1,
            groups: [
                {
                    "type": "city",
                    "name": "Москва г."
                },
                {
                    "type": "district",
                    "name": "Коптево р-н"
                },
                {
                    "type": "street",
                    "name": "Гашека ул."
                }
            ]
        },
        {
            name: "Олег",
            city_id: 2,
            groups: [
                {
                    "type": "city",
                    "name": "Воронеж г."
                },
                {
                    "type": "district",
                    "name": "Пресненский р-н"
                },
                {
                    "type": "street",
                    "name": "Гашека ул."
                }
            ]
        }
        ];

        const output = {
            "Москва г.": {
                "Пресненский р-н": [
                    input[0],
                    input[1]
                ],
                "Коптево р-н": [
                    input[2]
                ]

            },
            "Воронеж г.": {
                "НЕ СУЩЕСТВУЮЩИЙ РАЙОН": [
                    input[3]
                ],
            }
        }

        expect(!addressByTypes(input, ["city", "district"])).not.toStrictEqual(output);
    });
});