import React, { Component } from 'react';
import {
  View,
  Image
} from 'react-native';
import { Header } from 'react-native-elements';
import Hub from './src/Hub';
import RiegoTerreno from './src/img/RiegoTerreno.png';

export default class App extends Component {
  render() {
    //console.ignoredYellowBox = ['Remote debugger'];
    return (
        <View style={styles.container}>
          <Header
            statusBarProps={{ barStyle: 'light-content' }}
            outerContainerStyles={{ borderBottomWidth: 0 }}
            centerComponent={{ text: 'Riego', style: { color: '#fff', fontSize: 24 } }}
          />
          <View style={{ flex: 1, padding: 10 }}>
            <Hub />
          </View>

          <View style={{ backgroundColor: '#2980b9', flex: 1 }}>
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
    backgroundColor: '#2980b9'
  }
};
