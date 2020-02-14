import React from 'react';
import { Saying } from './Saying';
import { Title } from './Title';
export const Poster = ({ image, title, text }) => {
    return (<div className='poster'>
        <img src={image} alt='railroad tracks' width='900' />
        <Title title={title} />
        <Saying text={text} />
    </div>);
};
