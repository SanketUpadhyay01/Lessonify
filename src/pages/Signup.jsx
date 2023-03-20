import React from 'react';
import "./Auth.css"
import "./SignUpDoc"
import "./SignUpUser"
import {Link} from "react-router-dom";



class Signup extends React.Component {

 state = {
     email : "",
     password : "",
     name : "",
 }


    render() {
        return (
            
      <div className="signupDiv" >
            <form className="signupForm" onSubmit={e=>this.props.onSignup(e,this.state)} >
                <h3>Sign Up</h3>
                <div className="signupMain">
                <div>
                    <Link to="/signup-doc"><button type="submit" className="btn btn-primary btn-block">I am a Doctor</button></Link>
                </div>
                <div>
                    
                    <Link to="/signup-user"><button type="submit" className="btn btn-primary btn-block">I am a User</button></Link>
                </div>
                </div>
                <p className="forgot-password text-right">
                Already registered <Link to="/login_pg">sign in?</Link>
                </p>
            </form>
            </div>

        )
    }
}

export default Signup;

