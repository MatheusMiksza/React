import React from 'react'
import ReactDOM from 'react-dom'// conversa direro com o dom da pagina

//import Primeiro from './componentes/Primeiro';
import BomDia from './componentes/BomDia';
//const elementoJSX = <h1>React 2</h1>; 
ReactDOM.render(<BomDia nome='Matheus' idade='28'/>, document.getElementById('root'))

