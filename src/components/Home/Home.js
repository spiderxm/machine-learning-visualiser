import Footer from "../Navigation/Footer1"
import React, {Component} from 'react'
import logisticregression from '../../assests/attachments/logisticregression.png'
import firebase from "firebase";
import linearregression from '../../assests/attachments/linearregression.png'
import DecisionTree from '../../assests/attachments/DecisionTree.png'
import multiplelinearregression from '../../assests/attachments/multiple linear regression.png'
import knn from '../../assests/attachments/k nearest Neighbours.png'
import SVM from '../../assests/attachments/SVM.png'
import {Link} from 'react-router-dom'
import Randomforestlogo from "../../assests/attachments/RandomForest.png"
const home = (props) => {
    return (
        <React.Fragment>
            <div className="ui three column doubling stackable grid container" style={{marginTop:"10vh"}}>
                <div className="column">
                    <div className={"ui"} style={{display: "flex", justifyContent: "center"}}>
                        <Link to={"/svm"}>
                        <div className="ui card" style={{height: "350px"}}>
                            <Link class="image" to={"linearregression"}>
                                <img src={linearregression} style={{height: "270px", width: "300px"}}/>

                            </Link>
                            <div className="content">
                                <Link class="header" to={"/linearregression"}>Estimate your Salary</Link>
                                <div className="meta">
                                    Linear Regression
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className="column">
                    <div className={"ui"} style={{display: "flex", justifyContent: "center"}}>
                        <Link to={"/logisticregression"}>
                            <div className="ui card" style={{height: "350px"}}>
                                <a className="image" href="#">
                                    <img src={logisticregression} style={{height: "270px", width: "300px"}}/>

                                </a>
                                <div className="content">
                                    <a className="header" href="#">Estimate Whether You Will Pass or Fail in University
                                        Exams</a>
                                    <div className="meta">
                                        <a>Logistic Regression</a>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="column">
                    <div className={"ui"} style={{display: "flex", justifyContent: "center"}}>
                        <Link to={"/svm"}>
                            <div className="ui card" style={{height: "350px"}}>
                                <a className="image" href="#">
                                    <img src={SVM} style={{height: "250px", width: "300px"}}/>

                                </a>
                                <div className="content">
                                    <a className="header" href="#">Find Whether Someone Get Influenced by Advertisements
                                        or not</a>
                                    <div className="meta">
                                        <a>Support Vector Machine</a>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="column">
                    <div className={"ui"} style={{display: "flex", justifyContent: "center"}}>
                        <Link to="knn">
                            <div className="ui card" style={{height: "350px"}}>
                                <a className="image" href="#">
                                    <img src={knn} style={{height: "290px", width: "300px"}}/>

                                </a>
                                <div className="content">
                                    <a className="header" href="#">Predict class of iris flower</a>
                                    <div className="meta">
                                        <a>K Nearest Neighbors</a>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="column">

                    <div className={"ui"} style={{display: "flex", justifyContent: "center"}}>
                        <Link to={"/multiplelinearregression"}>
                            <div className="ui card" style={{height: "350px"}}>
                                <a className="image" href="#">
                                    <img src={multiplelinearregression} style={{height: "270px", width: "300px"}}/>

                                </a>
                                <div className="content">
                                    <a className="header" href="#">Perdict Chances of getting into university</a>
                                    <div className="meta">
                                        <a>Multiple Linear Regression</a>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className={"column"}>
                    <div className={"ui"} style={{display: "flex", justifyContent: "center"}}>
                        <Link to={"/randomforest"}>
                            <div className="ui card" style={{height: "350px"}}>
                                <a className="image" href="#">
                                    <img src={Randomforestlogo} style={{height: "290px", width: "300px"}}/>

                                </a>
                                <div className="content">
                                    <a className="header" href="#">Predict quality of wine</a>
                                    <div className="meta">
                                        <a>Random Rorest</a>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="column">
                    <div className={"ui"} style={{display: "flex", justifyContent: "center"}}>
                        <Link to={"/decisiontree"}>
                            <div className="ui card" style={{height: "330px"}}>
                                <a className="image" href="#">
                                    <img src={DecisionTree} style={{height: "270px", width: "300px"}}/>

                                </a>
                                <div className="content">
                                    <a className="header" href="#">Diabetes detection</a>
                                    <div className="meta">
                                        <a>Decision Tree</a>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <Footer/>

        </React.Fragment>);
}
export default home