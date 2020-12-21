import React, { Component, Fragment } from 'react';
import axios from 'axios';
import MapReact from "../components/map"

import inConstru from '../assets/inConstru.jpeg'





class Map extends Component {
  state = {
    incidents: [],
  }

  async componentDidMount() {
    // const res = await axios.get('https://data.sfgov.org/resource/wr8u-xric.json', {
    //   params: {
    //     "$limit": 500,
    //     "$$app_token": 'a6KMM7wY6LLeKlXWqliBLgLK5'
    //   }
    // })
    // const incidents = res.data;
    const incidents=[
        {
            "id":"mandalay",
            "type":"Propiedad Vertical",
            "stage":"Rústico",
            "description":"El edificio se encuentra en una zona privilegiada de Pocitos, muy cerca de la Rambla y del importante centro de desarrollo financiero y comercial formado por el World Trade Center, Montevideo Shopping Center e importantes bancos y casas cambiarias.",
            "name":"Mandalay",
            "address":"26 de Marzo 3339",
            "city":"Montevideo",
            "zipcode":"11300",
            "point":{
            "coordinates":[-56.141238, -34.906523]
            }
        },
        {
            "id":"edificio-maui",
            "type":"Propiedad Vertical",
            "stage":"Rústico",
            "name":"Edificio MAUI",
            "description":"En el corazón de pocitos se encuentra MAUI sobre calle 26 de marzo.",
            "address":"26 de Marzo 3213",
            "city":"Montevideo",
            "zipcode":"11300",
            "point":{
                "coordinates":[-56.144414,-34.907148]
            }
        }
      ]
    this.setState({incidents: incidents });
  };

  render() {
    return (
        
        this.state.incidents&&<MapReact incidents={this.state.incidents}/>
    );
  }
 }
 export default Map;
 
