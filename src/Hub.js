import React, { Component } from 'react';
import { ButtonGroup, Button } from 'react-native-elements';
import { View, Text } from 'react-native';
import { textWithoutEncoding } from 'react-native-communications';

class Hub extends Component {
  constructor() {
    super();
    this.state = {
        1: 1,
        2: 1,
        3: 1,
        4: 1
    };
    this.updateIndex = this.updateIndex.bind(this);
  }
  updateIndex(selectedIndex, index) {
    console.log(index, selectedIndex);
    this.setState({
        [index]: selectedIndex
    });
  }
  sendSMS(type) {
    let body = '';
    if (type === 'set') {
      body = JSON.stringify(this.state);
    } else {
      body = '{GetValues}';
    }
    console.log(body);
    textWithoutEncoding('8714117239', body);
  }
  renderAreas() {
    const buttons = ['OFF', 'ON'];
    const views = [];
    for (let index = 1; index < 5; index++) {
      views.push(
        <View
          style={styles.groupStyles}
          key={index}
        >
          <Text style={styles.textStyle}>Área {index} </Text>
          <ButtonGroup
            onPress={(selectedIndex) => this.updateIndex(selectedIndex, index)}
            selectedIndex={this.state[index]}
            buttons={buttons}
            containerStyle={{ flex: 1 }}
            selectedButtonStyle={{ backgroundColor: this.state[index] === 1 ? 'green' : 'red' }}
            selectedTextStyle={{ color: 'white' }}
          />
        </View>
      );
    }
    return (
      <View>
        {
          views
        }
      </View>
    );
  }
  render() {
    console.log(this.state);
    return (
      <View>
        {this.renderAreas()}
        <Button
          title='Actualizar aspersores'
          buttonStyle={styles.buttonStyle}
          onPress={() => this.sendSMS('set')}
        />
        <Button
          title='Estado actual aspersores'
          buttonStyle={styles.buttonStyle}
          onPress={() => this.sendSMS('get')}
        />
      </View>

    );
  }
}

const styles = {
  groupStyles: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textStyle: {
    color: 'white',
    fontSize: 24
  },
  buttonStyle: {
    margin: 5,
    backgroundColor: '#9b59b6'
  }
};

export default Hub;
