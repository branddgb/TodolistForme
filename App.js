import React from 'react';
import {Platform,Dimensions, StyleSheet, Text, View, StatusBar,TextInput } from 'react-native';
const { height, width } = Dimensions.get("window")
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" >
          
        </StatusBar>
        <Text style={styles.title}>ToDoList</Text>
        <View style={styles.card} >
          <TextInput style= {styles.input} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f23657',
    alignItems: 'center',
  },
  title : {
    color: "white",
    fontSize: 38,
    marginTop: 50,
    marginBottom: 50,
    fontWeight:"400"
    

  },
  input : {
    color: "white",
    fontSize: 20,
  },
  card : {
    backgroundColor : "white",
    flex : 1,
    width: width -50,
    borderTopRightRadius : 10,
    borderTopLeftRadius : 10,
    ...Platform.select({
      ios: {
        // shadowColor:"rgb(50,50,500)"       
        
      },
      android: {
        elevation : 3
      }
      
    })
  }
});
