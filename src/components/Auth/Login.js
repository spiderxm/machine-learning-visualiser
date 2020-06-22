import React, {Component} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import MachineLearningLogo from '../../assests/attachments/Machine Learning.png'
class Login extends Component{
    render() {
        return (
            <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
                <Grid.Column style={{maxWidth: 450}}>
                    <Header as='h2'  textAlign='center'>
                        <Image src={MachineLearningLogo} /> Log-in to your account
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input
                                fluid icon='user'
                                iconPosition='left'
                                placeholder='E-mail address'
                                required
                                type='password'
                            />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                                required
                            />

                            <Button color={"black"} fluid size='large'>
                                Login
                            </Button>
                        </Segment>
                    </Form>
                    <Message>
                        New to us? <a href='#'>Sign Up</a>
                    </Message>
                </Grid.Column>
            </Grid>)
    }
};



export default Login