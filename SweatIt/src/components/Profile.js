import React, { Component } from 'react';
import { Text, View, StyleSheet  } from 'react-native';

class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Profile</Text>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container: {
    backgroundColor: '#F3ECC8',
    flex : 1
  },
  title: {
    fontSize:40,
    textAlign:'center',
    color: "#2980b9",
    fontWeight: '700'
  }
});

export default Profile;
