import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class ReadStoryScreen extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Read a Story</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  text: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
