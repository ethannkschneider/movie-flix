import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-ui-lib';

export default class SplashPage extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>LITFLIX</Text>
        <Button
          backgroundColor="#911010"
          label="CONTINUE"
          labelStyle={{fontWeight: '600'}}
          enableShadow
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Movie')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Avenir-Medium',
    fontSize: 38,
    color: 'white'
  },
  button: {
    backgroundColor: '#911010',
    marginTop: 100
  }
});
