import React from 'react';

export const ExpirationDate = ({ date }) => {
    return (<div className='expiration-date'>
        <span className='expiration-date-label'>
            VALID THRU
            </span>
        {' '}{date}
    </div>);
};
