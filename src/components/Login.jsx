import React, { Component,PropTypes } from 'react'
import FormLogin from './FormLogin'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom'

class Login extends Component {
    constructor(...props){
        super(...props)
        this.state = {

        }       
    }
    render(){
        return (
            <div className="loginContainer flexCenter"> 
                <h1 className="firtsTittleLogin ">Welcome Back<strong className="boldFont">Match</strong></h1>
                <div className="fatherTextLogin">
                    <p>Log back into your account</p>
                </div>
                <FormLogin />
                <div className="profilePicture"></div>
                <div className="fatherTextLogin  contentJoinNow">
                    <p>Don't have an account Match?
                        <strong className="boldFont joinNowLetter">
                            <Link to="/SignUp" className="boldFont" >Join Now</Link>
                        </strong>
                    </p>
                </div>
                <div className="fatherTextLogin contentForgot flexCenter">
                    <strong className="boldFont joinNowLetter">
                        <Link to="" className="forgotPassword">Forgot Password?</Link>
                    </strong>
                </div>
            </div>
        )
    }
}

Login.propTypes = {}
Login.defaultProps = {}
export default Login