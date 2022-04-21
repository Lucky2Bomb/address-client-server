import React from 'react';
import Menu from '../components/Menu/Menu';
import Branch from '../components/Branch';
import { useAppSelector } from '../store';
import Loading from '../components/Loading';
import { addressAPI } from '../service/AddressService';

function Home() {
    const { chain } = useAppSelector(state => state.addresses);

    const params = JSON.stringify(chain.filter(item => item.active).map(item => item.type));

    const { data, error, isError, isLoading } = addressAPI.useFetchAddressQuery(params);

    if (isLoading) {
        return <Loading />
    }

    if (isError) {
        return (<>error: {error}</>);
    }

    if (data) {
        return (
            <div>
                <Menu />
                <Branch data={data} maxLevel={chain.filter(item => item.active).length} />
            </div>
        );
    }

    return <Loading />;
}

export default Home;