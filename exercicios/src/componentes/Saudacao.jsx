import React,{Component} from "react";

export default class Saudacao extends Component{
    
    state = {
        tipo:this.props.tipo,
        nome:this.props.nome
    }

    //precisa passar o bind pq quando o change é chamada sem ser arrow 
    //o this não é o componete atual 
    //passando o bind o this passa a ser o componente em si
    constructor(props){
        super(props)//é nessesario ter o super com props
        this.setTipo = this.setTipo.bind(this)
        this.setNome = this.setNome.bind(this)

    }



    setTipo(e){
        this.setState({tipo: e.target.value}) 
    }
    setNome(e){
        this.setState({nome: e.target.value}) 
    }
    render(){
        const {tipo, nome} = this.state
        return(
            <div>
                <h1>{tipo} {nome}</h1>
                <hr />
                <input type="text" placeholder="Tipo..." 
                    value={tipo} 
                    onChange={this.setTipo} />
                
                <input type="text" placeholder="Nome..." 
                    value={nome} 
                    onChange={this.setNome} />
            </div>
        )
    }
}
