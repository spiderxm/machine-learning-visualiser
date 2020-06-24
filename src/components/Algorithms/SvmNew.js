import React, {Component} from "react";
import axios from 'axios'
import Footer from "../Navigation/Footer"
import svm from "../../assests/attachments/SVM.png";

class SvmNew extends Component {
    state = {
        result: null,
        showresult: false,
        Gender: 1,
        error: null,
        EstimatedSalary: null,

        min: {
            Gender: 0,
            Age: 18,
            EstimatedSalary: 15000,
        },

        max: {
            Gender: 1,
            Age: 60,
            EstimatedSalary: 150000,
        }
    }


    onchange = (event, name) => {
        const variable = event.target.value
        this.setState({name: variable})
    }

    result = (event) => {
        event.preventDefault()
        const data = {
            Gender: parseInt(this.state.Gender),
            Age: parseInt(this.state.Age),
            EstimatedSalary: parseInt(this.state.EstimatedSalary),
        }
        axios.post('/svm', data)
            .then(response => {
                this.setState({
                    result: response.data,
                    showresult: true
                })
            }).catch(err => {
            this.setState({
                result: null,
                showresult: false
            })
        })
    }
    AgechangeHandler = (event) => {
        this.setState({Age: event.target.value})
    }
    EstimatedSalarychangeHandler = (event) => {
        this.setState({EstimatedSalary: event.target.value})
    }
    Genderchange = (event) => {
        if (event.target.value === "Male") {
            this.setState({Gender: 1})
        }
        if (event.target.value === "Female") {
            this.setState({Gender: 0})
        }
    }


    render() {
        let probability = null;
        let prediction = null;
        if (this.state.result) {
            if (this.state.result.result === 0) {
                prediction = "No";
            }
            if (this.state.result.result === 0) {
                prediction = "Yes";
            }
            probability = (
                <div>
                    <div className="ui section divider"></div>
                    <h3><strong>Prediction : {prediction}</strong>
                    </h3>
                </div>
            )
        }
        const style = {
            border: "1px solid grey",
            borderRadius: "20px",
            padding: "2rem",
            marginTop: "10vh",
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
                                <img src={svm}/>
                            </div>
                            <div className="content">
                                <h1 className="header">Support Vector Machine</h1>
                                <div className="meta">Machine Learning Algorithm</div>
                                <div className="description">
                                    SVM is a supervised machine learning algorithm which can be used for classification
                                    or regression problems. It uses a technique called the kernel trick to transform
                                    your data and then based on these transformations it finds an optimal boundary
                                    between the possible outputs.
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="ui container left aligned" style={style}>
                    <h1 className={"centered"}>Support Vector Machine</h1>
                    <h3>Predict whether someone will get affected by advertisement or not</h3>
                    <div className="ui section divider"></div>
                    <form className="ui form" onSubmit={this.result} id={"form"}>
                        <div className="field">
                            <label style={{color: "white"}}>Enter Your Age</label>
                            <input type="number" name="Age" min={this.state.min.Age}
                                   onChange={this.AgechangeHandler}
                                   max={this.state.max.Age} required placeholder="Age"/>
                        </div>
                        <div className="field">
                            <label style={{color: "white"}}>Enter Your Salary</label>
                            <input type="number" name="EstimatedSalary" min={this.state.min.EstimatedSalary}
                                   onChange={this.EstimatedSalarychangeHandler}
                                   max={this.state.max.EstimatedSalary} required placeholder="Estimated Salary"/>
                        </div>
                        <div className={"field"}>
                            <label style={{color: "white"}} htmlFor={"gender"}>Gender</label>
                            <select id={"gender"} name={"cars"} onChange={this.Genderchange}>
                                <option value={"Male"}>Male</option>
                                <option value={"Female"}>Female</option>
                            </select>
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

export default SvmNew
