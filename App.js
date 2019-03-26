import React from 'react';
import {
  Platform, 
  Dimensions, 
  StyleSheet, 
  Text, 
  View, 
  StatusBar,
  TextInput,
  ScrollView
} from 'react-native';

import ToDo from "./ToDo"

const { height, width } = Dimensions.get("window")
export default class App extends React.Component {
  state = {
    newToDo : "" 
  }
  render() {
    const { newToDo } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" >
          
        </StatusBar>
        <Text style={styles.title}>ToDoList</Text>
        <View style={styles.card} >
          <TextInput 
          style= {styles.input} 
          placeholder = {"New To Do"} 
          value={newToDo} 
          onChangeText={this._controllNewTodo} 
          placeholderTextColor={"#999"}
          returnKeyType = {"done"} />
          <ScrollView>
            <ToDo/>
            <ToDo/>
            <ToDo/>
            <ToDo/>
            <ToDo/>

          </ScrollView>
        </View>
      </View>
    );
  }
  _controllNewTodo = text => {
    this.setState({
      newToDo : text
    });
  };
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
    fontSize: 20,
    padding : 20,
    borderBottomColor: "#bbb",
    borderBottomWidth: 1
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
