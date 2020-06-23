import React, {Component} from "react";
import axios from 'axios'
import {Button} from "semantic-ui-react";
import mlr from '../../assests/attachments/multiple linear regression.png'

class multipleLinear extends Component {
    state = {
        grescore: null,
        toeflscore: null,
        universityrating: null,
        sop: null,
        lor: null,
        cgpa: null,
        research: 0,
        result: null,
        showresult: null,
        error: null,
        min: {
            cgpa: 6.8,
            grescore: 290,
            lor: 1,
            sop: 1,
            toeflscore: 92,
            universityrating: 1,
        },
        max: {
            cgpa: 9.92,
            grescore: 340,
            lor: 5,
            sop: 5,
            toeflscore: 120,
            universityrating: 5
        }
    }

    // componentDidMount() {
    //     axios.get("/multiplelinearregression").then(response => {
    //         console.log(response.data.data.min)
    //         console.log(response.data.data.max);
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // }

    onchange = (event, name) => {
        const variable = event.target.value
        this.setState({name: variable})
    }

    result = (event) => {
        event.preventDefault()
        const data = {
            grescore: parseInt(this.state.grescore),
            toeflscore: parseInt(this.state.toeflscore),
            universityrating: parseInt(this.state.universityrating),
            sop: parseFloat(this.state.sop),
            lor: parseFloat(this.state.lor),
            cgpa: parseFloat(this.state.cgpa),
            research: parseInt(this.state.research)

        }
        console.log(data)
        axios.post('/multiplelinearregression', data)
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
    grechangeHandler = (event) => {
        this.setState({grescore: event.target.value})
    }
    toeflchangeHandler = (event) => {
        this.setState({toeflscore: event.target.value})
    }
    sopchangeHandler = (event) => {
        this.setState({sop: event.target.value})
    }
    lorchangeHandler = (event) => {
        this.setState({lor: event.target.value})
    }
    universityrankingchangeHandler = (event) => {
        this.setState({universityrating: event.target.value})
    }
    researchchangeHandler = (event) => {
        const value = this.state.research
        if (value === 1) {
            this.setState({research: 0})
        } else {
            this.setState({research: 1})
        }

    }
    cgpachangeHandler = (event) => {
        this.setState({cgpa: event.target.value})
    }

    render() {
        let probability = null;
        if (this.state.result) {
            probability = (
                <div>
                    <div className="ui section divider"></div>
                    <h3><strong>Probability of your admission is : {this.state.result.result}</strong></h3>
                </div>
            )
        }
        const style = {
            border: "1px solid grey",
            borderRadius: "20px",
            padding: "1rem",
            marginTop: "10vh",
            boxShadow: "0px 2px 11px 6px rgba(0,0,0,.3)",
        }
        return (
            <React.Fragment>
                <div className="ui container left aligned" style={style}>

                    <div className="ui items">
                        <div className="item">
                            <div className="ui tiny image">
                                <img src = {mlr}/>
                            </div>
                            <div className="content">
                                <a className="header">Multiple Linear Regression</a>
                                <div className="meta">Machine Learning Algorithm</div>
                                <div className="description">
                                    Multiple linear regression (MLR), also known simply as multiple regression, is a statistical technique that uses several explanatory variables to predict the outcome of a response variable. The goal of multiple linear regression (MLR) is to model the linear relationship between the explanatory (independent) variables and response (dependent) variable.

                                </div>

                            </div>
                        </div>

                    </div>
                    <h1 className={"centered"}>University Acceptance Predictor</h1>
                    <div className="ui section divider"></div>
                    <form className="ui form" onSubmit={this.result} id={"form"}>
                        <div className="field">
                            <label>Gre score</label>
                            <input type="number" name="grescore" min={this.state.min.grescore}
                                   onChange={this.grechangeHandler}
                                   max={this.state.max.grescore} required placeholder="Grescore 290 - 340"/>
                        </div>
                        <div className="field">
                            <label>Toefl Score</label>
                            <input type="number" name="toeflscore" min={this.state.min.toeflscore}
                                   onChange={this.toeflchangeHandler}
                                   max={this.state.max.toeflscore} placeholder="Toefl-Score" required/>
                        </div>
                        <div className="field">
                            <label>University Rating</label>
                            <input type="number" name="university rating" required min={this.state.min.universityrating}
                                   onChange={this.universityrankingchangeHandler}
                                   max={this.state.max.universityrating} placeholder="university rating" required/>
                        </div>
                        <div className="field">
                            <label>Sop</label>
                            <input type="number" name="sop" required min={this.state.min.sop} max={this.state.max.sop}
                                   onChange={this.sopchangeHandler}
                                   placeholder="sop" required/>
                        </div>
                        <div className="field">
                            <label>Lor</label>
                            <input type="number" name="lor" min={this.state.min.lor} max={this.state.max.lor}
                                   onChange={this.lorchangeHandler}
                                   placeholder="lor" required/>
                        </div>
                        <div className="field">
                            <label>Cgpa</label>
                            <input type="number" min={this.state.min.cgpa} max={this.state.max.cgpa} name="cgpa" step={"any"}
                                   placeholder="cgpa" required onChange={this.cgpachangeHandler}/>
                        </div>
                        <div className="ui segment">
                            <div className="field">
                                <div className="ui toggle checkbox">
                                    <input type="checkbox" name="gift" tabIndex="0"
                                           onChange={this.researchchangeHandler}/>
                                    <label>Research</label>
                                </div>
                            </div>
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


export default multipleLinear