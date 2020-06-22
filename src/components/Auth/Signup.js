import React, {Component} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import MachineLearningLogo from '../../assests/attachments/machinelearning.png'
class Signup extends Component{
    render() {
        return (
            <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
                <Grid.Column style={{maxWidth: 450}}>
                    <Header as='h2'  textAlign='center'>
                        <Image src={MachineLearningLogo} /> Sign up
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input
                                fluid icon='user'
                                type={"email"}
                                iconPosition='left'
                                placeholder='E-mail address'
                                required
                            />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                                required
                            />
                            <input ref={(ref) => {
                                this.uploadInput = ref;
                            }} type="file"
                                   accept={"image/png"}
                                   required
                                   className={"ui input"}
                                   style={{marginBottom: "6px"}}
                            />
                            <Button color={"black"} fluid size='large'>
                                Login
                            </Button>
                        </Segment>
                    </Form>
                    <Message>
                        Already have an account? <a href='#'>Log in</a>
                    </Message>
                </Grid.Column>
            </Grid>)
    }
};



export default Signup