import React, {Component} from 'react'
import machinel from "../../assests/attachments/machinelearning.png"
import {
    Button,
    Container,
    Grid,
    Header,
    Icon,
    Image,
    Menu,
    Responsive,
    Segment,
    Visibility,
} from 'semantic-ui-react'

import PropTypes from 'prop-types'
import {Link} from "react-router-dom";


const getWidth = () => {
    const isSSR = typeof window === 'undefined'

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({mobile}) => (
    <Container text>
        <Header
            as='h1'
            content='Machine Learning And AI'
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
            content='In the long term, artificial intelligence and automation are going to be taking over so much of what gives humans a feeling of purpose.'
            inverted
            style={{
                fontSize: mobile ? '1.5em' : '1.7em',
                fontWeight: 'normal',
                marginTop: mobile ? '0.5em' : '1.5em',
            }}
        />
        <a href={"#predict"}>
            <button primary className='ui inverted button basic' style={{color: "white"}}>
                Start Predicting
                <Icon name='right arrow'/>
            </button>
        </a>
    </Container>
)

HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
    state = {}


    render() {
        const {children} = this.props
        const {fixed} = this.state

        return (
            <Responsive getWidth={getWidth} minWidth={Responsive.onlyMobile.minWidth}>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >
                    <Segment
                        inverted
                        textAlign='center'
                        style={{minHeight: 700, padding: '1em 0em'}}
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
                        <HomepageHeading/>
                    </Segment>
                </Visibility>

                {children}
            </Responsive>
        )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
}


const ResponsiveContainer1 = ({children}) => (
    <div>
        <DesktopContainer>{children}</DesktopContainer>

    </div>
)

ResponsiveContainer1.propTypes = {
    children: PropTypes.node,
}

const HomepageLayout = () => (
    <ResponsiveContainer1>
        <Segment style={{padding: '8em 0em'}} vertical>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Header as='h3' style={{fontSize: '2em'}}>
                            Machine Learning
                        </Header>
                        <p style={{fontSize: '1.33em'}}>
                            Machine learning is the science of getting computers to act without being explicitly
                            programmed. In the past decade, machine learning has given us self-driving cars, practical
                            speech recognition, effective web search, and a vastly improved understanding of the human
                            genome. Machine learning is so pervasive today that you probably use it dozens of times a
                            day without knowing it
                        </p>
                        <Header as='h3' style={{fontSize: '2em'}}>
                            Artifical Intelligence
                        </Header>
                        <p style={{fontSize: '1.33em'}}>
                            Artificial intelligence (AI) refers to the simulation of human intelligence in machines that
                            are programmed to think like humans and mimic their actions. The term may also be applied to
                            any machine that exhibits traits associated with a human mind such as learning and
                            problem-solving.
                        </p>
                    </Grid.Column>
                    <Grid.Column floated='right' width={6}>
                        <Image bordered rounded size='large' src={machinel}/>
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        </Segment>

        <Segment style={{padding: '0em'}} vertical>
            <Grid celled='internally' columns='equal' stackable>
                <Grid.Row textAlign='center'>
                    <Grid.Column style={{paddingBottom: '5em', paddingTop: '5em'}}>
                        <Header as='h3' style={{fontSize: '2em'}}>
                            Stephen Hawking, Famous Theoretical Physicist
                        </Header>
                        <p style={{fontSize: '1.33em'}}>"Success in creating AI would be the biggest event in human
                            history. Unfortunately, it might also be the last, unless we learn how to avoid the
                            risks.” </p>
                    </Grid.Column>
                    <Grid.Column style={{paddingBottom: '5em', paddingTop: '5em'}}>
                        <Header as='h3' style={{fontSize: '2em'}}>
                            “Artificial Intelligence, deep learning, machine learning — whatever you’re doing if you
                            don’t understand it — learn it. Because otherwise you’re going to be a dinosaur within 3
                            years.”
                        </Header>
                        <p style={{fontSize: '1.33em'}}>

                            <b></b> ~Mark Cuban
                        </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>


    </ResponsiveContainer1>
)

export default HomepageLayout





