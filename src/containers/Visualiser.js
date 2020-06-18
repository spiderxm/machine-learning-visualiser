import React, {Component} from "react";
import machineLearningLogo from "../assests/machinelearninglogo.svg"

class Visualiser extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Ml algo visualiser</h1>
                <img  src={machineLearningLogo} alt={"machine learning logo"}/>
            </React.Fragment>
        )
    }
}


export default Visualiser