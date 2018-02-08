import React, {Component} from 'react'
import { Image, View, Text, StyleSheet, KeyboardAvoidingView} from 'react-native'
import LoginForm from './LoginForm';

class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../images/logo.png')}/>
            <Text style={styles.title}Sweat It/>
        </View>


        <View style={styles.formContainer}>
          <LoginForm />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles=StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#3498db'
  },
  logoContainer: {
    alignItems:'center',
    flexGrow:1,
    justifyContent:'center'
  },
  logo: {
    width:100,
    height:100
  },
  title: {
    color: '#FFF',
    marginTop:10,
    width: 160,
    textAlign:'center',
    opacity:0.9
  }
});
  /*
  static propTypes = {
   member: PropTypes.shape({
     email: PropTypes.string,
   }),
   error: PropTypes.string,
   loading: PropTypes.bool.isRequired,
   onFormSubmit: PropTypes.func.isRequired,
 }

 static defaultProps = {
    error: null,
    member: {},
  }

  constructor(props) {
    super(props);
    this.state = {
      email: (props.member && props.member.email) ? props.member.email : '',
      password: '',
    };


  }
  render() {
    const { loading, error } = this.props;

    // Loading
    if (loading) return <Loading />;

    return (
      <View style={styles.container}>
          <Text>Login</Text>
      </View>
    );
  }
}


const styles=StyleSheet.create( {
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#2c3e50',
  },
});*/



export default Login;
