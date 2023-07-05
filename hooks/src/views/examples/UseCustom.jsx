import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'

const UseRef = (props) => {

    const [count, inc, dec] = useCounter(10)
    const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
    const response = useFetch(url)

    function showStates(states){
        return states.map(state => <li>{state.nome} - {state.sigla}</li>)
    }

    //https://files.cod3r.com.br/curso-react/estados.json
    //https://servicodados.ibge.gov.br/api/v1/localidades/estados
    //https://servicodados.ibge.gov.br/api/v1/localidades/municipios/3550308/distritos
    //comando para usar no console do navegador
    //fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(resp => resp.json()).then(json => console.log(json))

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />
            <SectionTitle title='Exercício #01'/>
            <div className="center">
                <span className="text">
                    { count }
                </span>
                <div>
                    <button className="btn"
                        onClick={() => dec()}>-1</button>
                    <button className="btn"
                        onClick={() => inc()}>+1</button>
                </div>
            </div>
            <SectionTitle title='Exercício #01'/>
            <div className="center">
                <ul>
                    { !response.loading ? showStates(response.data) : false }
                </ul>
            </div>
        </div>
    )
}

export default UseRef