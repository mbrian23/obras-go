import React from 'react'
import { Link } from 'react-router-dom'
import {Button, Card, Carousel, Container, Row, Col, Image} from 'react-bootstrap'
import construClase from '../assets/construClase.jpg'
import inConstru from '../assets/inConstru.jpg'
import house from '../assets/house.jpg'


export default function HomePage() {
    return (
        <div>
            <Container fluid>
                <Row xs={1} md={1} lg={3} xl={3}>
                    <Col lg={true}>
                        <Carousel >
                            <Carousel.Item>
                                <Image
                                    className="d-block w-100"
                                    src= {construClase} 
                                    alt="Aprende de construcción en la construcción"
                                >
                                </Image>
                                <Carousel.Caption>
                                    <h3>Aprende de construcción en la construcción</h3>
                                    <p>Solo elige dónde y cuándo.</p>
                                    <Link className="nav-link" to="/map" > Mapa </Link>
                                </Carousel.Caption>
                            </Carousel.Item>                      
                        </Carousel>
                    </Col>
                    <Col>
                        <Card >
                            <Card.Img display= "inline-block" variant="top" src={house}/>
                            <Card.Body>
                                <Card.Title> Ver construcciones de casas en el área</Card.Title>
                                <Card.Text>
                                    Perfecto para aquellos que quieren aprender cómo se construyen casas. 
                                </Card.Text>
                                <Button variant="outline-primary">
                                    <Link className="nav-link" to="/casas"> Casas </Link>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card >
                            <Card.Img display= "inline-block" variant="top" src={inConstru}/>
                            <Card.Body>
                                <Card.Title> Ver edificios en el área</Card.Title>
                                <Card.Text>
                                    Para los que quieren aprender de construcciones verticales
                                </Card.Text>
                                <Button variant="outline-primary">
                                    <Link className="nav-link" to="/edificios"> Edificios </Link>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>

        </div>
    )
}
