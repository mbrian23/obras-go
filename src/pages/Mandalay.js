

import {Button, Card, Container, Row, Col } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import React from 'react'
import ContactForm from "../components/contactForm"
import MandalayPh from "../assets/Mandalay.jpg"
import MandalayPh1 from "../assets/mandalay1.jpg"



const info={
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
}

export default function Maui() {
    return (
        <Container fluid>
        <Row xs={1} md={2} lg={3} xl={3}>
          <Col lg={true}>
            <Card>
                
                <Card.Img display= "inline-block" variant="top" src={MandalayPh} alt="Foto de la obra"/>
            
              
              <Card.Body>
                  <Card.Title> 
                    {info.name}
                  </Card.Title>
                  <Card.Text>
                    {info.description}
                  </Card.Text>
                  <Button variant="outline-primary">
                    <a href="http://rener.com.uy/properties/mandalay/"> Constructora </a>
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
                    
                <Card.Img display= "inline-block" variant="top" src={MandalayPh1} alt="Foto de la obra"/>
                
                
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
