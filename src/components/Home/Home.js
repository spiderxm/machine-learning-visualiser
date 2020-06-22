import React from "react";
import AlgoCard from '../Algorithms/Algo-cards/Algo-card'

const home = (props) => {
    return (
        <React.Fragment>
            <br></br>
            <br></br>
            <h1>
                MultipleLinearregression
            </h1>
            <h1> Linear
                regression
            </h1>
            <h1>
                Logistic Regression
            </h1>
            <h1>
                knn
            </h1>
            <h1>
                svm
            </h1>
            <h1> Decision Tree</h1>
            <div className="ui card">
                <div className="image">
                    <img src="https://storage.cloud.google.com/mlalgovisualiser/7Y3FeE6AohYZMXw2QPJAazjmNh13.png?authuser=1" />
                </div>
                <div className="content">
                    <a className="header">Hello user</a>
                </div>
            </div>
        </React.Fragment>);
}
export default home