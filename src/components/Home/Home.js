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
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

import PropTypes from 'prop-types'



// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}


const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Predictions Via Machine Learning Algorithms'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='Computers are able to see, hear and learn.  Welcome to the future.'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button primary size='huge'>
      Get Started
      <Icon name='right arrow' />
    </Button>
  </Container>
)




class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >

            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>


      </Responsive>
    )
  }
}





const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>

  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}



const home = (props) => {
    return (
        <React.Fragment>
            <ResponsiveContainer>

            </ResponsiveContainer>


            <div className="ui three column doubling stackable grid container" style={{marginTop:"10vh"}}>
                <div className="column">
                    <div className={"ui"} style={{display: "flex", justifyContent: "center"}}>
                        <Link to={"/svm"}>
                        <div className="ui card" style={{height: "350px"}}>
                            <Link class="image" to={"linearregression"}>
                                <img src={linearregression} style={{height: "280px", width: "300px"}}/>

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
                                    <img src={logisticregression} style={{height: "280px", width: "300px"}}/>

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
                                    <img src={SVM} style={{height: "280px", width: "300px"}}/>

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

            )

        </React.Fragment>);
}
export default home