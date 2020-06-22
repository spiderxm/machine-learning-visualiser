import React, {Component} from "react";
import Home from "../components/Home/Home"
import Linearregression from "../components/Algorithms/Linear-regression";
import Multiplelinear from "../components/Algorithms/Multiple-linear"
import Knn from "../components/Algorithms/Knn";
import DecisionTree from "../components/Algorithms/Decision Tree";
import Machinelearninglogo from "../assests/attachments/machinelearning.png"
import LinearRegressionLogo from "../assests/attachments/linearregression.png"
import MultipleLinearRegressionLogo from "../assests/attachments/multiple linear regression.png"
import Knnlogo from "../assests/attachments/k nearest Neighbours.png"
import Svmlogo from "../assests/attachments/SVM.png"
import RandomForestLogo from "../assests/attachments/RandomForest.png"
import LogisticRegressionLogo from "../assests/attachments/logisticregression.png"
import Decisiontreelogo from "../assests/attachments/DecisionTree.png"
import {Button, Header, Icon, Image, Menu, Segment, Sidebar} from "semantic-ui-react";
import axios from 'axios'
import Imageupload from "../components/Imageupload"
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Signup"
import Signup from "../components/Auth/Signup";
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import firebase from "firebase";

class MenuBar extends Component {
    state = {
        visible: false,
        imageURL: '',
        firebaseID: null
    }

    toggleVisibility = () => this.setState({visible: !this.state.visible})
    handlePusher = () => {
        const {visible} = this.state;

        if (visible) this.setState({visible: false});
    };

    componentDid() {
        this.setState({firebaseId: firebase.auth().currentUser})
        console.log(this.state.firebaseID)
    }

    render() {
        const {visible} = this.state
        return (
            <div>
                <Sidebar.Pushable as={Segment}>
                    <Sidebar as={Menu}
                             animation='overlay'
                             width='thin'
                             visible={visible}
                             icon='labeled'
                             vertical
                             style={{backgroundColor: "grey"}}
                             inverted>
                        <Menu.Item>
                            <div >
                                <Image style={{height:"60px", width:"60px", padding:"auto", marginLeft:"auto", marginRight:"auto"}} circular src={"https://storage.cloud.google.com/mlalgovisualiser/cloud-engineering-1.png?authuser=1"} alt={"logo"}/>
                            </div>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to={"/linearregression"} onClick={() => this.setState({visible: false})}>
                                <div style={{margin: "5px"}}>
                                    <Image size={"mini"} src={LinearRegressionLogo} alt={"logo"}/>
                                </div>
                                Linear Regression
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to={"/multiplelinearregression"} onClick={() => this.setState({visible: false})}>
                                <div style={{margin: "5px"}}>
                                    <Image size={"mini"} src={MultipleLinearRegressionLogo} alt={"logo"}/>
                                </div>
                            </Link>
                            Multiple Linear Regression
                        </Menu.Item>
                        <Menu.Item>
                            <div style={{margin: "5px"}}>
                                <Image size={"mini"} src={LogisticRegressionLogo} alt={"logo"}/>
                            </div>
                            Logistic Regression
                        </Menu.Item>
                        <Menu.Item>
                            <div style={{margin: "5px"}}>
                                <Image size={"mini"} src={Svmlogo} alt={"logo"}/>
                            </div>
                            Support Vector Machine
                        </Menu.Item>
                        <Menu.Item>
                            <Link to={"/knn"} onClick={() => this.setState({visible: false})}>
                                <div style={{margin: "5px"}}>
                                    <Image size={"mini"} src={Knnlogo} alt={"logo"}/>
                                </div>
                                K Nearest Neighbours
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to={"/decisiontree"} onClick={() => this.setState({visible: false})}>
                                <div style={{margin: "5px"}}>
                                    <Image size={"mini"} src={Decisiontreelogo} alt={"logo"}/>
                                </div>
                                Decision Tree
                            </Link>

                        </Menu.Item>
                        <Menu.Item>
                            <div style={{margin: "5px"}}>
                                <Image size={"mini"} src={RandomForestLogo} alt={"logo"}/>
                            </div>
                            Random Forest Classifier
                        </Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher
                        style={{minHeight: "100vh"}}
                        dimmed={visible}
                        onClick={this.handlePusher}
                    >
                        <Menu fixed="top" inverted>
                            <Menu.Item style={{backgroundColor: "grey"}}>
                                <Image size="mini" src={Machinelearninglogo}/>
                            </Menu.Item>
                            <Menu.Item onClick={this.toggleVisibility}>
                                <Icon name="sidebar"/>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to={"/"}>
                                    ML <strong>Visualiser</strong>
                                </Link>
                            </Menu.Item>
                            <Menu.Menu position="right">
                                <Menu.Item>
                                    <Link to={"/login"}>
                                        Login
                                    </Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to={"/register"}>
                                        Signup
                                    </Link>
                                </Menu.Item>
                                <Menu.Item>
                                    Logout
                                </Menu.Item>
                            </Menu.Menu>
                        </Menu>
                        <Route path={"/linearregression"} exact render={() => (<Linearregression/>)}/>
                        <Route path={"/multiplelinearregression"} exact render={() => <Multiplelinear/>}/>
                        <Route path={"/knn"} exact render={() => <Knn/>}/>
                        <Route path={"/decisiontree"} exact render={() => <DecisionTree/>}/>
                        <Route path={"/login"} exact render={() => <Login/>}/>
                        <Route path={"/register"} exact render={() => <Register/>}/>
                        <Route path={"/"} exact render={() => <Home/>}/>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    }
}

export default MenuBar
// export default Visualiser