import React from 'react'
import ReactDOM from 'react-dom'// conversa direro com o dom da pagina

//import Primeiro from './componentes/Primeiro';
//import BomDia from './componentes/BomDia';
//import { BoaNoite,BoaTarde } from './componentes/Multiplus'
//import Multiplus,{BoaNoite} from './componentes/Multiplus'
//import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'


ReactDOM.render(
    <div>
        <Pai sobrenome="Miksza" nome="Matheus">
            <Filho nome='Pedro'/>
            <Filho nome='Matheus'/>
            <Filho nome='Carla'/>
        </Pai>
    </div> 
    , document.getElementById('root'))
    


//const elementoJSX = <h1>React 2</h1>; 

// ReactDOM.render(
// <div>
// <BoaNoite nome='Matheus' idade='28'/>
// <Multiplus.BoaTarde nome='Mysma' idade='28'/>
// </div> , document.getElementById('root'))


