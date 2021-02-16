import React, { Component } from "react";
import { render } from "react-dom";

class Buscador extends Component {

    busquedaref = React.createRef();
    obtenerDatos = (e) => {
        e.preventDefault();
        const termino = this.busquedaref.current.value;
        this.props.componentDidMount(termino);
    }
    enviarFlores = (i) => {
        i.preventDefault();
        const flores = 'flores'
        this.props.componentDidMount(flores);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    <div className="form-group coli-md-8">
                        <input ref={this.busquedaref} type="text" className="form-control form-control-lg" placeholder="Encuentra tu obre de arte"></input>
                    </div>
                    <div className="form-group coli-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group coli-md-4">
                        <button onClick={this.enviarFlores} className="btn btn-lg btn-danger btn-block"> Flores</button>
                    </div>
                </div>
            </form>
            </div>
            
        )
    }
}
export default Buscador;