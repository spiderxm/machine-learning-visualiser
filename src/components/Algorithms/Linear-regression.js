import React, {Component} from "react";
import axios from 'axios'
import Footer from "../Navigation/Footer"
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
            this.setState({result: null, showresult: false})
        }
    }


    render() {
        const style = {
            border: "1px solid grey",
            borderRadius: "20px",
            padding: "1rem",
            marginTop: "5vh",
            boxShadow: "0px 2px 11px 6px rgba(0,0,0,.3)",
            backgroundColor: "rgba(0,0,0,.85)",
            color: "white",
            marginBottom: "5rem"
        }
        const style1 = {
            border: "1px solid grey",
            borderRadius: "20px",
            padding: "1rem",
            marginTop: "10vh",
            boxShadow: "0px 2px 11px 6px rgba(0,0,0,.3)",
        }
        var prediction = null;
        if (this.state.showresult && !this.state.error) {
            prediction = (
                <React.Fragment>
                    <div>
                        <div className="ui section divider"></div>
                        <h3><strong>Salary Predicted by Linear regression model is : ${this.state.result.result.toFixed(2)} </strong></h3>
                    </div>
                </React.Fragment>);
        }
        if (this.state.error) {
            prediction = (
                <React.Fragment>
                    <h3>
                        There is some error please try again later
                    </h3>
                </React.Fragment>
            )
        }
        return (
            <React.Fragment>
                <div className="ui container left aligned" style={style1}>
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
                                    considered to be an explanatory variable (e.g. your experience), and the other is
                                    considered to be a dependent variable (e.g. your salary).
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui container left aligned" style={style}>
                    <h1 className={"centered"}>Linear Regression</h1>
                    <h3>Predict your salary</h3>
                    <div className="ui section divider" style={{color: "white"}}></div>
                    <form className="ui form" onSubmit={this.result}>
                        <div className="field">
                            <label style={{color: "white"}}>Experience</label>
                            <input type="number" min="0" max = "60" onChange={this.onchange} placeholder={"Experience (in years)"}
                                   required step={".1"}/>
                        </div>
                        <button type={"submit"} className="ui inverted basic button">Predict</button>
                    </form>
                    {/*<div style={{margin: "10px 0px"}}>*/}
                    {/*</div>*/}
                    <div>
                        {prediction}
                        {this.state.error}
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default linearregression;