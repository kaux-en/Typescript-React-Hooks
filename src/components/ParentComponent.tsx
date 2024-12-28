import React from 'react';
import Counter from './Counter';


interface ParentComponentProps {
    counterValue: number
};


const ParentComponent: React.FC<ParentComponentProps> = ({ counterValue }) => {
    return (
        <div>
            <h1>Parent Component</h1>
            <Counter counterValue={0} />
        </div>
    )
};

export default ParentComponent;