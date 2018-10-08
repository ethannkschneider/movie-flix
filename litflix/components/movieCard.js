import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card, Text, View } from 'react-native-ui-lib';

const cardImage = require('../assets/mr_beans_holiday.jpg');

export default class MovieCard extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <Card row height={160} style={{marginBottom: 15}} onPress={() => {}}>
          <Card.Image width={115} imageSource={cardImage} />
          <Card.Section body>
            <Card.Section>
              <Text text70 dark10>
                Mr. Bean's Holiday
              </Text>
            </Card.Section>
            <Card.Section>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  }
});