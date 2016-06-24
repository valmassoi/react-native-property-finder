'use strict';

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native'
import SearchPage from './SearchPage'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

class PropertyFinderApp extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}/>
    )
  }
}

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinderApp)
