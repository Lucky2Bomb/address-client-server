import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { addressSlice } from './reducers/addressReducer'
import { addressAPI } from './../service/AddressService';
// ...

export const store = configureStore({
    reducer: {
        addresses: addressSlice.reducer,
        [addressAPI.reducerPath]: addressAPI.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(addressAPI.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;