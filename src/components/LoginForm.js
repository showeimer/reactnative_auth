import React, {Component} from 'react';
import {TextInput} from 'react-native';
import {Button, Card, CardSection} from './common';

class LoginForm extends Component {
  state = { text: ''}

  render() {
    return (
      <Card>
        <CardSection>
          <TextInput
            value={this.state.text}
            onChangetext={text => this.setState({text:event.target.value})}
            style={{height: 20, width: 100}}/>
        </CardSection>

        <CardSection>

        </CardSection>

        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm;
