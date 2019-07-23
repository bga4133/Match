import React, { Component,PropTypes } from 'react'

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter,
    Switch
} from 'react-router-dom'

// Components
import Login from './Login'
import SignUp from './SignUp'
import Match from './Match'
import Notification from './Notification'
import PageNotFound from './PageNotFound'

class App extends Component {
    constructor(...props){
        super(...props)
        this.state = {

        }       
    }
    render(){
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Login}></Route>
                    <Route path="/Login" component={Login} />
                    <Route path="/SignUp" component={SignUp} />
                    <Route path="/Match" component={Match} />
                    <Route path="/Notification" component={Notification} />
                    <Route component ={PageNotFound}/>
                </Switch>
            </Router>
        )
    }
}

App.propTypes = {}
App.defaultProps = {}
export default App