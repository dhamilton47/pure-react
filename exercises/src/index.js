import React from 'react'
import ReactDOM from 'react-dom'

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
            <AddressLabel addressee={sender}/><br/>
            <AddressLabel addressee={receiver}/>
        </div>
    )
}

const AddressLabel = ({ addressee }) => {
    const {name, street, region} = addressee
    return (
        <div>
            <div>{name}</div>
            <div>{street}</div>
            <div>{region}</div>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)