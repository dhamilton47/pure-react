import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Envelope } from './Envelope'

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

const App = () => {
    return (
        <div>
            <Envelope toPerson={receiver} fromPerson={sender}/>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)