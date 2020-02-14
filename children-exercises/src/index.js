import React from 'react'
import ReactDOM from 'react-dom'
// import moment from 'moment'
import './index.css'

const example = (
        <div>
            My daughter wants me to help her with her FASFA.
            So, here is my todo list:
            <ul>
                <li>Open mail</li>
                <li>Sort mail</li>
                <li>Pay any bills found</li>
                <li>File documents found</li>
                <li>Help my daughter with her FASFA</li>
            </ul>
        </div>
    )

const App = () => {
    return (
        <div>
            <ErrorBox>The world is ending</ErrorBox>
        </div>
    )
}

const ErrorBox = ({ children }) => {
    return (
        <div className='alert'>
                <i className='fa fa-exclamation-triangle'/>
            <span>
                {children}
            </span>
        </div>
    )
}

const FirstChildOnly = ({ children }) => {
    let items = React.Children.toArray(children)

    return (
        <div>{items[0]}</div>
    )
}

const LastChildOnly = ({ children }) => {
    return (
        <div></div>
    )
}

const Head = ({ number, children }) => {
    return (
        <div></div>
    )
}

const Tail = ({ number, children }) => {
    return (
        <div></div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)