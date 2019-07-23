import React ,{ Component,Proptypes} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom'
// images
import Icon1  from '../images/1.png'
import Icon2  from '../images/2.png'
import Icon3  from '../images/3.png'
import Icon4  from '../images/4.png'
// others

class Match extends Component{
    constructor(...props){
        super(...props)
        this.state={

        }
    }
    render(){
        return(
            <div className="match">
                <div className="fatherMatch">
                    <div className="profileSession">
                        <h1>Discover</h1>
                        <div className="profilePictureMini"></div>
                    </div>
                    <div className="filters">
                        <Link className="filter" to="">All</Link>
                        <Link className="filter" to="">Age</Link>
                        <Link className="filter" to="">Location</Link>
                        <Link className="filter" to="">Match</Link>
                    </div>
                    {/* people information */}
                        <div className="fatherMatchCent">
                            <Slider
                                speed={500}
                                slidesToShow={1}
                                slidesToScroll={1}
                                infinite={false}>
                            

                                <div className="cardMatch">
                                    <div className="imageContent">Image</div>
                                    <div className="descriptionMatch">
                                        <h3>Daniel Cardona</h3>
                                        <div className="locationMatch">
                                            <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTEuOTk5IDUxMS45OTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMS45OTkgNTExLjk5OTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiNFRTM4NDA7IiBkPSJNNDU0Ljg0OCwxOTguODQ4YzAsMTU5LjIyNS0xNzkuNzUxLDMwNi42ODktMTc5Ljc1MSwzMDYuNjg5Yy0xMC41MDMsOC42MTctMjcuNjkyLDguNjE3LTM4LjE5NSwwICBjMCwwLTE3OS43NTEtMTQ3LjQ2NC0xNzkuNzUxLTMwNi42ODlDNTcuMTUzLDg5LjAyNywxNDYuMTgsMCwyNTYsMFM0NTQuODQ4LDg5LjAyNyw0NTQuODQ4LDE5OC44NDh6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiNGRkUxRDY7IiBkPSJNMjU2LDI5OC44OWMtNTUuMTY0LDAtMTAwLjA0MS00NC44NzktMTAwLjA0MS0xMDAuMDQxUzIwMC44MzgsOTguODA2LDI1Niw5OC44MDYgIHMxMDAuMDQxLDQ0Ljg3OSwxMDAuMDQxLDEwMC4wNDFTMzExLjE2NCwyOTguODksMjU2LDI5OC44OXoiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
                                            <p>Medellín</p>
                                        </div>
                                    </div>
                                </div> 
                            </Slider>
                        </div>
                    {/* finish people information */}
                    <div className="buttonsMatch">
                        <button className=""><img src={Icon1} className="vectorImg" alt=""/></button>
                        <button className=""><img src={Icon2} className="vectorImg" alt=""/></button>
                        <button className=""><img src={Icon3} className="vectorImg" alt=""/></button>
                        <button className=""><img src={Icon4} className="vectorImg" alt=""/></button>
                        {/* <button className=""><img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ljk0IDQ3Ljk0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0Ny45NCA0Ny45NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiNFRDhBMTk7IiBkPSJNMjYuMjg1LDIuNDg2bDUuNDA3LDEwLjk1NmMwLjM3NiwwLjc2MiwxLjEwMywxLjI5LDEuOTQ0LDEuNDEybDEyLjA5MSwxLjc1NyAgYzIuMTE4LDAuMzA4LDIuOTYzLDIuOTEsMS40MzEsNC40MDNsLTguNzQ5LDguNTI4Yy0wLjYwOCwwLjU5My0wLjg4NiwxLjQ0OC0wLjc0MiwyLjI4NWwyLjA2NSwxMi4wNDIgIGMwLjM2MiwyLjEwOS0xLjg1MiwzLjcxNy0zLjc0NiwyLjcyMmwtMTAuODE0LTUuNjg1Yy0wLjc1Mi0wLjM5NS0xLjY1MS0wLjM5NS0yLjQwMywwbC0xMC44MTQsNS42ODUgIGMtMS44OTQsMC45OTYtNC4xMDgtMC42MTMtMy43NDYtMi43MjJsMi4wNjUtMTIuMDQyYzAuMTQ0LTAuODM3LTAuMTM0LTEuNjkyLTAuNzQyLTIuMjg1bC04Ljc0OS04LjUyOCAgYy0xLjUzMi0xLjQ5NC0wLjY4Ny00LjA5NiwxLjQzMS00LjQwM2wxMi4wOTEtMS43NTdjMC44NDEtMC4xMjIsMS41NjgtMC42NSwxLjk0NC0xLjQxMmw1LjQwNy0xMC45NTYgIEMyMi42MDIsMC41NjcsMjUuMzM4LDAuNTY3LDI2LjI4NSwyLjQ4NnoiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" /></button>
                        <button className=""><img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU3Ljk0NyA1Ny45NDciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU3Ljk0NyA1Ny45NDc7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8Zz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNFNjRDM0M7IiBkPSJNMjguOTQ3LDU2LjQ4NmMxNS42ODUtMTEuMjc3LDIzLjUzMi0yMS41OTIsMjcuMjIyLTI5LjQ2YzQuMzExLTkuMTkzLDAuNTYxLTIwLjU4OS04Ljg0NS0yNC40MTMgICBDMzYuMjY4LTEuODgsMjguOTQ3LDguNDg2LDI4Ljk0Nyw4LjQ4NlMyMS42NzgtMS45MDcsMTAuNjIzLDIuNTg4QzEuMjE3LDYuNDEyLTIuNTMzLDE3LjgwOCwxLjc3OCwyNy4wMDEgICBDNS40NjgsMzQuODY4LDEzLjI2Miw0NS4yMSwyOC45NDcsNTYuNDg2eiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" /></button>
                        <button className=""><img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUzIDUzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MyA1MzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiNFRkNFNEE7IiBkPSJNMjYuNSw5Yy04LjgzNywwLTE2LDcuMTY0LTE2LDE2YzAsNy4wODksNC42MTUsMTMuMDkxLDExLDE1LjE5MlY1MGgydjNoNnYtM2gydi05LjgwOCAgYzYuMzg1LTIuMTAxLDExLTguMTAzLDExLTE1LjE5MkM0Mi41LDE2LjE2NCwzNS4zMzcsOSwyNi41LDl6Ii8+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6I0VGQ0U0QTsiIGQ9Ik0yNi41LDBjLTAuNTUzLDAtMSwwLjQ0Ny0xLDF2NGMwLDAuNTUzLDAuNDQ3LDEsMSwxczEtMC40NDcsMS0xVjFDMjcuNSwwLjQ0NywyNy4wNTMsMCwyNi41LDB6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRUZDRTRBOyIgZD0iTTUwLjUsMjRoLTRjLTAuNTUzLDAtMSwwLjQ0Ny0xLDFzMC40NDcsMSwxLDFoNGMwLjU1MywwLDEtMC40NDcsMS0xUzUxLjA1MywyNCw1MC41LDI0eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0VGQ0U0QTsiIGQ9Ik02LjUsMjRoLTRjLTAuNTUzLDAtMSwwLjQ0Ny0xLDFzMC40NDcsMSwxLDFoNGMwLjU1MywwLDEtMC40NDcsMS0xUzcuMDUzLDI0LDYuNSwyNHoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNFRkNFNEE7IiBkPSJNNDIuNzY0LDcuMzIybC0yLjgyOCwyLjgyOGMtMC4zOTEsMC4zOTEtMC4zOTEsMS4wMjMsMCwxLjQxNGMwLjE5NSwwLjE5NSwwLjQ1MSwwLjI5MywwLjcwNywwLjI5MyAgIHMwLjUxMi0wLjA5OCwwLjcwNy0wLjI5M2wyLjgyOC0yLjgyOGMwLjM5MS0wLjM5MSwwLjM5MS0xLjAyMywwLTEuNDE0UzQzLjE1NCw2LjkzMiw0Mi43NjQsNy4zMjJ6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRUZDRTRBOyIgZD0iTTExLjY1LDM4LjQzNmwtMi44MjgsMi44MjhjLTAuMzkxLDAuMzkxLTAuMzkxLDEuMDIzLDAsMS40MTRjMC4xOTUsMC4xOTUsMC40NTEsMC4yOTMsMC43MDcsMC4yOTMgICBzMC41MTItMC4wOTgsMC43MDctMC4yOTNsMi44MjgtMi44MjhjMC4zOTEtMC4zOTEsMC4zOTEtMS4wMjMsMC0xLjQxNFMxMi4wNDEsMzguMDQ1LDExLjY1LDM4LjQzNnoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNFRkNFNEE7IiBkPSJNNDEuMzUsMzguNDM2Yy0wLjM5MS0wLjM5MS0xLjAyMy0wLjM5MS0xLjQxNCwwcy0wLjM5MSwxLjAyMywwLDEuNDE0bDIuODI4LDIuODI4ICAgYzAuMTk1LDAuMTk1LDAuNDUxLDAuMjkzLDAuNzA3LDAuMjkzczAuNTEyLTAuMDk4LDAuNzA3LTAuMjkzYzAuMzkxLTAuMzkxLDAuMzkxLTEuMDIzLDAtMS40MTRMNDEuMzUsMzguNDM2eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0VGQ0U0QTsiIGQ9Ik0xMC4yMzYsNy4zMjJjLTAuMzkxLTAuMzkxLTEuMDIzLTAuMzkxLTEuNDE0LDBzLTAuMzkxLDEuMDIzLDAsMS40MTRsMi44MjgsMi44MjggICBjMC4xOTUsMC4xOTUsMC40NTEsMC4yOTMsMC43MDcsMC4yOTNzMC41MTItMC4wOTgsMC43MDctMC4yOTNjMC4zOTEtMC4zOTEsMC4zOTEtMS4wMjMsMC0xLjQxNEwxMC4yMzYsNy4zMjJ6Ii8+CjwvZz4KPHBhdGggc3R5bGU9ImZpbGw6I0Y3RTZBMTsiIGQ9Ik0xNS41LDI2Yy0wLjU1MywwLTEtMC40NDctMS0xYzAtNi42MTcsNS4zODMtMTIsMTItMTJjMC41NTMsMCwxLDAuNDQ3LDEsMXMtMC40NDcsMS0xLDEgIGMtNS41MTQsMC0xMCw0LjQ4Ni0xMCwxMEMxNi41LDI1LjU1MywxNi4wNTMsMjYsMTUuNSwyNnoiLz4KPHBvbHlnb24gc3R5bGU9ImZpbGw6IzU1NjA4MDsiIHBvaW50cz0iMjEuNSw0MyAyMS41LDUwIDIzLjUsNTAgMjMuNSw1MyAyOS41LDUzIDI5LjUsNTAgMzEuNSw1MCAzMS41LDQzICIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" /></button> */}
                    </div>
                </div>
            </div>
        )
    }
}

Match.propTypes = {}
export default Match