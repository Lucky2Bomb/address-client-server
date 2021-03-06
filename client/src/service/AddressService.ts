import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { AddressModel } from "../models/address";
import { CityModel } from "../models/city";
import config from "./../config.json";

export const addressAPI = createApi({
    reducerPath: "addressAPI",
    baseQuery: fetchBaseQuery({ baseUrl: config.API_URL }),
    tagTypes: ["Address", "City"],
    endpoints: (build) => ({
        fetchCities: build.query<CityModel, string>({
            query: (id: string) => ({
                url: `/city/${id}`
            }),
            providesTags: (result) => ["City"]
        }),
        fetchAddress: build.query<AddressModel, string>({
            query: (config: string) => ({
                url: `/address`,
                params: {
                    config
                }
            }),
            providesTags: (result) => [{ type: "Address" }]
        })
    }),
});