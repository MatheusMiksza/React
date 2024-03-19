import React from "react"


export default props => [
    <h1 key='h1'>Bom dia {props.nome} {props.idade}</h1>,
    <h2 key='h1'>Até breve</h2>
]

//TENHO QUE MANDAR APENAS UM ELEMENTO POR export

// <React.Fragment>
//     <h1>Bom dia {props.nome} {props.idade}</h1>
//     <h2>Até breve</h2>

// </React.Fragment>


// <div>
//     <h1>Bom dia {props.nome} {props.idade}</h1>
//     <h2>Até breve</h2>

// </div>