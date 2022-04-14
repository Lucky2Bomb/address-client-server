import React from 'react';

interface LeafProps {
    children: any;
}

function Leaf({ children }: LeafProps) {
    return (
        <span>{children}</span>
    );
}

export default Leaf;