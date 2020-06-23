import React, {Component} from "react";
import axios from 'axios'
import DT from '../../assests/attachments/DecisionTree.png'

class DecisionTree extends Component {
    state = {
        max: {
            Age: 81,
            BMI: 67.1,
            BloodPressure: 110,
            DiabetesPedigreeFunction: 2.42,
            Glucose: 198,
            Insulin: 846,
            Pregnancies: 17,
            SkinThickness: 63
        },
        min: {
            Age: 21,
            BMI: 18.2,
            BloodPressure: 24,
            DiabetesPedigreeFunction: 0.085,
            Glucose: 56,
            Insulin: 14,
            Pregnancies: 0,
            SkinThickness: 7
        },
        Age: null,
        BMI: null,
        BloodPressure: null,
        DiabetesPedigreeFunction: null,
        Glucose: null,
        Insulin: null,
        Pregnancies: null,
        SkinThickness: null,
        result: null,
        error: false
    }
    agechangeHandler = (event) => {
        this.setState({Age: event.target.value})
    }
    bmichangeHandler = (event) => {
        this.setState({BMI: event.target.value})
    }
    bloodPressurechangeHandler = (event) => {
        this.setState({BloodPressure: event.target.value})
    }
    DiabetesPedigreeFunctionchangeHandler = (event) => {
        this.setState({DiabetesPedigreeFunction: event.target.value})
    }
    glucosechangeHandler = (event) => {
        this.setState({Glucose: event.target.value})
    }
    insulinchangeHandler = (event) => {
        this.setState({Insulin: event.target.value})
    }
    pregnancieschangeHandler = (event) => {
        this.setState({Pregnancies: event.target.value})
    }
    skinthicknesschangeHandler = (event) => {
        this.setState({SkinThickness: event.target.value})
    }

    componentDidMount() {
        axios.get('/decisiontree')
            .then(response => {
                console.log(response)
            }).catch(err => {
            console.log(err)
        })
    }

    result = (event) => {
        event.preventDefault();
        const data = {
            Age: parseFloat(this.state.Age),
            BMI: parseFloat(this.state.BMI),
            BloodPressure: parseFloat(this.state.BloodPressure),
            DiabetesPedigreeFunction: parseFloat(this.state.DiabetesPedigreeFunction),
            Glucose: parseFloat(this.state.Glucose),
            Insulin: parseFloat(this.state.Insulin),
            Pregnancies: parseFloat(this.state.Pregnancies),
            SkinThickness: parseFloat(this.state.SkinThickness)
        }
        axios.post('/decisiontree', data)
            .then(response => {
                console.log(response)
                this.setState({result: response.data})
                this.setState({error: false})
            })
            .catch(error => {
                console.log(error)
                this.setState({error: true})
            })
    }

    render() {
        let prediction = null;
        if (this.state.result) {
            prediction = (
                <div>
                    <div className="ui section divider"></div>
                    <h3 style={{color: "blue"}}>
                        <strong>Probability of your admission is : {this.state.result.result}</strong>
                    </h3>
                </div>
            );
        }
        if (this.state.error) {
            prediction = (
                <div>
                    <h3 style={{color: "red"}}>
                        <strong>There is some error please try again</strong>
                    </h3>
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
                    <div className="ui items">
                        <div className="item">
                            <div className="ui tiny image">
                                <img src = {DT}/>
                            </div>
                            <div className="content">
                                <a className="header">Decision Tree</a>
                                <div className="meta">Machine Learning Algorithm</div>
                                <div className="description">
                                    Decision tree builds regression or classification models in the form of a tree structure. It breaks down a dataset into smaller and smaller subsets while at the same time an associated decision tree is incrementally developed. The final result is a tree with decision nodes and leaf nodes.

                                </div>

                            </div>
                        </div>

                    </div>
                    <h1 className={"centered"}>Diabetic Predictor</h1>

                    <div className="ui section divider"></div>
                    <form className="ui form" onSubmit={this.result} id={"form"}>
                        <div className="field">
                            <label>Age</label>
                            <input type="number"
                                   name="age" min={this.state.min.Age}
                                   onChange={this.agechangeHandler}
                                   max={this.state.max.Age}
                                   placeholder="Age"
                                   required
                                   step={1}/>
                        </div>
                        <div className="field">
                            <label>BMI</label>
                            <input type="number"
                                   name="bmi"
                                   min={this.state.min.BMI}
                                   onChange={this.bmichangeHandler}
                                   max={this.state.max.BMI}
                                   placeholder="Bmi"
                                   required
                                   step={.1}/>
                        </div>
                        <div className="field">
                            <label>Blood Pressure</label>
                            <input type="number"
                                   name="bloodpressure"
                                   min={this.state.min.BloodPressure}
                                   onChange={this.bloodPressurechangeHandler}
                                   max={this.state.max.BloodPressure}
                                   placeholder="Blood Pressure"
                                   required
                                   step={1}/>
                        </div>
                        <div className="field">
                            <label>Skin Thickness</label>
                            <input type="number"
                                   name="skin thickness"
                                   min={this.state.min.SkinThickness}
                                   onChange={this.skinthicknesschangeHandler}
                                   max={this.state.max.SkinThickness}
                                   placeholder="Skin Thickness (mm)"
                                   required
                                   step={1}/>
                        </div>
                        <div className="field">
                            <label>Insulin</label>
                            <input type="number"
                                   name="insulin"
                                   min={this.state.min.Insulin}
                                   onChange={this.insulinchangeHandler}
                                   max={this.state.max.Insulin}
                                   placeholder="Insulin"
                                   required
                                   step={1}/>
                        </div>
                        <div className="field">
                            <label>Diabetes Pedigree Function</label>
                            <input type="number"
                                   name="Diabetes Pedigree Function"
                                   min={this.state.min.DiabetesPedigreeFunction}
                                   onChange={this.DiabetesPedigreeFunctionchangeHandler}
                                   max={this.state.max.DiabetesPedigreeFunction}
                                   placeholder="Diabetes Pedigree Function"
                                   required
                                   step={.001}/>
                        </div>
                        <div className="field">
                            <label>Glucose</label>
                            <input type="number"
                                   name="glucose"
                                   min={this.state.min.Glucose}
                                   onChange={this.glucosechangeHandler}
                                   max={this.state.max.Glucose}
                                   placeholder="Diabetes Pedigree Function"
                                   required
                                   step={1}/>
                        </div>
                        <div className="field">
                            <label>Pregnancies</label>
                            <input type="number"
                                   name="pregnancies"
                                   min={this.state.min.Pregnancies}
                                   onChange={this.pregnancieschangeHandler}
                                   max={this.state.max.Pregnancies}
                                   placeholder="Pregnancies"
                                   required
                                   step={1}/>
                        </div>
                        <button className="ui button" type="submit">Submit</button>
                    </form>
                    {prediction}
                </div>
            </React.Fragment>
        );
    }
}


export default DecisionTree