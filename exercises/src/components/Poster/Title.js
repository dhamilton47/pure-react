import React from 'react';
export const Title = ({ title }) => {
    return (<div className='title'>
        <span className='title-end'>{title[0]}</span>
        <span className='title-middle'>{title.slice(1, -1)}</span>
        <span className='title-end'>{title.slice(-1)}</span>
    </div>);
};
