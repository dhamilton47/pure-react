import React from 'react';
import { ExpirationDate } from "./ExpirationDate";
import { Cvv } from "./Cvv";
import { CardNumber } from "./CardNumber";
import { CardHolder } from "./CardHolder";
import { Bank } from "./Bank";
export const CreditCard = ({ cardInfo }) => {
    return (<div className='credit-card'>
        <Bank bank={cardInfo.bank} />
        <CardNumber cardNumber={cardInfo.cardNumber} />
        <Cvv cvv={cardInfo.cvv} />
        <ExpirationDate date={cardInfo.expirationDate} />
        <CardHolder cardHolderName={cardInfo.name} />
    </div>);
};
