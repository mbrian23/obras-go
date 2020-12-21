import React from "react";
import { Link } from 'react-router-dom'

export default function Profile() {

return (

<>
<h1>Bienvenido {localStorage.getItem('currentUser')}</h1>

<Link to="/"> HomePage </Link>
</>

);

}