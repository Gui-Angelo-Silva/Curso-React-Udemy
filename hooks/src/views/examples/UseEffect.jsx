import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <div className="center">
                <div>
                    <span className="text">Fatorial:</span>
                    <span className="text red">100</span>
                </div>
                <input type="number" className="text"
                    value={number}
                    onChange={e => setNumber(e.target.value)} />
            </div>
        </div>
    )
}

export default UseEffect