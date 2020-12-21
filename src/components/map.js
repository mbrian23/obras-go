import React, { Component } from 'react'
import { MapContainer as Map, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import {Button, Card, Carousel, Container, Row, Col, Image} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Icon from '../assets/marker.svg'
import L from 'leaflet';

import Mandalay from '../assets/Mandalay.jpg'
import EdificioMaui from '../assets/EdificioMaui.jpg'


const venueLocationIcon = L.icon({
  iconUrl: Icon,
  iconRetinaUrl: Icon,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [50, 50],
  className: 'leaflet-venue-icon'
});

function getImage(image){
    switch (image) {
        case "mandalay":
            return Mandalay
        case "edificio-maui":
            return EdificioMaui
        default:
            return Mandalay;
    }
}




export default class MapReact extends Component {
    state = {
        lat: 37.7749,
        lng: -122.4194,
        zoom: 13,
        loading: true
    }

    componentDidMount(props) {
        navigator.geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
    
            this.setState({
              lat: latitude, lng: longitude, loading: false 
            }
            );
          },
          () => {this.setState({loading: false})
        }
        );
      }

    render() {
        const loading = this.state.loading;

        if (loading) {
            return null
        }
        else{
            return (
                this.props.incidents ?
                     <>
                     <Map
                         center={[this.state.lat, this.state.lng]} 
                         zoom={this.state.zoom} 
                         style={{ width: '100%', height: '900px'}}
                         >
                             <TileLayer
                             attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                             />
                             {
                             this.props.incidents.map(incident => {
                                 const point = [incident['point']['coordinates'][1],incident['point']['coordinates'][0]]
                             
     
                                     return (
                                         
                                         
                                         <Marker position={point} key={incident['incident_number']} icon={venueLocationIcon} >
                                             <Popup>
                                                 <Card >
                                                     <Card.Img display= "inline-block" variant="top" src={getImage(incident['id'])}/>
                                                     <Card.Body>
                                                         <Card.Title> {incident['name']}</Card.Title>
                                                         <Card.Text>
                                                             {"Tipo:"+incident['type']}
                                                         </Card.Text>
                                                         <Card.Text>
                                                             {"Etapa:"+incident['stage']}
                                                         </Card.Text>
                                                         <Card.Text>
                                                             {incident['description']}
                                                         </Card.Text>
                                                         <Button variant="outline-primary">
                                                             <Link to={"/site/"+incident['id']}>
                                                                 Ver más
                                                             </Link>
                                                         </Button>
                                                     </Card.Body>
                                                 </Card>
                                                 
                                             
                                             </Popup>
                                         </Marker>
                                         
                                     )
                                 })
                             }
                         </Map>
                         
                     </>
                     :
                     'No hay construcciones que cumplan con los requisitos deseados'
             )

        }
        
    }
 }
 
 
 