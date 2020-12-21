import React, { Component} from "react";
import { Link } from 'react-router-dom'
import { Redirect } from "react-router-dom";



class Login extends Component {
    
    

    constructor(props) {
        super(props);
        this.state = {
          username: "",
          password: "",
          redirect: null
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      routingFunction = (target, param) => {
        this.props.history.push({
            pathname: {target},
            state: param
        });
    }


      handleChange(event) {
        const name = event.target.name;

        this.setState({
        [name]: event.target.value
        });
      }

    handleSubmit(event) {
        event.preventDefault()
        const data1 = this.state;
        if(data1.username==localStorage.getItem('currentUser')){
            this.setState({ redirect: "/" });
        }
        else{
            alert("Usuario y contraseña incorrectos.")
        }
    }

    componentDidMount(){
        localStorage.clear()
        console.log("Local storage cleared")
    }

  
    //   }
    render() {
        if(this.state.redirect){
            return <Redirect to={this.state.redirect} />
        }
        return (
        <div className="auth-wrapper">
        <div className="auth-inner">
            <form onSubmit={this.handleSubmit}>
                <h3>Ingresar</h3>

                <div className="form-group">
                    <label>Nombre de usuario</label>
                    <input type="username" name='username' className="form-control" value ={this.state.username} onChange={this.handleChange} placeholder="Enter username" />
                </div>

                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" name= 'password' className="form-control" value ={this.state.password} onChange={this.handleChange} placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Recordar sesión</label>
                    </div>
                </div>
                {/* <User.Consumer> */}
                    <button type="submit" className="btn btn-primary btn-block">Ingresar</button>
                {/* </User.Consumer> */}
                <p className="forgot-password text-right">
                    ¿Te olvidaste de tu <Link to="/forgot-password"> contraseña? </Link>
                </p>
                <button>
                    <Link className="nav-link" to="/signup">¿Quieres registrarte?</Link>
                </button>
            </form>
        </div>
        </div>
        );
    }
}
export default Login;