import React, {Component} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import MachineLearningLogo from '../../assests/attachments/machinelearning.png'
import firebase from "firebase";
class Signup extends Component{
    state = {
        email: null,
        password: null
    }
    emailchangeHandler = event => {
        this.setState({email: event.target.value})
    }
    passwordchangeHandler = event => {
        this.setState({password: event.target.value})
    }
    Signup = (event) => {
        console.log(this.state.email)
        console.log(this.state.password)
    }
    render() {
        return (
            <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
                <Grid.Column style={{maxWidth: 500}}>
                    <Header as='h2'  textAlign='center'>
                        <Image src={MachineLearningLogo} /> Sign up
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