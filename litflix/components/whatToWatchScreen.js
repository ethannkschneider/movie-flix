import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View } from 'react-native-ui-lib';

import MovieCard from './movieCard';

const cardImage = require('../assets/mr_beans_holiday.jpg');

export default class WhatToWatchScreen extends React.Component {

  render () {
    return (
      <ScrollView
        horizontal
        height={100}
        style={{marginBottom: 20, padding: 10}}
        showsHorizontalScrollIndicator={false}>
        <MovieCard
          cardImage={cardImage}>
        </MovieCard>
      </ScrollView>
    );
  }
}
