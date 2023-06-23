import React from 'react'

export default props => {
    return (
        <div>
            <button onClick={ props.setDec }>-</button>
            <button onClick={ props.setInc }>+</button>
        </div>
    )
}