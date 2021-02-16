import React, { Component } from 'react';
import { render } from 'react-dom';


export default class Buscador extends Component {
  
    constructor(){
        super();
        this.state = {
          pictures: [],
        };
    }

    componentDidMount(){
        //alert(process.env.REACT_APP_API_KEY);
        fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+process.env.REACT_APP_API_KEY+'&tags=nyc&per_page=100&page=1&format=json&nojsoncallback=1')
        .then(function(response){
          return response.json();
        })
        .then(function(j){
          //alert(JSON.stringify(j));
          let picArray = j.photos.photo.map((pic) => {
            
            var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
            return(
              <img alt="dogs" src={srcPath}></img>
            )
          })
          this.setState({pictures: picArray});
        }.bind(this))
      }
    
      render() {
        return (
            
          <div className="App">
              <br></br>
            <p className="App-intro">
              {this.state.pictures}
            </p>
          </div>
        );
      }
}