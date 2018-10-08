import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card, Text, View } from 'react-native-ui-lib';

const cardImage = require('../assets/mr_beans_holiday.jpg');

export default class MovieCard extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <Card height={'100%'} width={'100%'} style={{marginBottom: 15}} onPress={() => {}}>
          <Card.Section body>
            <Card.Section>
              <View style={styles.whatToWatch}>
                <Text style={styles.header}> What To Watch This Week</Text>
              </View>
            </Card.Section>
            <Card.Section>
              <Card.Image width={'100%'} height={300} imageSource={cardImage} />
            </Card.Section>
            <Card.Section>
              <Text text70 dark10>
                Mr. Bean's Holiday
              </Text>
              <Text text80 dark10>
                This is a weird movie.
              </Text>
            </Card.Section>
            <Card.Section footer>
              <Text text90 dark50>
                Certified Dank
              </Text>
            </Card.Section>
          </Card.Section>
        </Card>
      </View>
    );
  }
}

MovieCard.navigationOptions = {
  title: 'LITFLIX',
  headerStyle: {
    backgroundColor: 'black'
    // color: 'white'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  whatToWatch: {
    backgroundColor: '#911010',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  header: {
    fontFamily: 'Avenir-Medium',
    fontSize: 17,
    color: 'white'
  }
});