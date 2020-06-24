import React, {Component} from "react";
import axios from 'axios'
import Footer from "../Navigation/Footer"
import kn from '../../assests/attachments/k nearest Neighbours.png'

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
        axios.post('/knn', data)
            .then(response => {
                this.setState({
                    result: response.data,
                    error: false
                })
            })
            .catch(err => {
                this.setState({
                    error: true,
                    result: null
                })
            })
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
        // axios.get("/knn").then(
        //     response => {
        //         console.log(response)
        //     }
        // ).catch(err => {
        //     console.log(err)
        // })
    }


    render() {
        let prediction = null;
        if (this.state.result) {
            let classofflower = null;
            if(this.state.result.result === 0){
                classofflower = "Setosa";
            }
            if(this.state.result.result === 1){
                classofflower = "Versicolor";
            }
            if(this.state.result.result === 2){
                classofflower = "Virgincia";
            }
            prediction = (
                <div>
                    <div className="ui section divider"></div>
                    <h3><strong>Iris flower belong to
                        : {classofflower} class</strong></h3>
                </div>)
        }
        if (this.state.error === true) {
            prediction = (
                <div>
                    <div className="ui section divider"></div>
                    <h3 style={{color: "red"}}><strong>There is some error please try again </strong></h3>
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
            marginBottom:"5rem"

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
                                <img src = {kn}/>
                            </div>
                            <div className="content">
                                <a className="header">K Nearest Neighbors</a>
                                <div className="meta">Machine Learning Algorithm</div>
                                <div className="description">
                                    K-Nearest Neighbors (KNN) is one of the simplest algorithms used in Machine Learning for regression and classification problem. KNN algorithms use data and classify new data points based on similarity measures (e.g. distance function). Classification is done by a majority vote to its neighbors

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="ui container left aligned" style={style}>
                    <h1 className={"centered"}>K-nearest neighbors </h1>
                    <h3 className={"centered"}>Predict Class of Iris Flower </h3>
                    <div className="ui section divider"></div>
                    <form className="ui form" onSubmit={this.result} id={"form"}>
                        <div className="field">
                            <label style={{color: "white"}}>Sepal Length</label>
                            <input type="number"
                                   name="sepallength" min={this.state.min.sepallength}
                                   onChange={this.slchangeHandler}
                                   max={this.state.max.sepallength}
                                   placeholder="Sepal length(cm) - 4.3cm to 7.9cm "
                                   required
                                   step={.1}/>
                        </div>
                        <div className="field">
                            <label style={{color: "white"}}>Sepal width</label>
                            <input type="number"
                                   name="sepalwidth" min={this.state.min.sepalwidth}
                                   onChange={this.swchangeHandler}
                                   max={this.state.max.sepallength}
                                   placeholder="Sepal width(cm) - 2cm to 4.4cm "
                                   required
                                   step={.1}/>
                        </div>
                        <div className="field">
                            <label style={{color: "white"}}>Petal Length</label>
                            <input type="number"
                                   name="petallength" min={this.state.min.petallength}
                                   onChange={this.plchangeHandler}
                                   max={this.state.max.sepallength}
                                   placeholder="Petal length(cm) - 1cm to 6.9cm "
                                   required
                                   step={.1}/>
                        </div>
                        <div className="field">
                            <label style={{color: "white"}}>Petal Width</label>
                            <input type="number"
                                   name="petalwidth" min={this.state.min.petalwidth}
                                   onChange={this.pwchangeHandler}
                                   max={this.state.max.petalwidth}
                                   placeholder="Petal width(cm) - .1cm to 2.5cm "
                                   required
                                   step={.1}/>
                        </div>
                        <button className="ui inverted basic button" type="submit">Predict</button>
                    </form>
                    {prediction}
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default knn
