import React, {Component} from 'react'
import logisticregression from '../../assests/attachments/logisticregression.png'
import firebase from "firebase";
import linearregression from '../../assests/attachments/linearregression.png'
import DecisionTree from '../../assests/attachments/DecisionTree.png'
import multiplelinearregression from '../../assests/attachments/multiple linear regression.png'
import knn from '../../assests/attachments/k nearest Neighbours.png'
import SVM from '../../assests/attachments/SVM.png'
import RF from '../../assests/attachments/RandomForest.png'
import {useHistory} from "react-router-dom";
import {Redirect, Link} from 'react-router-dom'
import {Button, Form, Grid, Header, Image, Message, Segment,Card} from 'semantic-ui-react'


import AlgoCard from '../Algorithms/Algo-cards/Algo-card'

const home = (props) => {
    return (
        <React.Fragment>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>



               <Grid columns={4} divided>
                    <Grid.Row>
                      <Grid.Column>
                        <div class="ui card">
                          <a class="image" href="#">
                                  <img src={linearregression}/>

                          </a>
                          <div class="content">
                            <a class="header" href="#">Estimated Salary</a>
                            <div class="meta">
                              <a>Linear Regression</a>
                            </div>
                          </div>
                        </div>

                      </Grid.Column>

                      <Grid.Column>
                          <div className="ui card">
                              <a className="image" href="#">
                                  <img src={logisticregression}/>

                              </a>
                              <div className="content">
                                  <a className="header" href="#">To Estimate Whether You Will Pass or Fail in University Exams</a>
                                  <div className="meta">
                                      <a>Logistic Regression</a>
                                  </div>
                              </div>
                          </div>


                      </Grid.Column>

                      <Grid.Column>
                          <div className="ui card">
                              <a className="image" href="#">
                                  <img src={SVM}/>

                              </a>
                              <div className="content">
                                  <a className="header" href="#">To Find Whether Someone Get Influenced by Advertisements or not</a>
                                  <div className="meta">
                                      <a>Support Vector Machine</a>
                                  </div>
                              </div>
                          </div>

                      </Grid.Column>

                      <Grid.Column>
                          <div className="ui card">
                              <a className="image" href="#">
                                  <img src={knn}/>

                              </a>
                              <div className="content">
                                  <a className="header" href="#">Estima</a>
                                  <div className="meta">
                                      <a>K Nearest Neighbors</a>
                                  </div>
                              </div>
                          </div>
                      </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>

                      <Grid.Column>

                          <div className="ui card">
                              <a className="image" href="#">
                                  <img src={multiplelinearregression}/>

                              </a>
                              <div className="content">
                                  <a className="header" href="#">University Acceptance Finder</a>
                                  <div className="meta">
                                      <a>Multiple Linear Regression</a>
                                  </div>
                              </div>
                          </div>
                      </Grid.Column>
                      <Grid.Column>
                          <div className="ui card">
                              <a className="image" href="#">
                                  <img src={DecisionTree}/>

                              </a>
                              <div className="content">
                                  <a className="header" href="#">Estimated Salary</a>
                                  <div className="meta">
                                      <a>Decision Tree</a>
                                  </div>
                              </div>
                          </div>
                      </Grid.Column>

                      <Grid.Column>
                        <div class="ui card">
                          <a class="image" href="#">
                                  <img src={RF}/>

                          </a>
                          <div class="content">
                            <a class="header" href="#">Wine Quality Predictor</a>
                            <div class="meta">
                              <a>Random Forest</a>
                            </div>
                          </div>
                        </div>
                      </Grid.Column>
                   </Grid.Row>
              </Grid>

                )













        </React.Fragment>);
}
export default home