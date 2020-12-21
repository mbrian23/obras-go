import React from "react";
import { Link } from 'react-router-dom'
import { askForPermissioToReceiveNotifications } from '../components/push-notifications.js';
import {Button, Card, Carousel, Container, Row, Col, Image} from 'react-bootstrap'


export default function Settings() {

return (

    <>
        <h1>Ajustes</h1>
        <Button variant="outline-primary" onClick={askForPermissioToReceiveNotifications}>
                        Reciba notificaciones de nuevas obras
        </Button>
        <div>
            <Link to="/"> Home </Link>
        </div>
    </>

    );

}