import React, {Component} from "react";
import axios from 'axios'
// import {Button} from "semantic-ui-react";

class RandomForest extends Component {
    state = {
        fixed_acidity: null,
        volatile_acidity: null,
        citric_acid: null,
        residual_sugar: null,
        chlorides: null,
        free_sulfur_dioxide: null,
        total_sulfur_dioxide: null,
        density: null,
        pH: null,
        sulphates: null,
        alcohol: null,
        result: null,
        showresult: null,
        error: null,
        min: {
            fixed_acidity: 4.6,
            volatile_acidity: 0.12,
            citric_acid: 0,
            residual_sugar: 0.9,
            chlorides: 0.012,
            free_sulfur_dioxide: 1,
            total_sulfur_dioxide: 6,
            density: 0.99007,
            pH: 2.74,
            sulphates: 0.33,
            alcohol: 8.4,
        },
        max: {
            fixed_acidity: 15.9,
            volatile_acidity: 1.58,
            citric_acid: 1,
            residual_sugar: 15.5,
            chlorides: 0.611,
            free_sulfur_dioxide: 72.,
            total_sulfur_dioxide: 289.,
            density: 1.00369,
            pH: 4.01,
            sulphates: 2,
            alcohol: 14.9,
        },
        step : {
                fixed_acidity: .1,
                volatile_acidity: 0.01,
                citric_acid: .1,
                residual_sugar: 0.1,
                chlorides: 0.001,
                free_sulfur_dioxide: 1,
                total_sulfur_dioxide: 1,
                density: 0.00001,
                pH: 0.01,
                sulphates: .01,
                alcohol: .1,
        }
    }



    onchange = (event, name) => {
        const variable = event.target.value
        this.setState({name: variable})
    }

