import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Envelope } from './components/Envelope/Envelope'
import { CreditCard } from './components/CreditCard/CreditCard'

const sender = {
    name: 'Mr. Sender',
    street: '123 Fake St.',
    region: 'Boston, MA 02118'
}

const receiver = {
    name: 'Mrs. Receiver',
    street: '123 Fake St.',
    region: 'San Francisco, CA 94101'
}

const cardInfo = {
    name: 'Fred Flintstone',
    expirationDate: '05/03',
    cardNumber: '0000 0000 0000 0001',
    bank: 'First Bank of Bedrock',
    cvv: '1324'
}

const App = () => {
    return (
        <div>
            <Envelope toPerson={receiver} fromPerson={sender}/>
            <CreditCard cardInfo={cardInfo}/>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)