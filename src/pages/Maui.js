

import {Button, Card, Container, Row, Col } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import React from 'react'
import ContactForm from "../components/contactForm"
import MauiPh from "../assets/EdificioMaui.jpg"
import MauiPh2 from "../assets/MauiPH2.jpg"




const info={
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


export default function Maui() {
    return (
        <Container fluid>
        <Row xs={1} md={2} lg={3} xl={3}>
          <Col lg={true}>
            <Card>
                
                <Card.Img display= "inline-block" variant="top" src={MauiPh} alt="Foto de la obra"/>
            
              
              <Card.Body>
                  <Card.Title> 
                    {info.name}
                  </Card.Title>
                  <Card.Text>
                    {info.description}
                  </Card.Text>
                  <Button variant="outline-primary">
                    <a href="http://rener.com.uy/properties/maui/"> Constructora </a>
                  </Button>
              </Card.Body>
            </Card>

            <Card>
                  <Card.Body>
                    <ContactForm obra={info.id}>

                    </ContactForm>
                  </Card.Body>
                
             </Card>
            
            
          </Col>
          <Col lg={true}>
            <Card>
                    
                <Card.Img display= "inline-block" variant="top" src={MauiPh2} alt="Foto de la obra"/>
                
                
                <Card.Body>
                    <Card.Title> 
                        {"Etapa: "+info.stage}
                    </Card.Title>
                    <Card.Title> 
                        {"Tipo: "+info.type}
                    </Card.Title>
                </Card.Body>
                </Card>
            </Col>
        </Row>
      </Container>
    )
}
