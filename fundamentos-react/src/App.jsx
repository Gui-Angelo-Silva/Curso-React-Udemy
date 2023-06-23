import './App.css'
import React from 'react'

import Card from './components/layout/Card';

import Mega from './components/mega/Mega'
import Contador from './components/contador/Contador';
import Input from './components/formulario/Input';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import DiretaPai from './components/comunicacao/DiretaPai';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import ParOuImpar from './components/condicional/ParOuImpar';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ListaAlunos from './components/repeticao/ListaAlunos';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import NumAleatorio from './components/basicos/NumAleatorio';
import Fragmento from './components/basicos/Fragmento';
import ComParametro from './components/basicos/ComParametro';
import Primeiro from './components/basicos/Primeiro';

export default () => (
    <div className='App'>
        <h1>Fundamentos React</h1>

        <div className='Cards'>
            <Card
                titulo='#13 - Desafio Mega Sena' color='#424242'>
            </Card>

            <Card
                titulo='#12 - Contador' color='#424242'>
                <Contador numeroInicial={10}></Contador>
            </Card>

            <Card
                titulo='#11 - Componente Controlado (Input)' color='#E45F56'>
                <Input></Input>
            </Card>
            
            <Card
                titulo='#10 - Comunicação Indireta' color='#8BAD39'>
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card
                titulo='#09 - Comunicação Direta' color='#59323C'>
                <DiretaPai></DiretaPai>
            </Card>

            <Card
                titulo='#08 - Renderização Condicional' color='#982395'>
                <ParOuImpar numero={20}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: 'Fernando' }}></UsuarioInfo>
                {/*<UsuarioInfo usuario={{}}></UsuarioInfo>
                <UsuarioInfo></UsuarioInfo>*/}
            </Card>

            <Card
                titulo='#07 - Desafio Repetição' color='#3A9AD9'>
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card
                titulo='#06 - Repetição' color='#FF4C65'>
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card
                titulo='#05 - Componentes com Filhos' color='#00C8F8'>
                <Familia sobrenome='Angelo'>
                    <FamiliaMembro nome='Gabriel' />
                    <FamiliaMembro nome='Felipe' />
                    <FamiliaMembro nome='Gustavo' />
                </Familia>
            </Card>

            <Card
                titulo='#04 - Desafio Aleatório' color='#FA6900'>
                <NumAleatorio
                    max={10}
                    min={1}
                />
            </Card>

            <Card
                titulo='#03 - Fragmento' color='#E94C6F'>
                <Fragmento />
            </Card>

            <Card
                titulo='#02 - Com Paramêtro' color='#E8B71A'>
                <ComParametro
                    titulo='Situação do Aluno'
                    aluno='Guilherme Silva'
                    nota={9.3}
                />
            </Card>

            <Card
                titulo='#01 - Primeiro Componente' color='#588C73'>
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
);