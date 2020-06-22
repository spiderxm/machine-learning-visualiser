import React, {Component} from "react";
import axios from 'axios'


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
                showresult: false
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
        if (this.state.result) {
            probability = (
                <div>
                    <div className="ui section divider"></div>
                    <h3><strong>You Will Pass or Fail : {this.state.result.result}</strong></h3>
                </div>
            )
        }
        const style = {
            border: "1px solid grey",
            borderRadius: "20px",
            padding: "2rem",
            marginTop: "10vh",
            boxShadow: "0px 2px 11px 6px rgba(0,0,0,.3)"
        }
        return (
            <React.Fragment>
                <div className="ui container left aligned" style={style}>
                    <h1 className={"centered"}>LOGISTIC REGRESSION</h1>
                    <div className="ui section divider"></div>
                    <form className="ui form" onSubmit={this.result} id={"form"}>
                        <div className="field">
                            <label>Daily Self Study Hours</label>
                            <input type="number" name="Self_Study_Daily" min={this.state.min.Self_Study_Daily}
                                   onChange={this.Self_Study_DailychangeHandler}
                                   max={this.state.max.Self_Study_Daily} required placeholder="Self-Study-Hours"/>
                        </div>
                        <div className="field">
                            <label>Monthly Tution Hours</label>
                            <input type="number" name="Tution_Monthly" min={this.state.min.Tution_Monthly}
                                   onChange={this.Tution_MonthlychangeHandler}
                                   max={this.state.max.Tution_Monthly} required placeholder="Tution_Monthly"/>
                        </div>

                        <button className="ui button" type="submit">Submit</button>
                    </form>
                    {probability}
                    {/*{}*/}
                </div>
            </React.Fragment>
        )
    }
}

export default LogisticRegression

