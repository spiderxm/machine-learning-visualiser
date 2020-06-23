import React, {Component} from "react";
import axios from 'axios'


class SvmNew extends Component {
    state = {
        result: null,
        showresult: false,
        Gender: 1,
        error: null,
        EstimatedSalary: null,
        
        min :{
            Gender: 0,
            Age: 18,
            EstimatedSalary: 15000,
        },

        max :{
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
        console.log(data)
        axios.post('/svm', data)
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
    AgechangeHandler = (event) => {
        this.setState({Age: event.target.value})
    }
    EstimatedSalarychangeHandler = (event) => {
        this.setState({EstimatedSalary: event.target.value})
    }
    GenderchangeHandler = (event) => {
        const value = this.state.Gender
        if (value === 1) {
            this.setState({research: 0})
        } else {
            this.setState({research: 1})
        }
    }
 

    render() {
        let probability = null;
        if (this.state.result) {
            probability = (
                <div>
                    <div className="ui section divider"></div>
                    <h3><strong>Would You Be Buying From an Advertisement or not : {this.state.result.result}</strong></h3>
                </div>
            )
        }
        const style = {
            border: "1px solid grey",
            borderRadius: "20px",
            padding: "1rem",
            marginTop: "20vh",
            boxShadow: "0px 2px 11px 6px rgba(0,0,0,.3)",
        }
        return (
            <React.Fragment>
                <div className="ui container left aligned" style={style}>
                    <h1 className={"centered"}>Support Vector Machine</h1>
                    <div className="ui section divider"></div>
                    <form className="ui form" onSubmit={this.result} id={"form"}>
                        <div className="field">
                            <label>Enter Your Age</label>
                            <input type="number" name="Age" min={this.state.min.Age}
                                   onChange={this.AgechangeHandler}
                                   max={this.state.max.Age} required placeholder="Age"/>
                        </div>
                        <div className="field">
                            <label>Enter Your Salary</label>
                            <input type="number" name="EstimatedSalary" min={this.state.min.EstimatedSalary}
                                   onChange={this.EstimatedSalarychangeHandler}
                                   max={this.state.max.EstimatedSalary} required placeholder="Estimated Salary" />
                        </div>

                        <div className="ui segment">
                            <div className="field">
                                <div className="ui toggle checkbox">
                                    <input type="checkbox" name="gift" tabIndex="0"
                                           onChange={this.GenderchangeHandler}/>
                                    <label>Gender</label>
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
export default SvmNew
