import React, { useState } from 'react';

interface CheckboxProps {
    change: (value: boolean) => void;

    text: string;
    defaultChecked?: boolean;
}

function Checkbox({ text, change, defaultChecked = false }: CheckboxProps) {
    const [checked, setChecked] = useState(defaultChecked);

    const handlerChange = () => {
        setChecked(!checked);
        change(!checked);
    }

    return (
        <span className="checkbox">
            <input type="checkbox" onChange={handlerChange} checked={checked} />
            <span>{text}</span>
        </span>
    );
}

export default Checkbox;