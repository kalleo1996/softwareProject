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
ScrollView,
TextInput,




} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import Modal from "react-native-modal";
import { StackActions } from 'react-navigation';
import Login from './Login';



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
 class Menu extends Component<Props> {

 constructor(props){
        super(props);
  this.state = {
    
      


    accesstoken:null,
	username:this.props.navigation.state.params.username,

  }
  }


	_logOut = async() =>{
  

  await AsyncStorage.removeItem('token')
    this.getToken();
  this.props.navigation.navigate('login');


  }

   getToken = async () => {
        try {
            var token = await AsyncStorage.getItem('token');
            console.warn(token)

        } catch (error) {
            alert('mona magulak da token eka enne na');
        }
      }


	  alreadyregusera()
	  {
	  
	   try {
           
         
		 
	    const { username } = this.state;
    var data ={"uname":username,}
  
  //let name =JSON.parse(this.state.username).token;

   fetch('http://192.168.1.9:8080/api/auth/usera/uname/' + this.state.username, {
    method:'GET',
    headers: {
        Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    //body: JSON.stringify(data),
  }).then((response)=>response.json())
  .then((responseJson)=>{
	 
	      let acesstoken =JSON.stringify(responseJson);
		  //JSON.stringify(responseJson.name);
	          //this.storeToken(acesstoken);
			 this.setState({
			 
			 
			 accesstoken:acesstoken,

			 });

                if (this.state.accesstoken == "null") {


				//this.removeValue();

				console.warn(this.state.accesstoken)
				this.props.navigation.navigate('LPForm',{username:this.state.username});

				    
                // this.props.navigation.navigate('Menu',{username: this.state.accesstoken});
				
                } else {

				console.warn(this.state.accesstoken)

                
				  this.props.navigation.navigate('LP',{username:this.state.username});
                }

				




	  }) .catch((error)=>{console.error(error); });

        } catch (error) {
            alert('mona magulak da token eka enne na');
        }




	  }

	  alreadyreguserb()
	  {
	  
	   try {
           
         
		 
	    const { username } = this.state;
    var data ={"uname":username,}
  
  //let name =JSON.parse(this.state.username).token;

   fetch('http://192.168.1.9:8080/api/auth/userb/uname/' + this.state.username, {
    method:'GET',
    headers: {
        Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    //body: JSON.stringify(data),
  }).then((response)=>response.json())
  .then((responseJson)=>{
	 
	      let acesstoken =JSON.stringify(responseJson);
		  //JSON.stringify(responseJson.name);
	          //this.storeToken(acesstoken);
			 this.setState({
			 
			 
			 accesstoken:acesstoken,

			 });

                if (this.state.accesstoken == "null") {


				//this.removeValue();

				console.warn(this.state.accesstoken)
				this.props.navigation.navigate('LRForm',{username:this.state.username});

				    
                // this.props.navigation.navigate('Menu',{username: this.state.accesstoken});
				
                } else {

				console.warn(this.state.accesstoken)

                
				  this.props.navigation.navigate('LR',{username:this.state.username});
                }

				




	  }) .catch((error)=>{console.error(error); });

        } catch (error) {
            alert('mona magulak da token eka enne na');
        }




	  }

	    alreadyreguserc()
	  {
	  
	   try {
           
         
		 
	    const { username } = this.state;
    var data ={"uname":username,}
  
  //let name =JSON.parse(this.state.username).token;

   fetch('http://192.168.1.9:8080/api/auth/userc/uname/' + this.state.username, {
    method:'GET',
    headers: {
        Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    //body: JSON.stringify(data),
  }).then((response)=>response.json())
  .then((responseJson)=>{
	 
	      let acesstoken =JSON.stringify(responseJson);
		  //JSON.stringify(responseJson.name);
	          //this.storeToken(acesstoken);
			 this.setState({
			 
			 
			 accesstoken:acesstoken,

			 });

                if (this.state.accesstoken == "null") {


				//this.removeValue();

				console.warn(this.state.accesstoken)
				this.props.navigation.navigate('investorForm',{username:this.state.username});

				    
                // this.props.navigation.navigate('Menu',{username: this.state.accesstoken});
				
                } else {

				console.warn(this.state.accesstoken)

                
				  this.props.navigation.navigate('investor');
                }

				
	  }) .catch((error)=>{console.error(error); });

        } catch (error) {
            alert('mona magulak da token eka enne na');
        }




	  }




	   alreadyreguserd()
	  {
	  
	   try {
           
         
		 
	    const { username } = this.state;
    var data ={"uname":username,}
  
  //let name =JSON.parse(this.state.username).token;

   fetch('http://192.168.1.9:8080/api/auth/userd/uname/' + this.state.username, {
    method:'GET',
    headers: {
        Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    //body: JSON.stringify(data),
  }).then((response)=>response.json())
  .then((responseJson)=>{
	 
	      let acesstoken =JSON.stringify(responseJson);
		  //JSON.stringify(responseJson.name);
	          //this.storeToken(acesstoken);
			 this.setState({
			 
			 
			 accesstoken:acesstoken,

			 });

                if (this.state.accesstoken == "null") {


				//this.removeValue();

				console.warn(this.state.accesstoken)
				this.props.navigation.navigate('investeeForm',{username:this.state.username});

				    
                // this.props.navigation.navigate('Menu',{username: this.state.accesstoken});
				
                } else {

				console.warn(this.state.accesstoken)

                
				  this.props.navigation.navigate('investee');
                }

				  }) .catch((error)=>{console.error(error); });

        } catch (error) {
            alert('mona magulak da token eka enne na');
        }




	  }




















	  /*

  ToggleModal1 = () => {
    this.setState({ isModalVisible: true});
	
	//this.props.navigation.navigate('Sign_Up');
  };

   ToggleModal2 = () => {
    this.setState({ isModalVisible2: true});
	
	//this.props.navigation.navigate('Sign_Up');
  };

    ToggleModal3 = () => {
    this.setState({ isModalVisible3: true});
	
	//this.props.navigation.navigate('Sign_Up');
  };

      ToggleModal4 = () => {
    this.setState({ isModalVisible4: true});
	
	//this.props.navigation.navigate('Sign_Up');
  };



   toggleModal1 = () => {
    this.setState({ isModalVisible:false});
	this.props.navigation.navigate('investor');
  };


     toggleModal2 = () => {
    this.setState({ isModalVisible2:false});
	this.props.navigation.navigate('investee');
  };

      toggleModal3 = () => {
    this.setState({ isModalVisible3:false});
	this.props.navigation.navigate('LR');
  };

      toggleModal4 = () => {
    this.setState({ isModalVisible4:false});
	this.props.navigation.navigate('LP');
  };
  */


  render() {

  
    return (
	   <ScrollView>
	      <View style={styles.container}>
	      <View style={styles.color1}>
		
		   
			 <View
			 //style={{backgroundColor:'#ffffff'}} 
			 >
		   <Image style={{width:100, height:100 , 
						 borderRadius: 25,  marginVertical: 5,  marginHorizontal: 5,
						 alignSelf: 'flex-start' , }}
                    source={{ uri: 'https://png.pngtree.com/png-vector/20190307/ourlarge/pngtree-vector-edit-profile-icon-png-image_779401.jpg' }} />
		  </View>
		    <View style={styles.one}>
			<Button 
			//nPress={this.props.navigation.dispatch(StackActions.popToTop())}
		    onPress={this._logOut.bind(this)}
       
			title="LogOut"/>
			  <Text style={styles.log}>Now u are logged in </Text>
		      <Text style={styles.profileInfomation} >Name:</Text>
			   <Text style={styles.profileInfomation}>Username:{this.state.username}</Text>
			   <Text style={styles.profileInfomation}>email:</Text>
	 </View>
		  </View>
		 
		  

        
	     <View style={styles.color2}>
		 <ImageBackground source={{ uri: 'https://wpmisc.com/sites/default/files/wallpaper/abstract/65815/3d-abstract-hd-wallpapers-65815-17625.png' }} style={{ width: '100%', height: '100%' }}>
          
    	    
			 <TouchableOpacity style={styles.button} 
//onPress={() => this.props.navigation.navigate('investeeForm',{username: this.state.username})}
				 onPress={this.alreadyreguserd.bind(this)}
				//this.props.navigation.navigate('Menu',{username: this.state.accesstoken});
			 >
			 <Text style={styles. buttonText}> Getting an Investment </Text>
						 <Image style={{width: 100, height:100 ,   borderRadius: 25,  marginVertical: 5,  marginHorizontal: 5,
						// flex:1 ,
						 alignSelf: 'flex-end' , }}
                    source={{ uri: 'https://simplesign.io/wp-content/uploads/2016/11/My-Blog.jpg' }}
					
					/>
					
                    </TouchableOpacity>

					
					
					


<TouchableOpacity style={styles.button} 
//onPress={this.ToggleModal2}
// onPress={() => this.props.navigation.navigate('investorForm',{username: this.state.username})}
 onPress={this.alreadyreguserc.bind(this)}
>
						 <Image style={{width: 100, height: 100 , borderRadius: 25,  marginVertical: 5,  marginHorizontal: 5,}}
                    source={{ uri: 'https://cdn.cnbcafrica.com/wp-content/uploads/2017/02/03012417/investment2_shutterstock_195219920.jpg' }} />
					<Text style={styles. buttonText}>         Finding a investor</Text>
                    </TouchableOpacity>

				
					



 <TouchableOpacity style={styles.button} 
 
 //onPress={this.ToggleModal3}
  onPress={this.alreadyreguserb.bind(this)}
 >
			 <Text style={styles. buttonText}> getting a Loan </Text>
						 <Image style={{width: 100, height:100 , borderRadius: 25,  marginVertical: 5,  marginHorizontal: 5,
						// flex:1 ,
						 alignSelf: 'flex-end' , }}
                    source={{ uri: 'https://loan-applications.net/wp-content/uploads/2015/08/best-personal-loans-online.jpg' }} />

					 </TouchableOpacity>






					
                   
<TouchableOpacity style={styles.button}
//onPress={this.ToggleModal4}
 onPress={this.alreadyregusera.bind(this)}
>
						 <Image style={{width: 100, height: 100 , borderRadius: 25,  marginVertical: 5,  marginHorizontal: 5,
						// flex:1 ,
						}}
                    source={{ uri: 'https://previews.123rf.com/images/jaaakworks/jaaakworks1506/jaaakworks150600012/41257398-business-concept-hand-giving-loan-to-other-hand.jpg' }} />
					<Text style={styles. buttonText}>       Provide Loans</Text>
                    </TouchableOpacity>



              </ImageBackground> 
      </View>

	 
      </View>
	     </ScrollView>
    );
  }

 
 


}


export default Menu;

const styles = StyleSheet.create({
 container: {
  flex:1,
  //flexDirection:'row'
   

  },
  color1:{

  	color : '#FFFFFF',
     flex:2,
 
    backgroundColor: '#000000',

       
		flexDirection:'row',

  },

   color2:{

  	color : '#FFFFFF',
    flex:6,
	flexDirection:'row',
	alignItems: 'center',
   // backgroundColor: '#424242',
	

  },

     color3:{

  	color : '#FFFFFF',
    flex:1,
    backgroundColor: '#000000',
	

  },

   button: {
        // width: 400,
         //height:100,
		 flex: 1,
        backgroundColor: 'rgba(255,255,255,0.6)',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13,
		flexDirection:'row',
		alignItems: 'center',
    },

	
    buttonText: {
	 flex:2,
        fontSize: 20,
        fontWeight: '500',
        color: '#000000',
       textAlign: 'center',
        justifyContent: 'flex-start',
	   
    }, 

	one: {
		 flex :1,
        backgroundColor: '#ffffff',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13,
		
	},

	one1: {
		 flex :2,
        backgroundColor: '#ffffff',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13,
		
	},

	 log: {
	
        fontSize: 16,
        fontWeight: '400',
        color: 'green',
       textAlign: 'center',
        justifyContent: 'flex-start',
	   
    }, 
	 profileInfomation:
	 {
	    
	     fontSize: 14,
        fontWeight: '500',
        color: 'red',
       textAlign:'center',
        justifyContent:'flex-start',


	 },

	 ModalButton: {
	  backgroundColor: 'rgba(255,255,255,0.6)',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13,
		flexDirection:'row',
		alignItems: 'center',
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


	


});


AppRegistry.registerComponent(
    'AwesomeProject',
    () => Menu);