import React,{Component} from 'react'

const FormSignUp = (...props) => (
    <div className="formSignUp flexCenter">
        <form action="">
            <label htmlFor="" className="fatherIpuntLogin">
                <input type="text" placeholder="Username"/>
            </label>
            <label htmlFor="" className="fatherIpuntLogin">
                <input type="email" placeholder="Your Email"/>
            </label>
            <label htmlFor="" className="fatherIpuntLogin">
                <input type="password" placeholder="**********"/>
            </label>
            <div className="fatherButtonLogin flexCenter">
                <button>Sign Up</button>
            </div>
        </form>
    </div>
)

export default FormSignUp;