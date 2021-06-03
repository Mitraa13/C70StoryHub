import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default class WriteStoryScreen extends React.Component{
  render(){
    return (
      <View style={styles.container}>

        <View style={styles.inputView}>
        <TextInput 
          style={styles.inputBoxsmall}
          placeholder="Story Title"
        />
        </View>
        
        <View style={styles.inputView}>
        <TextInput 
          style={styles.inputBoxsmall}
          placeholder="Author"
        />
        </View>

        <View style={styles.inputView}>
        <TextInput 
          style={styles.inputBoxbig}
          placeholder="Write your story"
          multiline={true}
        />
        </View>
        
        <TouchableOpacity
          style={styles.scanButton}
        >
              <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  buttonText:{
    fontSize: 15,
    textAlign: 'center',
  },
  inputView:{
    flexDirection: 'row',
    margin: 20,
    alignSelf:"center",
    marginTop:10,
  },
  inputViewStory:{
    flexDirection: 'row',
    margin: 20,
    marginTop:10,
  },
  inputBoxsmall:{
    width: 300,
    height: 50,
    borderWidth: 1.5,
    fontSize: 20
  },
  inputBoxbig:{
    width: 300,
    height: 200,
    borderWidth: 1.5,
    fontSize: 20,
  },
  scanButton:{
    backgroundColor: '#66BB6A',
    width: 50,
    borderWidth: 1.5,
    borderLeftWidth: 0
  },
  scanButton:{
    backgroundColor: 'pink',
    width:100,
    height:50,
    alignSelf:"center",
    alignItems:"center",
    justifyContent:"center",
  },

});
