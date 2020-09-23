import React from 'react'

const person = (props) => {
    return (
        <div>
            <p>I'm a damn {props.name} and I am {props.age} Years Old!!</p>     
            <p>{props.children}</p>
        </div>
    )
}

export default person