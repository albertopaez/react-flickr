import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import Buscador from './componentes/Buscador';

class App extends Component {

  constructor() {
    super();
    this.componentDidMount = this.componentDidMount.bind(this);
    this.state = {
      pictures: []
    };
  }

  componentDidMount(termino) {
    if(termino == ''){
      termino = ' '
    }
    fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + process.env.REACT_APP_API_KEY + '&tags='+ termino +'&per_page=200&page=1&format=json&nojsoncallback=1')
      .then(function (response) {
        return response.json();
      })
      .then(function (j) {
        //alert(JSON.stringify(j));
        let picArray = j.photos.photo.map((pic) => {

          var srcPath = 'https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '.jpg';
          return (
            <img alt="error" src={srcPath}></img>
          )
        })
        this.setState({ pictures: picArray });
      }.bind(this))
  }


  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de obras de arte</p>
          <Buscador
            datosBusqueda={this.datosBusqueda}
            componentDidMount={this.componentDidMount}
          />
        </div>
        <div>
          <br></br>
          <p>
            {this.state.pictures}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
