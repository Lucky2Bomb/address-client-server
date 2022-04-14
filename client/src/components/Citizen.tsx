import React, { useState } from 'react';
import { CitizenModel } from '../models/citizen';
import { addressAPI } from './../service/AddressService';

interface CitizenProps {
    citizen: CitizenModel | any;
}

function Citizen({ citizen }: CitizenProps) {

    const [title, setTitle] = useState("Загрузка...");
    const { isLoading, isError, data } = addressAPI.useFetchCitiesQuery(citizen.city_id);


    const onMouseEnter = () => {
        if (isLoading) setTitle("Загрузка...");
        if (isError) setTitle("Ошибка...");
        if (data) setTitle(data.data);
    }

    return (
        <span title={title} onMouseEnter={onMouseEnter}>{citizen.name}</span>
    );
}

export default Citizen;