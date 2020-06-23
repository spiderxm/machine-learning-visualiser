import React, {Component} from "react";
import axios from 'axios'
import Footer from "../Navigation/Footer"
import lr from "../../assests/attachments/logisticregression.png";

class LogisticRegression extends Component {
    state = {
        result: null,
        showresult: false,
        Self_Study_Daily: null,
        error: null,
        Tution_Monthly: null,

        min: {
            Tution_Monthly: 20,
            Self_Study_Daily: 0,
        },


        max: {
            Tution_Monthly: 50,
            Self_Study_Daily: 10,

        }
    }

    result = (event) => {
        event.preventDefault()
        const data = {
            Self_Study_Daily: parseInt(this.state.Self_Study_Daily),
            Tution_Monthly: parseInt(this.state.Tution_Monthly),


        }
        console.log(data)
        axios.post('/logisticregression', data)
            .then(response => {
                console.log(response.data)
                this.setState({
                    result: response.data,
                    showresult: true
                })
            }).catch(err => {
            console.log(err);
            this.setState({
                result: null,
                showresult: false,
                error: true
            })
        })
    }
    Self_Study_DailychangeHandler = (event) => {
        this.setState({Self_Study_Daily: event.target.value})
    }
    Tution_MonthlychangeHandler = (event) => {
        this.setState({Tution_Monthly: event.target.value})
    }


    render() {
        let probability = null;
        let result = null;
        if (this.state.result) {
            if (this.state.result.result === 0) {
                result = "Fail"
            }
            if (this.state.result.result === 1) {
                result = "Pass"
            }
            probability = (
                <div>
                    <div className="ui section divider"></div>
                    <h3><strong>Prediction : {result}</strong></h3>
                </div>
            )
        }
        if (this.state.error) {
            probability = (
                <div>
                    <div className="ui section divider"></div>
                    <h3>
                        <strong>There is some error please try again</strong>
                    </h3>
                </div>
            )
        }
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
        return (
            <React.Fragment>
                <div className="ui container left aligned" style={style1}>
                    <div className="ui items">
                        <div className="item">
                            <div className="ui tiny image">
                                <img src={lr}/>
                            </div>
                            <div className="content">
                                <a className="header">Logistic Regression</a>
                                <div className="meta">Machine Learning Algorithm</div>
                                <div className="description">
                                    Logistic regression is a statistical model that in its basic form uses a logistic
                                    function to model a binary dependent variable, although many more complex extensions
                                    exist. In regression analysis, logistic regression (or logit regression) is
                                    estimating the parameters of a logistic model (a form of binary regression).
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui container left aligned" style={style}>
                    <h1 className={"centered"}>LOGISTIC REGRESSION</h1>
                    <h3>Predict whether pass or fail in exam</h3>
                    <div className="ui section divider"></div>
                    <form className="ui form" onSubmit={this.result} id={"form"}>
                        <div className="field">
                            <label style={{color: "white"}}>Weekly Self Study Hours</label>
                            <input type="number" name="Self_Study_Daily" min={this.state.min.Self_Study_Daily}
                                   onChange={this.Self_Study_DailychangeHandler}
                                   max={this.state.max.Self_Study_Daily} required placeholder="Self-Study-Hours-Weekly"/>
                        </div>
                        <div className="field">
                            <label style={{color: "white"}}>Weekly Tution Hours</label>
                            <input type="number" name="Tution_weekly" min={this.state.min.Tution_Monthly}
                                   onChange={this.Tution_MonthlychangeHandler}
                                   max={this.state.max.Tution_Monthly} required placeholder="Tution_Weekly"/>
                        </div>

                        <button className="ui button inverted basic" type="submit">Predict</button>
                    </form>
                    {probability}
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default LogisticRegression

