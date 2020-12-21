import { Link } from 'react-router-dom'
import React, { Component } from "react";
import axios from 'axios';
import { Redirect } from "react-router-dom";



export default class SingUp extends Component {

    constructor(props) {
        super(props);
        this.state = {name: '', username: '', email: '', password: '', fecha_nacimiento: new Date()};
        this.firstDate= new Date()
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    


    handleSubmit(event) {
        const data1 = this.state;
        localStorage.setItem('currentUser', data1.username);
    }
    
      handleChange(event) {
        const name = event.target.name;

        this.setState({
        [name]: event.target.value
        });
      }


      


    render() {
        return (
            <div className="auth-wrapper">
            <div className="auth-inner">
            <form onSubmit={this.handleSubmit}>
                <h3>Registrarse</h3>

                <div className="form-group" >
                    <label>Nombre completo</label>
                    <input type="text" name= 'name' className="form-control" value ={this.state.name} onChange={this.handleChange} placeholder="Name" />
                </div>

            

                <div className="form-group">
                    <label>Nombre de usuario</label>
                    <input type="text" name= 'username' className="form-control" value ={this.state.username} onChange={this.handleChange} placeholder="Username" />
                </div>

                <div className="form-group">
                    <label>E-mail</label>
                    <input type="email" name= 'email' className="form-control" value ={this.state.email} onChange={this.handleChange} placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" name= 'password' className="form-control" value ={this.state.password} onChange={this.handleChange} placeholder="Enter password" />
                </div>

                <button type="submit">Registrarse</button>
                <p className="forgot-password text-right">
                    ¿Ya estás registrado? <Link to={"/login"}> Ingresar </Link>
                </p>
            </form>
            </div>
            </div>
        );
    }
}