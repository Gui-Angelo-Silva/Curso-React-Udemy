import './index.css'
import ReactDOM from 'react-dom' //o nome para o import é algo que queira 
import React from 'react' //o import do react tem q ser chamado assim 

import App from './App'

//const el = document.getElementById('root')

/*ReactDOM.render(
    <div>
        <strong>Olá React!</strong>
    </div>, 
    document.getElementById('root')
)*/

ReactDOM.render(
    <App></App>,
    document.getElementById('root')
)