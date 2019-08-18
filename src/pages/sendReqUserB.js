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

class sendReqUserB extends Component<{}> {

constructor(props) {
    super(props);
    
    this.state = {
	     amount:'',
	     negotiation:'',
         rate:'',
         duration:'',
	     username:this.props.navigation.state.params.username,
	 
         usererror:'',
    };
  }

  sendRequest = () =>
  {
     const {amount,username,duration,negotiation,rate } = this.state;

    //Alert.alert('before submit', `${name}`);
    

    var data ={"uname":username,"amount":amount,"duration":duration,"rate":rate,"negotiation":negotiation,}

   fetch('http://192.168.1.9:8080/api/auth/userbreq', {
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
			  //this.props.navigation.navigate('LP');
				     console.warn("working")

					 this.setState({ amount:'',
	                               negotiation:'',
                                   rate:'',
                                  duration:'',
	                            usererror:''
								    });

              this.props.navigation.navigate('LR');
			   alert("the request has been submitted");
			  
            } else {
              this.setState({usererror:"not working"});
              alert(this.state.usererror);
            }
          }).done();

 

    //Alert.alert('after submit', `${name}`);

  


  }






    render() {
        return (

            <ScrollView>
			<ImageBackground source={{ uri: 'http://yesofcorsa.com/wp-content/uploads/2017/03/4K-Eiffel-Tower-Wallpaper-For-Mobile.jpg' }} style={{ width: '100%', height: '100%' }}>
            <View style={styles.container}>
           
		                  <TextInput style={styles.ModalinputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Amount"
                    placeholderTextColor="#494949"
					//onChangeText={text => this.setState({username: text})} 
					 onChangeText={(amount) => this.setState({ amount })}
                    keyboardType="default"

                />

				<TextInput style={styles.ModalinputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Duration"
                    placeholderTextColor="#494949"
					//onChangeText={text => this.setState({username: text})} 
					 onChangeText={(duration) => this.setState({duration })}
                    keyboardType="default"

                />

				 <TextInput style={styles.ModalinputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Rate"
                    placeholderTextColor="#494949"
					//onChangeText={text => this.setState({username: text})} 
					 onChangeText={(rate) => this.setState({ rate })}
                    keyboardType="default"

                />

						 <TextInput style={styles.ModalinputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Negotiation"
                    placeholderTextColor="#494949"
					//onChangeText={text => this.setState({username: text})} 
					 onChangeText={(negotiation) => this.setState({ negotiation})}
                    keyboardType="default"

                />


           
			       

				  <TouchableOpacity style={styles.ModalButton}  onPress={this.sendRequest.bind(this)}>
                    <Text
                        //onPress={() => this.CheckLogin()}
						
                        style={styles.ModalbuttonText}>submit</Text>
                </TouchableOpacity>

                </View>
				</ImageBackground>
                </ScrollView>
        )
    }
}

export default sendReqUserB;

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
    },
		ModalButton: {
	  backgroundColor: '#2196F3',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13,
		//flexDirection:'row',
		alignItems: 'center',
		  justifyContent: 'center'
	},
	 ModalbuttonText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#000000',
        textAlign: 'center',
        justifyContent: 'center'
    },

	ModalinputBox:{
	 width: 200,
        backgroundColor: 'rgba(255,255,255,0.6)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#494949',
        marginVertical: 10

	}
});

AppRegistry.registerComponent(
    'AwesomeProject',
    () => sendReqUserB );