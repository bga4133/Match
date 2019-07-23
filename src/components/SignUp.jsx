import React,{Component} from 'react'
import FormSignUp from './FormSignUp'
import Image  from '../images/vector.png'
  

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom'

export default class SignUp extends Component{
    render(){
        return(
            <div className="signUp flexCenter">
                <div className="containerSignUp">
                    <div className="flexCenter fatherVectorImg">
                        <img src={Image} className="vectorImg" alt=""/>
                    </div>
                    <h1 className="">Hello</h1>
                    <p>Create an account to continue.</p>
                    <FormSignUp />
                    <div className="fatherTextSignUp">
                        <p>Al ready have an account
                            <strong className="boldFont joinNowLetter">
                                <Link to="/" className="boldFont" >Login</Link>
                            </strong>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}