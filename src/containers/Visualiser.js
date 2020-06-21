import React, {Component} from "react";
import Home from "../components/Home/Home"
import Linearregression from "../components/Algorithms/Linear-regression";
import Multiplelinear from "../components/Algorithms/Multiple-linear"
import Knn from "../components/Algorithms/Knn";
class Visualiser extends Component {
    render() {
        return (
            <React.Fragment>
                {/*<Linearregression />*/}
                {/*<Multiplelinear />*/}
                <Knn />
            </React.Fragment>
        )
    }
}


export default Visualiser