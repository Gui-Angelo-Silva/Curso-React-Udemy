import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho nome='Júnior' idade={20} nerd={ true }></DiretaFilho>
            <DiretaFilho nome='Gabriel' idade={17} nerd={ false }></DiretaFilho>
        </div>
    )
}