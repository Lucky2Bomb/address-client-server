import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import config from "../../config.json";


interface Chain {
    type: string;
    active: boolean;
}

export interface AddressState {
    chain: Chain[];
    error: string | null;
}

const initialState: AddressState = {
    chain: config.CHAIN.map(item => ({ type: item, active: true })),
    error: null
};

export const addressSlice = createSlice({
    name: "addresses",
    initialState,
    reducers: {
        setChain(state: AddressState, action: PayloadAction<Chain[]>) {
            state.chain.length = 0;
            state.chain = [...state.chain, ...action.payload];
        }
    },
});

export const { setChain } =
    addressSlice.actions;
export default addressSlice.reducer;