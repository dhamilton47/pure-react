import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

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

const Envelope = ({toPerson, fromPerson}) => {
    return (
        <div className='envelope'>
            <div className='from-person'>
                <AddressLabel addressee={fromPerson}/>
                <Stamp/>
            </div>
            
            <div className='to-person'>
                <AddressLabel addressee={toPerson}/>
            </div>
        </div>
    )
}

const AddressLabel = ({ addressee }) => {
    const {name, street, region} = addressee
    return (
        <span>
            <div>{name}</div>
            <div>{street}</div>
            <div>{region}</div>
        </span>
    )
}

const Stamp = () => {
    return(
        <span className='stamp'>
            <span className='stamp-design'>stamp</span>
        </span>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)