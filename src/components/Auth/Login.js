import React, {Component} from 'react'
import {Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react'
import MachineLearningLogo from '../../assests/attachments/Machine Learning.png'
import firebase from "firebase";
import {useHistory} from "react-router-dom";
import {Redirect, Link} from 'react-router-dom'

class Login extends Component {
    state = {
        email: null,
        password: null,
        loggedIn: false,
        redirect: false,
        load: false,
        err: null
    }
    emailchangeHandler = event => {
        this.setState({email: event.target.value})
    }
    passwordchangeHandler = event => {
        this.setState({password: event.target.value})
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/'/>
        }
    }
    Login = (event) => {
        event.preventDefault();
        this.setState({load:true})
        const email = this.state.email
        const password = this.state.password
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(response => {
                this.setState({load:false})
                this.setState({loggedIn: true})
                alert("You have logged in Successfully");
                    this.setState({redirect: true})
                }
            )
            .catch(err => {
                this.setState({load:false})
                this.setState({err: err.message})
                console.log(err)
                }
            )

    }

    render() {
        let error = null;
        if(this.state.err){
            error = (
                <div style={{textAlign:"center", color:"red"}}>
                    <span>{this.state.err}. Please try again</span>
                </div>
            )
        }
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

                            <Button color={"black"} fluid size='large' loading={this.state.load} type={"submit"}>
                                Login
                            </Button>
                            {error}
                        </Segment>
                    </Form>
                    <Message>
                        New to us? <Link to='/register'>Sign Up</Link>
                    </Message>
                    {this.renderRedirect()}
                </Grid.Column>
            </Grid>)
    }
}
;


export default Login