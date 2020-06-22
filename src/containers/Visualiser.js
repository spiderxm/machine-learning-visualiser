import React, {Component} from "react";
import Home from "../components/Home/Home"
import Linearregression from "../components/Algorithms/Linear-regression";
import Multiplelinear from "../components/Algorithms/Multiple-linear"
import Knn from "../components/Algorithms/Knn";
import DecisionTree from "../components/Algorithms/Decision Tree";
import linearregressionlogo from "../assests/attachments/linearregression.png";
import Machinelearninglogo from "../assests/attachments/Machine Learning.png"
import LinearRegressionLogo from "../assests/attachments/linearregression.png"
import MultipleLinearRegressionLogo from "../assests/attachments/multiple linear regression.png"
import knnlogo from "../assests/attachments/k nearest Neighbours.png"
import {Button, Header, Icon, Image, Menu, Segment, Sidebar} from "semantic-ui-react";

class MenuBar extends Component {
    state = {visible: false}

    toggleVisibility = () => this.setState({visible: !this.state.visible})
    handlePusher = () => {
        const {visible} = this.state;

        if (visible) this.setState({visible: false});
    };

    render() {
        const {visible} = this.state
        return (
            <div>
                <Sidebar.Pushable as={Segment}>
                    <Sidebar as={Menu}
                             animation='uncover'
                             width='thin'
                             visible={visible}
                             icon='labeled'
                             vertical
                             style = {{backgroundColor:"grey"}}
                             inverted>
                        <Menu.Item>
                            <Image size={"mini"} src={LinearRegressionLogo}/>
                            Linear Regression
                        </Menu.Item>
                        <Menu.Item>
                            <Image size={"mini"} src={LinearRegressionLogo}/>
                            Multiple Linear Regression
                        </Menu.Item>
                        <Menu.Item>
                            Logistic Regression
                        </Menu.Item>
                        <Menu.Item>
                            Support Vector Machine
                        </Menu.Item>
                        <Menu.Item>
                            <Image size={"mini"} src={knnlogo}/>
                            K Nearest Neighbours
                        </Menu.Item>
                        <Menu.Item>
                            Decision Tree
                        </Menu.Item>
                        <Menu.Item>
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
                            <Image size="mini" src={Machinelearninglogo} />
                        </Menu.Item>
                        <Menu.Item onClick={this.toggleVisibility}>
                            <Icon name="sidebar" />
                        </Menu.Item>
                        <Menu.Menu position="right">

                        </Menu.Menu>
                    </Menu>

                        <Segment basic>
                            <Multiplelinear/>
                            <Linearregression/>
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    }
}

export default MenuBar
// export default Visualiser