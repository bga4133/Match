import React, { Component } from 'react'

export default class FormLogin  extends Component{
    render(){
        return(
            <div className="cardLogin flexCenter">
                <h1>Log In</h1>
                <form action="" className="formLogin flexCenter">
                    <label htmlFor="" className="fatherIpuntLogin">
                        <input type="email" placeholder="Your Email"/>
                    </label>
                    <label htmlFor="" className="fatherIpuntLogin">
                        <input type="password" placeholder="**********"/>
                    </label>
                    <div className="fatherButtonLogin flexCenter">
                        <button>Login</button>
                    </div>
                </form>
            </div>
        )
    }
}