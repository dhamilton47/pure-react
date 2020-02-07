import React from 'react';
import { AddressLabel } from "./AddressLabel";
import { Stamp } from "./Stamp";

export const Envelope = ({ toPerson, fromPerson }) => {
    return (<div className='envelope'>
        <div className='from-person'>
            <AddressLabel addressee={fromPerson} />
            <Stamp />
        </div>

        <div className='to-person'>
            <AddressLabel addressee={toPerson} />
        </div>
    </div>);
};
