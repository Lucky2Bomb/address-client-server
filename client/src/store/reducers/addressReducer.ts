import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddressModel } from "../../models/address";
import config from "../../config.json";


interface Chain {
    type: string;
    active: boolean;
}

export interface AddressState {
    chain: Chain[];
    address: AddressModel;
}

const initialState: AddressState = {
    chain: config.CHAIN.map(item => ({ type: item, active: true })),
    address: {}
};

export const addressSlice = createSlice({
    name: "addresses",
    initialState,
    reducers: {
        setAddress: (state: AddressState, action: PayloadAction<AddressModel>) => {
            state.address = action.payload;
        },
        setChain(state: AddressState, action: PayloadAction<Chain[]>) {
            state.chain.length = 0;
            state.chain = [...state.chain, ...action.payload];
        }
    },
});

export const { setAddress, setChain } =
    addressSlice.actions;
export default addressSlice.reducer;