// JavaScript source code
// JavaScript source code
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform,
StyleSheet, 
Text, 
View,
Button,
TouchableOpacity,
Image,
ImageBackground,
 AppRegistry,
 TextInput,
 Alert

} from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


import Modal from "react-native-modal";










class LoanProvider extends Component<{}> {
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

   fetch('http://192.168.8.100:8080/api/auth/userareq', {
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
	                            usererror:'',
							
								    });

             
			   alert("the request has been submitted");
			   // this.props.navigation.navigate('LP');

				  this.setState({ isModalVisible:false});
			  
            } else {
              this.setState({usererror:"not working"});
              alert(this.state.usererror);

            }
          }).done();

 

    //Alert.alert('after submit', `${name}`);

  


  }
  
  toggleModal = () => {
    this.setState({ isModalVisible: true});
	
	//this.props.navigation.navigate('Sign_Up');
  };

   toggleModal2 = () => {

	
	   



	//this.props.navigation.navigate('Sign_Up');
  };



  render() {
    return (
	       <View style={styles.container}>
  
	      <View style={styles.color1}>
          <Text> </Text>
          </View>
		  		<ImageBackground source={{ uri: 'https://www.karvy.com/wp-content/uploads/2019/03/investment-banking-22-11-2018.png' }} style={{ width: '100%', height: '100%' }}>
	     <View style={styles.color2}>
		  <Modal isVisible={this.state.isModalVisible} >
		
          <View style={{ width:300, height:300 , borderColor:'blue' ,borderRadius: 25,  marginVertical: 5,  marginHorizontal: 5 ,   backgroundColor: '#ffffff' , }}
		 //style={{
		  //width:300, height:300 , 
						// borderRadius: 25,  marginVertical: 5,  marginHorizontal: 5,
						 //backgroundColor: 'rgba(0,0,0,0.6)'
						 //}}
						 >
						 
	

						  <TextInput style={styles.ModalinputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Amount"
                    placeholderTextColor="#494949"
					//onChangeText={text => this.setState({username: text})} 
					 onChangeText={(amount) => this.setState({ amount })}
					  value={this.state.amount}
                    keyboardType="default"

                />

				<TextInput style={styles.ModalinputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Duration"
                    placeholderTextColor="#494949"
					//onChangeText={text => this.setState({username: text})} 
					 onChangeText={(duration) => this.setState({duration })}
					 value={this.state.duration}
                    keyboardType="default"

                />

				 <TextInput style={styles.ModalinputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Rate"
                    placeholderTextColor="#494949"
					//onChangeText={text => this.setState({username: text})} 
					 onChangeText={(rate) => this.setState({ rate })}
					 value={this.state.rate}
                    keyboardType="default"

                />

						 <TextInput style={styles.ModalinputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Negotiation"
                    placeholderTextColor="#494949"
					//onChangeText={text => this.setState({username: text})} 
					 onChangeText={(negotiation) => this.setState({ negotiation})}
					  value={this.state.negotiation}
                    keyboardType="default"

                />


           
			  <TouchableOpacity style={styles.ModalButton} onPress={this.sendRequest.bind(this)}>
                    <Text style={styles.ModalbuttonText}>submit</Text>
                </TouchableOpacity>

				

          </View>
	
        </Modal>


		
    	      <View style={{width:100, heigth:100, 
			  //backgroundColor:'#E0E0E0', 
			  flex:1,flexDirection:'column',alignItems: 'center'}}>




			    <ImageBackground source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMybaKtUQwGjyL2fXA7ZNY7J_vM_LSi3ToZnJ6aa6viL9FUDEf' }} style={{ width:100, height:100 ,	flex:1,marginVertical:10,marginHorizontal:10,alignItems: 'center'}}>
		    
			 <TouchableOpacity onPress={this.toggleModal}>
                    <Text style={styles.buttonText}>Send New Requests</Text>
                </TouchableOpacity>
			</ImageBackground>
			  <ImageBackground source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB8VzQWmkD0Bymc_4WkvZLvBxcjfinEWctbgh2Gyu3W4e3YCh4' }} style={{ width:100, height:100 ,	flex:1,marginVertical:10,marginHorizontal:10,alignItems: 'center'}}>
		    
			 <TouchableOpacity>
                    <Text style={styles.buttonText}>View others Requests</Text>
                </TouchableOpacity>
			</ImageBackground>
			  
			
			   <ImageBackground source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEyJUF1oGbbi_rziMnJO8JGJe8-hjvLhDL9OS_h46Ma5qXlyZ93w' }} style={{ width:100, height:100 ,	flex:1,marginVertical:10,marginHorizontal:10,alignItems: 'center'}}>
		    
			 <TouchableOpacity>
                    <Text style={styles.buttonText}>Manage Request</Text>
                </TouchableOpacity>
			</ImageBackground>
			  </View>

              <View style={{width:100,heigth:100 ,//backgroundColor:'#E0E0E0',
			  flex:1, flexDirection:'column',alignItems: 'center' }}>

			   <ImageBackground source={{ uri: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/investor-52-807273.png' }} style={{ width:100, height:100 ,	flex:1,marginVertical:10,marginHorizontal:10,alignItems: 'center'}}>
		    
			 <TouchableOpacity  onPress={() => this.props.navigation.navigate('getAlluser',{username:this.state.username})}>
                    <Text style={styles.buttonText}>View loan Receivers Request</Text>
                </TouchableOpacity>
			</ImageBackground>
			   
			  <ImageBackground source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDuM2Eoz8M1zb8iG0rKrS6xZXh4i0zCgp9usgBRpj1SCXPZi79' }} style={{ width:100, height:100 ,	flex:1,marginVertical:10,marginHorizontal:10,alignItems: 'center'}}>
		    
			 <TouchableOpacity>
                    <Text style={styles.buttonText}>View Accepted investors request</Text>
                </TouchableOpacity>
			</ImageBackground>
			 <ImageBackground source={{ uri: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/lawyer-35-841710.png' }} style={{ width:100, height:100 ,	flex:1,marginVertical:10,marginHorizontal:10,alignItems: 'center'}}>
		    
			 <TouchableOpacity>
                    <Text style={styles.buttonText}>Lawyer Details</Text>
                </TouchableOpacity>
			</ImageBackground>
			  
			  </View>
         
      </View>
	  	</ImageBackground>
    
	  <View style={styles.color3}>
     <Text>this is Investee Part</Text>
      </View>
      </View>
    );
  }
}

export default LoanProvider;

const styles = StyleSheet.create({
 container: {
  flex:1,
  //flexDirection:'row'
   

  },
  color1:{

  	color : '#FFFFFF',
  flex:1,
 
    backgroundColor: '#212121',
	

  },

   color2:{

  	color : '#FFFFFF',
    flex:4,
	flexDirection:'row',

    backgroundColor: '#424242',
	

  },

     color3:{

  	color : '#FFFFFF',
    flex:1,
    backgroundColor: '#000000',
	

  },

   button: {
        width: 100,
        backgroundColor: '#000000',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13,
		
    },

	
    buttonText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#000000',
        textAlign: 'center',
        justifyContent: 'center'
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
    () => LoanProvider);