import React, {Component} from "react";
import {Button} from "semantic-ui-react";
import axios from 'axios'
import {Label, Input} from "semantic-ui-react";
import lr from '../../assests/attachments/linearregression.png'

class linearregression extends Component {
    state = {
        result: null,
        showresult: false,
        x: null,
        error: null
    }

    onchange = (event) => {
        const x = event.target.value
        this.setState({x: x})
    }

    result = (event) => {
        event.preventDefault();
        const a = this.state.x;
        const data = {
            x: parseInt(a)
        }
        if (a !== null && a >= 0) {
            axios.post("/linear-regression", data).then(response => {
                this.setState({result: response.data})
                this.setState({showresult: true})
                this.setState({error: null})
            })
        } else {
            this.setState({error: "Input is not valid it must be greater than or equal to zero"})
        }
    }


    render() {
        const style = {
            border: "1px solid grey",
            borderRadius: "20px",
            padding: "1rem",
            marginTop: "10vh",
            boxShadow: "0px 2px 11px 6px rgba(0,0,0,.3)"
        }
        var prediction = null;
        if (this.state.showresult && !this.state.error) {
            prediction = <div>prediction for your case is : {this.state.result.result.toFixed(0)} dollars</div>;
        }
        return (
            <React.Fragment>
                <div className="ui container left aligned" style={style}>
                    <div className="ui items">
                        <div className="item">
                            <div className="ui tiny image">
                                <img src = {lr}/>
                            </div>
                            <div className="content">
                                <a className="header">Linear Regression</a>
                                <div className="meta">Machine Learning Algorithm</div>
                                <div className="description">

                                    Linear regression attempts to model the relationship between two variables by
                                    fitting a linear equation (= a straight line) to the observed data. One variable is
                                    considered to be an explanatory variable (e.g. your income), and the other is
                                    considered to be a dependent variable (e.g. your expenses).
                                </div>

                            </div>
                        </div>

                    </div>

                    <h1 className={"centered"}>Salary Predictor</h1>
                    <div className="ui section divider"></div>
                    <form className="ui form" onSubmit={this.result}>
                        <div className="field">
                            <label>Enter no. of years of experience</label>
                            <input type="number" min="0" onChange={this.onchange} placeholder={"No. of years"}
                                   required/>
                        </div>
                        <button type={"submit"} className="ui button">Click to get result</button>
                    </form>
                    {/*<div style={{margin: "10px 0px"}}>*/}
                    {/*</div>*/}
                    <div>
                        {prediction}
                        {this.state.error}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default linearregression;