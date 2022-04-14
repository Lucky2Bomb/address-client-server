import React from 'react';
import Leaf from './Leaf';
import Citizen from './Citizen';

interface ObjectProps {
    [key: string]: ObjectProps;
}

interface BranchProps {
    data: ObjectProps;
    level?: number;
    maxLevel: number;
}

function Branch({ data, level = 0, maxLevel }: BranchProps) {

    const branches = [];

    for (let key in data) {
        branches.push(<li key={key}>{level < maxLevel ? <>{key}: <Branch data={data[key]} level={level + 1} maxLevel={maxLevel} /></> : <Leaf><Citizen citizen={data[key]} /></Leaf>}</li>)
    }

    return (
        <ul>
            {branches}
        </ul>
    );
}

export default Branch;