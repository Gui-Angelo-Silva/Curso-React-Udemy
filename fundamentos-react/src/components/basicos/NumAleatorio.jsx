import React from 'react'
/*
export default function NumAleatorio(props){
    const num = parseInt(Math.random() * 3)//ou Math.floor
    
    return (
        <div>
            { num }
        </div>
    )
}Meu código de número aleatório*/

export default (props) => {
    const { min, max } = props
    const aleatorio = parseInt(Math.random () * (max - min)) + min;
    
    return (
        <div>
            <h2>Valor aleatório</h2>
            <p>
                <strong>Valor Mínimo:</strong> { min } 
            </p>
            <p>
                <strong>Valor Máximo:</strong> { max } 
            </p>
            <p>
                <strong>Valor Escolhido:</strong> { aleatorio } 
            </p>
        </div>
    )
}