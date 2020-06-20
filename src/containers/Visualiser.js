import React, {Component} from "react";
import {Button, Image} from "semantic-ui-react";
import Home from "../components/Home/Home"
import Linearregression from "../components/Algorithms/Linear-regression";
class Visualiser extends Component {
    render() {
        return (
            <React.Fragment>
                <Home/>
                <Linearregression />
            </React.Fragment>
        )
    }
}


export default Visualiser