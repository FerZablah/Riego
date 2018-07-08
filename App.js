import React, { Component } from 'react';
import {
  View,
  Image
} from 'react-native';
import Hub from './src/Hub';
import RiegoTerreno from './src/img/RiegoTerreno.png';

export default class App extends Component {
  render() {
    //console.ignoredYellowBox = ['Remote debugger'];
    return (
      <View style={styles.container}>
        <View style={{ flex: 5 }}>
          <Hub />
        </View>

        <View style={{ backgroundColor: '#2980b9', flex: 6 }}>
          <Image
            source={RiegoTerreno}
            style={{ flex: 1, height: undefined, width: undefined }}
            resizeMode='stretch'
          />
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#2980b9',
    padding: 10
  }
};
