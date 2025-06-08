import React from 'react';
import { View, Text, Button } from 'react-native';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = { greeted: false };
  }

  sayHello = () => this.setState({ greeted: true });

  render() {
    const { name } = this.props;
    const { greeted } = this.state;

    return (
      <View style={{ padding: 10 }}>
        <Text>{greeted ? `Hello again, ${name}!` : `Hi, ${name}!`}</Text>
        <Button title="Greet" onPress={this.sayHello} />
      </View>
    );
  }
}

export default Greeting;