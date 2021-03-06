import React, {Component} from 'react'
import { View, StyleSheet, TextInput, Text, TouchableOpacity,
  KeyboardAvoidingView, StatusBar, Button} from 'react-native'
import { StackNavigator } from 'react-navigation';
import Workouts from './Workouts';

class LoginForm extends Component {
  // onPress = () => {
  //     this.props.navigation.navigate('Workouts')
  // }

  render() {
    return (
      <View style={styles.container}>
      <StatusBar
      barStyle="light-content">
       </StatusBar>
        <TextInput
          placeholder="username or email"
          placeholderTextColor="rgba(255,255,255, 0.7)"
          returnKeyType="next"
          onSubmitEditing = {() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
        />
        <TextInput
          placeholder="password"
          placeholderTextColor="rgba(255,255,255, 0.7)"
          returnKeyType="go"
          secureTextEntry
          style={styles.input}
          ref={(input)=>this.passwordInput = input}
        />
        <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container: {
    padding:20
  },
  input: {
    height:40,
    backgroundColor: '#78C2C3',
    marginBottom:10,
    color: '#fff',
    paddingHorizontal:10
  },
  buttonContainer: {
      backgroundColor: '#3F6699',
      paddingVertical: 15
  },
  buttonText: {
    textAlign:'center',
    color: "#FFFFFF",
    fontWeight: '700'
  }
});

export default LoginForm;
