import React from 'react';
import "./Auth.css"
import {Link} from "react-router-dom";



class SignUpDoc extends React.Component {

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
                <div className="form-group">
                    <label>Name</label>
                    <input onChange={e=>this.setState({name : e.target.value})} type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="form-group">
                    <label>Speciality</label>
                    <input onChange={e=>this.setState({speciality : e.target.value})} type="text" className="form-control" placeholder="Speciality" />
                </div>
                <div className="form-group">
                    <label>Qualification</label>
                    <input onChange={e=>this.setState({qualification : e.target.value})} type="text" className="form-control" placeholder="Qualification" />
                </div>
                <div className="form-group">
                    <label>Contact Number </label>
                    <input onChange={e=>this.setState({contact : e.target.value})} type="text" className="form-control" placeholder="Contact Number" />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input onChange={e=>this.setState({email : e.target.value})} type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input onChange={e=>this.setState({password : e.target.value })} type="password" className="form-control" placeholder="Enter password" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <Link to="/login_pg">sign in?</Link>
                </p>
            </form>
            </div>

        )
    }
}

export default SignUpDoc;
