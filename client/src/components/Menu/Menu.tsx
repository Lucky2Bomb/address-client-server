import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { setChain } from '../../store/reducers/addressReducer';
import Checkbox from '../Checkbox';
import "./Menu.scss";

function Menu() {

    const dispatch = useAppDispatch();
    const { chain } = useAppSelector(state => state.addresses);

    const setValue = (type: string, active: boolean) => {
        dispatch(setChain(chain.map(item => item.type === type ? { type, active } : item)));
    }

    return (
        <div className="menu">
            {chain.map(item => <Checkbox key={item.type} text={item.type} change={(active) => setValue(item.type, active)} defaultChecked={item.active} />)}
        </div>
    );
}

export default Menu;