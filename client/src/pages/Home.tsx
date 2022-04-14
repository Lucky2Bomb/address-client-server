import React, { useEffect, useState } from 'react';
import Menu from '../components/Menu/Menu';
import Branch from '../components/Branch';
import config from "../config.json";
import { useAppDispatch, useAppSelector } from '../store';
import axios from 'axios';
import { AddressModel } from '../models/address';
import { setAddress } from '../store/reducers/addressReducer';
import Loading from '../components/Loading';

function Home() {
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useAppDispatch();
    const { address, chain } = useAppSelector(state => state.addresses);

    const params = { config: JSON.stringify(chain.filter(item => item.active).map(item => item.type)) };

    useEffect(() => {
        setIsLoading(true);
        axios.get<AddressModel>(`${config.API_URL}/address`, { params }).then(item => dispatch(setAddress(item.data))).finally(() => setIsLoading(false));
        console.log("render home")
    }, [chain]);

    if(isLoading) {
        return <Loading />
    }

    return (
        <div>
            <Menu />
            <Branch data={address} maxLevel={chain.filter(item => item.active).length} />
        </div>
    );
}

export default Home;