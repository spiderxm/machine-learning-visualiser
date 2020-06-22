import React, {Component} from 'react'
import {Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react'
import MachineLearningLogo from '../../assests/attachments/machinelearning.png'
import firebase from "firebase";
import axios from "axios";

class Signup extends Component {
    state = {
        email: null,
        password: null,
        imageURL: ''
    }
    emailchangeHandler = event => {
        this.setState({email: event.target.value})
    }
    passwordchangeHandler = event => {
        this.setState({password: event.target.value})
    }
    Signup = (event) => {

        event.preventDefault();
        console.log(this.state.email)
        console.log(this.state.password)
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(response => {
                console.log(response)
                const data = new FormData();
                data.append('file', this.uploadInput.files[0]);
                data.append('filename', response.user.uid + ".png");
                axios.post("/upload", data).then((response) => {
                    console.log(response)
                    this.setState({imageURL: response.data})
                    console.log("User Created")

                });
            })
            .catch(err => console.log(err)
            )
    }

    render() {
        return (
            <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
                <Grid.Column style={{maxWidth: 500}}>
                    <Header as='h2' textAlign='center'>
                        <Image src={MachineLearningLogo}/> Sign up
                    </Header>
                    <Form size='large' onSubmit={this.Signup}>
                        <Segment stacked>
                            <Form.Input
                                fluid icon='user'
                                type={"email"}
                                iconPosition='left'
                                placeholder='E-mail address'
                                required
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
                            <input ref={(ref) => {
                                this.uploadInput = ref;
                            }} type="file"
                                   accept={"image/png"}
                                   required
                                   className={"ui input"}
                                   style={{marginBottom: "6px"}}
                            />
                            <Button color={"black"} fluid size='large' type={"submit"}>
                                Sign-up
                            </Button>
                        </Segment>
                    </Form>
                    <Message>
                        Already have an account? <a href=''>Log in</a>
                    </Message>
                </Grid.Column>
            </Grid>)
    }
};


export default Signup