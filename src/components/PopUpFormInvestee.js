// JavaScript source code
// JavaScript source code
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
	 AppRegistry,
	 ImageBackground,
	 Alert,
	 ScrollView,
} from 'react-native';

class PopUpFormInvestee extends Component<{}> {

constructor(props) {
    super(props);
    
    this.state = {
        UserId:'',
      usname:'',
	  name: '',
      email: '',
      password: '',
	  username:this.props.navigation.state.params.username,
	  usererror:''

     
    };
  }
  

  
    
 onReg() {

     const {name,usname,email,password,UserId,username } = this.state;

    Alert.alert('before submit', `${name}`);
    

    var data ={"uid":UserId ,"name":name,"uname":username,"username":usname,"email":email,"password":password}

   fetch('http://192.168.8.100:8080/api/auth/irsignup', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }) .then((res)=>{
            let status = res.status;
            if (status == 200) {
              //this.props.navigation.navigate
			  this.props.navigation.navigate('investee');
				     console.warn("2nd reg working for investee")
			  
            } else {
              this.setState({usererror:"User name already exist"});
              alert(this.state.usererror);
            }
          }).done();

 

    Alert.alert('after submit', `${name}`);

  

	 

  }
  
  /*

   onReg() {
    const {name,usname,email,password,UserId,username} = this.state;

    Alert.alert('before submit', `${name}`);
    

    var data ={"uid":8,"u_name":"thanussre4","name":"ThnAUKTV", "username":"KTV123","email":"KTV123@gmail.com","password":"123456"}

   fetch('http://192.168.56.1:8080/api/auth/psignup', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
 
    Alert.alert('after submit', `${name}`);

  }

  */







    render() {
        return (
		    <ScrollView>
		<ImageBackground source={{ uri: 'https://fsa.zobj.net/crop.php?r=8JEQK1hzyrszFjBWtPy_kSvbYGb5BUL0dVQcEs7tBJ2h9B0W04Z6VY1K5HZLzanK77bb6Tj_pXGjRo9ZtMch8nepc-R_eYLLpr6LWzl8ZzHcFBr3EveNELJe4B53i0IGruZd5OSFU_DPh-7jzNAkko-POROlpfSggYhV8-vcR6JqBJbuahGNEk6rR88' }} style={{ width: '100%', height: '100%' }}>
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="UserId"
                    placeholderTextColor="#494949"
					 onChangeText={(UserId) => this.setState({ UserId })}

                    keyboardType="number-pad"

                />

				    <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="U_name"
                    placeholderTextColor="#494949"
					 onChangeText={(usname) => this.setState({ usname })}
                    keyboardType="default"

                />


				 <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Name"
                    placeholderTextColor="#494949"
					onChangeText={(name) => this.setState({ name })}
                    keyboardType="default"

                />

				
                    <TextInput style={styles.inputBox}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Email"
                        placeholderTextColor="#494949"
						onChangeText={(email) => this.setState({ email })}
                        keyboardType="email-address"

                    />


                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor="#494949"
					onChangeText={(password) => this.setState({ password })}
                />
                <TouchableOpacity style={styles.button}>
                    <Text
                         onPress={this.onReg.bind(this)}
                        style={styles.buttonText}>Register</Text>
                </TouchableOpacity>


            </View>
			</ImageBackground>
			    </ScrollView>
        )
    }
}

export default PopUpFormInvestee;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       // backgroundColor:'#6A1B9A'
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
        backgroundColor: '#1976D2',
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

});// JavaScript source code

AppRegistry.registerComponent(
    'AwesomeProject',
    () => PopUpFormInvestee);