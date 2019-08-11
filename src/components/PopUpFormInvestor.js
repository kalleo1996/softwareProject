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
	 AppRegistry,
	 ImageBackground,
	 ScrollView,
	 Alert
} from 'react-native';

class PopUpFormInvestor extends Component<{}> {


constructor(props) {
    super(props);
    
    this.state = {
        UserId:'',
      usname:'',
	  name: '',
      email: '',
      password: '',
	//  username:this.props.navigation.state.params.username,
	username:this.props.navigation.state.params.username,
	  usererror:''

     
    };
  }


   onReg() {
     const {name,usname,email,password,UserId,username } = this.state;

   // Alert.alert('before submit', `${name}`);
    

    var data ={"uid":UserId ,"name":name,"uname":username,"username":usname,"email":email,"password":password}

   fetch('http://192.168.8.100:8080/api/auth/igsignup', {
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
			  this.props.navigation.navigate('investor');
				     console.warn("2nd reg working for investor")
			  
            } else {
              this.setState({usererror:"User name already exist"});
              alert(this.state.usererror);
            }
          }).done();



   // Alert.alert('after submit', `${name}`);

  }




  





    render() {
        return (
		
		<ImageBackground source={{ uri: 'https://i.pinimg.com/736x/48/f6/1b/48f61bf060d65c378f4128277fdc91dd.jpg' }} style={{ width: '100%', height: '100%' }}>
		<ScrollView>
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
                        //onPress={() => this.props.navigation.navigate('investor')}

                        style={styles.buttonText}>Register</Text>
                </TouchableOpacity>


            </View>
			</ScrollView>
			</ImageBackground>
			
        )
    }
}

export default PopUpFormInvestor;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       // backgroundColor:'#6A1B9A'
    },

    inputBox: {
        width: 300,
        backgroundColor: 'rgb(255, 255,255)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#494949',
        marginVertical: 10
    },
    button: {
        width: 300,
        backgroundColor: '#EA80FC',
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
    () => PopUpFormInvestor);