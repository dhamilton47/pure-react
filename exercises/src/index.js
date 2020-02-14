import React from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'
import './index.css'
import { Envelope } from './components/Envelope/Envelope'
import { CreditCard } from './components/CreditCard/CreditCard'
import { Poster } from './components/Poster/Poster'
import { receiver, sender, cardInfo, picture, title, text } from './data'

const email = {
    sender: 'me',
    subject: 'Remind myself',
    timestamp: '2020-03-25 18:01:00',
    message: 'Happy birthday to me!!'
}

const App = () => {
    return (
        <div>
            <Envelope toPerson={receiver} fromPerson={sender}/>
            <CreditCard cardInfo={cardInfo}/>
            <Poster 
                image={picture} 
                title={title}
                text={text}/>
            <Email email={email}/>
        </div>
    )
}

const Email = ({ email }) => {
    return(
        <div className='email'>
            <input type='checkbox' className='buttons' value='false'/>
            <ThumbTack/>
            <div className='header'>
                <Sender sender={email.sender}/>
                <Subject subject={email.subject}/>
                <Date date={email.timestamp}/>
            </div>
                <Message text={email.message}/>
        </div>
    )
}

const Sender = ({ sender }) => {
    return (
        <div className='sender'>
            {sender}
        </div>
    )
}

const ThumbTack = () => {
    return (
        <span className='thumbtack-button'>
            <i className='fa fa-thumb-tack buttons '/>
        </span>
    )

}

const Subject = ({ subject }) => {
    return (
        <div className='subject'>
            {subject}
        </div>
    )
}

const Date = ({ date }) => {
    const dateString = moment(date).format('MMM-DD')
    return (
        <div className='date'>
            {dateString}
        </div>
    )
}

const Time = ({ time }) => {
    const timeString = moment(time).fromNow()
    return (
        <span className='time'>
            {timeString}
        </span>
    )
}

const Message = ({ text }) => {
    return (
        <div className='text'>
            {text}
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)