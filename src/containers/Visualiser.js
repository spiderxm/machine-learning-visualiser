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
import Svm from "../components/Algorithms/SvmNew"
import RandomForest from "../components/Algorithms/RandomForest";
import LogisticRegression from "../components/Algorithms/LogisticRegression";
import {Icon, Image, Menu, Segment, Sidebar} from "semantic-ui-react";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Signup"
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import firebase from "firebase";
import {Redirect} from 'react-router-dom'

class MenuBar extends Component {
    state = {
        visible: false,
        imageURL: '',
        redirect: false,
        firebaseID: null,
        email: null
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/login'/>
        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(userAuth => {
            this.setState({firebaseID: userAuth.uid, email: userAuth.email})
        })
    }

    toggleVisibility = () => this.setState({visible: !this.state.visible})
    handlePusher = () => {
        const {visible} = this.state;
        if (visible) this.setState({visible: false});
    };

    signout = () => {
        firebase.auth().signOut().then(response => {
            alert("You have logged out successfully");
            this.setState({redirect: true})
            window.location.reload();
        }).catch(err => {
            alert("You were not able to log out please try again");
        });

    }

    render() {
        const {visible} = this.state
        let menu = null;
        let userImage = null;

        if (this.state.firebaseID === null) {
            menu = (
                <React.Fragment>
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
                </React.Fragment>
            );
        }

        if (this.state.firebaseID) {
            menu = (
                <Menu.Item onClick={this.signout}>
                    Logout
                </Menu.Item>
            );
            userImage = (
                <Menu.Item>
                    <div>
                        <Image style={{
                            height: "60px",
                            width: "60px",
                            padding: "auto",
                            marginLeft: "auto",
                            marginRight: "auto"
                        }} circular
                               src={"https://storage.cloud.google.com/mlalgovisualiser/" + this.state.firebaseID + ".png"}
                               alt={"logo"}/>
                    </div>
                    {this.state.email}
                </Menu.Item>
            );
        }
        return (
            <div>
                {this.renderRedirect()}
                <Sidebar.Pushable as={Segment}>
                    <Sidebar as={Menu}
                             animation='overlay'
                             width='thin'
                             visible={visible}
                             icon='labeled'
                             vertical
                             style={{backgroundColor: "grey"}}
                             inverted>
                        {userImage}
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
                            <Link to={"/logisticregression"} onClick={() => this.setState({visible: false})}>
                                <div style={{margin: "5px"}}>
                                    <Image size={"mini"} src={LogisticRegressionLogo} alt={"logo"}/>
                                </div>
                                Logistic Regression
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link onClick={() => this.setState({visible: false})} to={"/svm"}>
                                <div style={{margin: "5px"}}>
                                    <Image size={"mini"} src={Svmlogo} alt={"logo"}/>
                                </div>
                                Support Vector Machine
                            </Link>
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
                            <Link to={"randomforest"} onClick={() => this.setState({visible: false})}>
                                <div style={{margin: "5px"}}>
                                    <Image size={"mini"} src={RandomForestLogo} alt={"logo"}/>
                                </div>
                                Random Forest Classifier
                            </Link>
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
                                {menu}
                            </Menu.Menu>
                        </Menu>
                        <Route path={"/linearregression"} exact render={() => (<Linearregression/>)}/>
                        <Route path={"/multiplelinearregression"} exact render={() => <Multiplelinear/>}/>
                        <Route path={"/knn"} exact render={() => <Knn/>}/>
                        <Route path={"/decisiontree"} exact render={() => <DecisionTree/>}/>
                        <Route path={"/login"} exact render={() => <Login/>}/>
                        <Route path={"/register"} exact render={() => <Register/>}/>
                        <Route path={"/"} exact render={() => <Home/>}/>
                        <Route path={"/svm"} exact render={() => <Svm/>}/>
                        <Route path={"/randomforest"} exact render={() => <RandomForest/>}/>
                        <Route path={"/logisticregression"} exact render={() => <LogisticRegression/>}/>
                        <div className="ui inverted vertical footer segment">
                            <div className="ui center aligned container fixed">
                                <h4 className="ui inverted header">&copy; spiderxm</h4>
                                <a href="https://www.facebook.com/"><i className="github square icon big"></i></a>
                            </div>
                        </div>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    }
}

export default MenuBar
// export default Visualiser