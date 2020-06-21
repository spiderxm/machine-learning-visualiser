import React, {Component} from "react";
import axios from 'axios'

class knn extends Component {
    state = {
        sl: null,
        sw: null,
        pw: null,
        pl: null,
        min: {
            petallength: 1,
            petalwidth: 0.1,
            sepallength: 4.3,
            sepalwidth: 2
        },
        max: {
            petallength: 6.9,
            petalwidth: 2.5,
            sepallength: 7.9,
            sepalwidth: 4.4
        },
        result: null,
        error: false
    }
    result = (event) => {
        event.preventDefault();
        const data = {
            sl: parseFloat(this.state.sl),
            sw: parseFloat(this.state.sw),
            pl: parseFloat(this.state.pl),
            pw: parseFloat(this.state.pw)
        }
        console.log(data)
        axios.post('/knn', data)
            .then(response => {
                console.log(response.data)
                this.setState({result: response.data.result})
            })
            .catch(err => console.log(err))
    }
    slchangeHandler = (event) => {
        this.setState({sl: event.target.value})
    }
    swchangeHandler = (event) => {
        this.setState({sw: event.target.value})
    }
    plchangeHandler = (event) => {
        this.setState({pl: event.target.value})
    }
    pwchangeHandler = (event) => {
        this.setState({pw: event.target.value})
    }

    componentDidMount() {
        axios.get("/knn").then(
            response => {
                console.log(response)
            }
        ).catch(err => {
            console.log(err)
        })
    }


    render() {
        let prediction = null;
        if (this.state.result) {
            prediction = (
                <div>
                    <div className="ui section divider"></div>
                    <h3><strong>Class for dimensions provided by you : {this.state.result}</strong></h3>
                </div>)
        }
        const style = {
            border: "1px solid grey",
            borderRadius: "20px",
            padding: "1rem",
            marginTop: "4rem"
        }
        return (
            <React.Fragment>
                <div className="ui container left aligned" style={style}>
                    <h1 className={"centered"}>K-nearest neighbors </h1>
                    <div className="ui section divider"></div>
                    <form className="ui form" onSubmit={this.result} id={"form"}>
                        <div className="field">
                            <label>Sepal Length</label>
                            <input type="number"
                                   name="sepallength" min={this.state.min.sepallength}
                                   onChange={this.slchangeHandler}
                                   max={this.state.max.sepallength}
                                   placeholder="Sepal length(cm) - 4.3cm to 7.9cm "
                                   required
                                   step={.1}/>
                        </div>
                        <div className="field">
                            <label>Sepal width</label>
                            <input type="number"
                                   name="sepalwidth" min={this.state.min.sepalwidth}
                                   onChange={this.swchangeHandler}
                                   max={this.state.max.sepallength}
                                   placeholder="Sepal width(cm) - 2cm to 4.4cm "
                                   required
                                   step={.1}/>
                        </div>
                        <div className="field">
                            <label>Petal Length</label>
                            <input type="number"
                                   name="petallength" min={this.state.min.petallength}
                                   onChange={this.plchangeHandler}
                                   max={this.state.max.sepallength}
                                   placeholder="Petal length(cm) - 1cm to 6.9cm "
                                   required
                                   step={.1}/>
                        </div>
                        <div className="field">
                            <label>Petal Width</label>
                            <input type="number"
                                   name="petalwidth" min={this.state.min.petalwidth}
                                   onChange={this.pwchangeHandler}
                                   max={this.state.max.petalwidth}
                                   placeholder="Petal width(cm) - .1cm to 2.5cm "
                                   required
                                   step={.1}/>
                        </div>
                        <button className="ui button" type="submit">Submit</button>
                    </form>
                    {prediction}
                </div>

            </React.Fragment>
        )
    }
}

export default knn
