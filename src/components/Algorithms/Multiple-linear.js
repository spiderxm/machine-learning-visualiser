import React, {Component} from "react";
import axios from 'axios'
import {Button} from "semantic-ui-react";

class multipleLinear extends Component {
    state = {
        grescore: 290.0,
        toeflscore: 92.0,
        universityrating: 1,
        sop: 1,
        lor: 1,
        cgpa: 6.8,
        result: null,
        showresult: null,
        error: null
    }

    onchange = (event, name) => {
        const variable = event.target.value
        this.setState({name: variable})
    }

    result = () => {
        const data = {
            // grescore: parseInt(this.state.grescore),
            // toeflscore: parseInt(this.state.toeflscore),
            // universityrating: parseInt(this.state.universityrating),
            // sop: parseFloat(this.state.sop),
            // lor: parseFloat(this.state.lor),
            // cgpa: parseFloat(this.state.cgpa),
            // research: parseInt(1)
            "grescore": 290,
            "toeflscore": 2,
            "universityrating": 1,
            "sop": 1,
            "lor": 1,
            "cgpa": 6.8,
            "research": 1

        }
        console.log(data)
        axios.post('/multiplelinearregression', data)
            .then(response => {
                console.log(response)
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

    render() {
        const style = {
            border: "1px solid grey",
            borderRadius: "20px",
            padding: "2rem",
            marginTop: "1rem"
        }
        return (
            <React.Fragment>
                <div className="ui container left aligned" style={style}>
                    <h1 className={"centered"}>Multiple Linear Regression</h1>
                    <form className="ui form">
                        <div className="field">
                            <label>Gre score</label>
                            <input type="number" name="grescore" required placeholder="Grescore 290 - 340"/>
                        </div>
                        <div className="field">
                            <label>Toefl Score</label>
                            <input type="number" name="toeflscore" placeholder="Toefl-Score" required/>
                        </div>
                        <div className="field">
                            <label>University Rating</label>
                            <input type="number" name="grescore" required placeholder="university rating" required/>
                        </div>
                        <div className="field">
                            <label>sop</label>
                            <input type="number" name="grescore" required placeholder="sop" required/>
                        </div>
                        <div className="field">
                            <label>lor</label>
                            <input type="number" name="toeflscore" placeholder="lor" required/>
                        </div>
                        <div className="field">
                            <label>Cgpa</label>
                            <input type="number" name="toeflscore" placeholder="cgpa" required/>
                        </div>
                        <div className="ui segment">
                            <div className="field">
                                <div className="ui toggle checkbox">
                                    <input type="checkbox" name="gift" tabIndex="0" className="hidden"/>
                                    <label>Do not include a receipt in the package</label>
                                </div>
                            </div>
                        </div>
                        <button className="ui button" type="submit">Submit</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}


export default multipleLinear