import React from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'
import PropTypes from 'prop-types'
import './index.css'

const tweet = {
    gravatar: 'c8795e0c564d31b304db7f0cc87b55c9',
    author: {
        name: 'IAMA Dog Lover',
        handle: 'doglover'
    },
    message: 'Nothing here about cats.',
    retweets: 0,
    likes: 2,
    timestamp: '2020-02-05 21:35:35'
}

function Tweet() {
    return (
        <div className='tweet'>
            <Avatar hash={tweet.gravatar}/>
            <div className='content'>
                <Author author={tweet.author}/><Time time={tweet.timestamp}/>
                <Message text={tweet.message}/>
                <div className='buttons'>
                    <ReplyButton/>
                    <RetweetButton count={tweet.retweets}/>
                    <LikeButton count={tweet.likes}/>
                    <MoreOptionsButton/>
                </div>
            </div>
        </div>
    )
}

Tweet.propTypes ={
    tweet: PropTypes.shape({
        message: PropTypes.string,
        gravatar: PropTypes.string.isRequired,
        author: PropTypes.object.isRequired,
        retweets: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
        timestamp: PropTypes.string.isRequired
    })
}

function Avatar ({ hash }) {
    return (
        <img 
            className='avatar'
            src={'https://www.gravatar.com/avatar/' + hash}
            alt='avatar' />
    )
}

function Author({ author }) {
    const {name, handle} = author
    return(
        <span className='author'>
            <span className='name'>
                {name}
            </span>
            <span className='handle'>
                @{handle}
            </span>
        </span>
    )
    
}

Author.propTypes = {
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        handle: PropTypes.string.isRequired
    })
}

const Time = ({ time }) => {
    const timeString = moment(time).fromNow()
    return (
        <span className='time'>
            {timeString}
        </span>
    )
}

function Message({ message }) {
    return (
        <div className='message'>
            {message}
        </div>
    )
}

const RetweetButton = ({ count }) => {
    return (
        <span className='retweet-button'>
            <i className='fa fa-retweet'/>
            {count > 0 && <span className='retweet-count'>{count}</span>}
        </span>
    )
}


const LikeButton = ({ count }) => {
    return (
        <span className='like-button'>
            <i className='fa fa-heart'/>
            {count > 0 && <span className='like-count'>{count}</span>}
        </span>
        
    )
}

LikeButton.propTypes = {
    count: PropTypes.number
}

const ReplyButton = () => (
    <span className='reply-button'>
        <i className='fa fa-reply'/>
    </span>)

const MoreOptionsButton = () => (
    <span className='more-options-button'>
        <i className='fa fa-ellipsis-h'/>
    </span>)

ReactDOM.render(
    <Tweet/>,
    document.querySelector('#root')
)