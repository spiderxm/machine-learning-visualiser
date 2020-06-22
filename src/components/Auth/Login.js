import React, {Component} from 'react'
import {Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react'
import MachineLearningLogo from '../../assests/attachments/Machine Learning.png'
import firebase from "firebase";

class Login extends Component {
    state = {
        email: null,
        password: null,
        loggedIn: false
    }
    emailchangeHandler = event => {
        this.setState({email: event.target.value})
    }
    passwordchangeHandler = event => {
        this.setState({password: event.target.value})
    }
    Login = (event) => {
        event.preventDefault();
        const email = this.state.email
        const password = this.state.password
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(response => {
                this.setState({loggedIn :true})
                }
            )
            .catch(err => {
                    console.log(err)
                }
            )
    }

    render() {

        return (
            <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
                <Grid.Column style={{maxWidth: 450}}>
                    <Header as='h2' textAlign='center'>
                        <Image src={MachineLearningLogo}/> Log-in to your account
                    </Header>
                    <Form size='large' onSubmit={this.Login}>
                        <Segment stacked>
                            <Form.Input
                                fluid icon='user'
                                iconPosition='left'
                                placeholder='E-mail address'
                                required
                                type='email'
                                onChange={this.emailchangeHandler}
                            />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                                required
                                onChange={this.passwordchangeHandler}
                            />

                            <Button color={"black"} fluid size='large' type={"submit"}>
                                Login
                            </Button>
                        </Segment>
                    </Form>
                    <Message>
                        New to us? <a href=''>Sign Up</a>
                    </Message>
                </Grid.Column>
            </Grid>)
    }
}
;


export default Login