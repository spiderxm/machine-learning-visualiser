import React, {Component} from "react";
import Home from "../components/Home/Home"
import Linearregression from "../components/Algorithms/Linear-regression";
import Multiplelinear from "../components/Algorithms/Multiple-linear"
import Knn from "../components/Algorithms/Knn";
import DecisionTree from "../components/Algorithms/Decision Tree";
class Visualiser extends Component {
    render() {
        return (
            <React.Fragment>
                {/*<Linearregression />*/}
                {/*<Multiplelinear />*/}
                {/*<Knn />*/}
                <DecisionTree />
            </React.Fragment>
        )
    }
}


export default Visualiser