    result = (event) => {
        event.preventDefault()
        const data = {
            fixed_acidity: parseFloat(this.state.fixed_acidity),
            volatile_acidity: parseFloat(this.state.volatile_acidity),
            citric_acid: parseFloat(this.state.citric_acid),
            residual_sugar: parseFloat(this.state.residual_sugar),
            chlorides: parseFloat(this.state.chlorides),
            free_sulfur_dioxide: parseFloat(this.state.free_sulfur_dioxide),
            total_sulfur_dioxide: parseFloat(this.state.total_sulfur_dioxide),
            density: parseFloat(this.state.density),
            pH: parseFloat(this.state.pH),
            sulphates: parseFloat(this.state.sulphates),
            alcohol: parseFloat(this.state.alcohol)
        }
        console.log(data)
        axios.post('/forest', data)
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
    fixed_aciditychangeHandler = (event) => {
        this.setState({fixed_acidity: event.target.value})
    }
    volatile_aciditychangeHandler = (event) => {
        this.setState({volatile_acidity: event.target.value})
    }
    citric_acidchangeHandler = (event) => {
        this.setState({citric_acid: event.target.value})
    }
    residual_sugarchangeHandler = (event) => {
        this.setState({residual_sugar: event.target.value})
    }
    chlorideschangeHandler = (event) => {
        this.setState({chlorides: event.target.value})
    }

    free_sulfur_dioxidechangeHandler = (event) => {
        this.setState({free_sulfur_dioxide: event.target.value})
    }

    total_sulfur_dioxidechangeHandler = (event) => {
        this.setState({total_sulfur_dioxide: event.target.value})
    }

    densitychangeHandler = (event) => {
        this.setState({density: event.target.value})
    }
    pHchangeHandler = (event) => {
        this.setState({pH: event.target.value})
    }

    alcoholchangeHandler = (event) => {
        this.setState({alcohol: event.target.value})
    }
    sulphateschangeHandler = (event) => {
        this.setState({sulphates: event.target.value})
    }
    render() {
        let probability = null;
        if (this.state.result) {
            probability = (
                <div>
                    <div className="ui section divider"></div>
                    <h3><strong>Wine Quality  is : {this.state.result.result}</strong></h3>
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
                    <h1 className={"centered"}>Random Forest</h1>
                    <div className="ui section divider"></div>
                    <form className="ui form" onSubmit={this.result} id={"form"}>
                        <div className="field">
                            <label>Fixed Acidity</label>
                            <input type="number"
                                   name="fixed_acidity"
                                   min={this.state.min.fixed_acidity}
                                   onChange={this.fixed_aciditychangeHandler}
                                   max={this.state.max.fixed_acidity}
                                   required
                                   step={this.state.step.fixed_acidity}
                                   placeholder="Fixed-Acidity"/>
                        </div>
                        <div className="field">
                            <label>Volatile Acid</label>
                            <input type="number" name="volatile_acidity" min={this.state.min.volatile_acidity}
                                   onChange={this.volatile_aciditychangeHandler}
                                   step={this.state.step.volatile_acidity}
                                   max={this.state.max.volatile_acidity} placeholder="Volatile Acid" required/>
                        </div>
                        <div className="field">
                            <label>Citric Acid</label>
                            <input type="number" name="citric_acid" required min={this.state.min.citric_acid}
                                   onChange={this.citric_acidchangeHandler}
                                   step={this.state.step.citric_acid}
                                   max={this.state.max.citric_acid} placeholder="Citric Acid" />
                        </div>
                        <div className="field">
                            <label>Residual Sugar</label>
                            <input type="number" name="residual_sugar"
                                   step={this.state.step.residual_sugar}
                                   required min={this.state.min.residual_sugar} max={this.state.max.residual_sugar}
                                   onChange={this.residual_sugarchangeHandler}
                                   placeholder="Residual Sugar" />
                        </div>
                        <div className="field">
                            <label>Chlorides</label>
                            <input type="number" name="chlorides"
                                   step={this.state.step.chlorides}
                                   min={this.state.min.chlorides} max={this.state.max.chlorides}
                                   onChange={this.chlorideschangeHandler}
                                   placeholder="chlorides" required/>
                        </div>
                        <div className="field">
                            <label>Free Sulphur Dioxide</label>
                            <input type="number" min={this.state.min.free_sulfur_dioxide}
                                   step={this.state.step.free_sulfur_dioxide}
                                   max={this.state.max.free_sulfur_dioxide} name="free_sulfur_dioxide"
                                   placeholder="Free Sulphur Dioxide" required onChange={this.free_sulfur_dioxidechangeHandler}/>
                        </div>


                        <div className="field">
                            <label>Total Sulphur Dioxide</label>
                            <input type="number" min={this.state.min.total_sulfur_dioxide}
                                   step={this.state.step.total_sulfur_dioxide}
                                   max={this.state.max.total_sulfur_dioxide} name="total_sulfur_dioxide"
                                   placeholder="Total Sulphur Dioxide" required onChange={this.total_sulfur_dioxidechangeHandler}/>
                        </div>

                        <div className="field">
                            <label>Density</label>
                            <input type="number" min={this.state.min.density}
                                   step={this.state.step.density}
                                   max={this.state.max.density} name="density"
                                   placeholder="Density" required onChange={this.densitychangeHandler}/>
                        </div>

                        <div className="field">
                            <label>pH Value</label>
                            <input type="number" min={this.state.min.pH}
                                   step={this.state.step.pH}
                                   max={this.state.max.pH} name="pH"
                                   placeholder="pH" required onChange={this.pHchangeHandler}/>
                        </div>

                        <div className="field">
                            <label>Alcohol Content</label>
                            <input type="number" min={this.state.min.alcohol}
                                   step={this.state.step.alcohol}
                                   max={this.state.max.alcohol} name="alcohol"
                                   placeholder="Alcohol Content" required onChange={this.alcoholchangeHandler}/>
                        </div>

                        <div className="field">
                            <label>Sulphates</label>
                            <input type="number" min={this.state.min.sulphates}
                                   step={this.state.step.sulphates}
                                   max={this.state.max.sulphates}
                                   name="alcohol"
                                   placeholder="Sulphates"
                                   required onChange={this.sulphateschangeHandler}/>
                        </div>

                        <button className="ui button" type="submit">Submit</button>
                    </form>
                    {probability}
                </div>
            </React.Fragment>
        )
    }
}


export default RandomForest