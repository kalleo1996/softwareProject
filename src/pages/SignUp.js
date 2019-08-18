// JavaScript source code
// JavaScript source code

// JavaScript source code
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    AppRegistry,
	ImageBackground,
	Alert,
	Button
} from 'react-native';

import Logo from '../components/Logo';
//import Form from '../components/Form';
import Form2 from '../components/Form2';

import MultiText from '../components/MultiText'; 

class SignUp extends Component<{}> {

constructor(props) {
    super(props);
    
    this.state = {
      name: '',
      username: '',
      email: '',
      password: '',
     role:''
    };
  }

   onReg() {
    
    const {name,username,email,password,role} = this.state;
	

      Alert.alert('beforesubmit',`${name} +${username} `,[{
	 text:'okay'
	 }]);
    
	 var data ={"role": ["user"],"name":name, "username":username,"email":email,"password":password}
   

  fetch('http://192.168.1.9:8080/api/auth/signup', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
   .then((res)=>{
            let status = res.status;
            if (status == 200) {
              //this.props.navigation.navigate
			  this.props.navigation.navigate('login');
				     console.warn("1nd reg working")
			  
            } else {
              this.setState({usererror:"THERE IS an error occured"});
              alert(this.state.usererror);
            }
          }).done();
 
 /*
     Alert.alert('aftersubmit',`${name} + ${username}`,[{
	 text:'okay'
	 }]);
	 */
  }






    render() {
        return (

            <ScrollView>
			<ImageBackground source={{ uri: 'http://yesofcorsa.com/wp-content/uploads/2017/03/4K-Eiffel-Tower-Wallpaper-For-Mobile.jpg' }} style={{ width: '100%', height: '100%' }}>
            <View style={styles.container}>

                <Logo />
				


		
                    <TextInput style={styles.inputBox}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Name"
                        placeholderTextColor="#494949"
						 value={this.state.name}
                         onChangeText={(name) => this.setState({ name })}
                        keyboardType="default"

                    />
                    <TextInput style={styles.inputBox}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="UserName"
                        placeholderTextColor="#494949"
						 value={this.state.username}
                        onChangeText={(username) => this.setState({ username })}
                        keyboardType="default"

                    />
                    <TextInput style={styles.inputBox}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Email"
                        placeholderTextColor="#494949"
						  value={this.state.email}
                       onChangeText={(email) => this.setState({email })}
                        keyboardType="email-address"

                    />
                    <TextInput style={styles.inputBox}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Password"
                        secureTextEntry={true}
                        placeholderTextColor="#494949"
						value={this.state.password}
                        onChangeText={(password) => this.setState({ password })}
                    />
                    
       
	   
	   <Button
          title={'Register'}
          style={styles.input}
          onPress={this.onReg.bind(this)}
        />






                <Text style={styles.signupText}>have an account yet?</Text>
                    <TouchableOpacity><Text
                        onPress={() => this.props.navigation.navigate('login')}
                        style={styles.signupButton}>Login</Text></TouchableOpacity>
                </View>
				</ImageBackground>
                </ScrollView>
        )
    }
}

export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       // backgroundColor: '#212121'
    },

    signupTextCont: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,

    },
    signupText: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 16
    },
    signupButton: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500'
    },
    inputBox: {
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.6)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#494949',
        marginVertical: 10
    },
    button: {
        width: 300,
        backgroundColor: '#000000',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }
});

AppRegistry.registerComponent(
    'AwesomeProject',
    () => SignUp );