import React from 'react';
import { ExpirationDate } from "./components/CreditCard/ExpirationDate";
import { Cvv } from "./components/CreditCard/Cvv";
import { CardNumber } from "./components/CreditCard/CardNumber";
import { CardHolder } from "./components/CreditCard/CardHolder";
import { Bank } from "./components/CreditCard/Bank";
export const CreditCard = ({ cardInfo }) => {
    return (<div className='credit-card'>
        <Bank bank={cardInfo.bank} />
        <CardNumber cardNumber={cardInfo.cardNumber} />
        <Cvv cvv={cardInfo.cvv} />
        <ExpirationDate date={cardInfo.expirationDate} />
        <CardHolder cardHolderName={cardInfo.name} />
    </div>);
};
