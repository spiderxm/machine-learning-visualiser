import React, {Component} from "react";
import {Button} from "semantic-ui-react";
import axios from 'axios'
import {Label, Input} from "semantic-ui-react";

class linearregression extends Component {
    state = {
        result: null,
        showresult: false,
        x: 0,
        error: null
    }

    onchange = (event) => {
        const x = event.target.value
        this.setState({x: x})
    }

    result = () => {
        const a = this.state.x
        const data = {
            x: parseInt(a)
        }
        axios.post("/linear-regression", data).then(response => {
            this.setState({result: response.data})
            this.setState({showresult: true})
        }).catch(err => {
            this.setState({errpr: "There is some error please try again"})
        })
    }


    render() {
        var prediction = null;
        if (this.state.showresult && !this.state.error) {
            prediction = <div>prediction for your case is : {this.state.result.result.toFixed(0)} dollars</div>;
        }
        return (
            <React.Fragment>
                <h1>Linear regression</h1>
                <Label>Enter no. of years of experience</Label>
                <Input onChange={this.onchange} placeholder={"No. of years"}/>
                <Button onClick={this.result}>Click to get result</Button>
                {prediction}
            </React.Fragment>
        );
    }
}

export default linearregression;