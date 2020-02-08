import React from 'react';

export const AddressLabel = ({ addressee }) => {
    const { name, street, region } = addressee;
    return (<span>
        <div>{name}</div>
        <div>{street}</div>
        <div>{region}</div>
    </span>);
};
