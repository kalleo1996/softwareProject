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
    AppRegistry

} from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


class Investor extends Component<{}> {

  render() {
    return (
	      <View style={styles.container}>
  
	      <View style={styles.color1}>
          <Text> </Text>
          </View>
		  		<ImageBackground source={{ uri: 'https://www.karvy.com/wp-content/uploads/2019/03/investment-banking-22-11-2018.png' }} style={{ width: '100%', height: '100%' }}>
	     <View style={styles.color2}>
		
    	      <View style={{width:100, heigth:100, 
			  //backgroundColor:'#E0E0E0', 
			  flex:1,flexDirection:'column',alignItems: 'center'}}>
			    <ImageBackground source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMybaKtUQwGjyL2fXA7ZNY7J_vM_LSi3ToZnJ6aa6viL9FUDEf' }} style={{ width:100, height:100 ,	flex:1,marginVertical:10,marginHorizontal:10,alignItems: 'center'}}>
		    
			 <TouchableOpacity>
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
		    
			 <TouchableOpacity>
                    <Text style={styles.buttonText}>View investors Request</Text>
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

export default Investor;

const styles = StyleSheet.create({
 container: {
  flex:1,
  //flexDirection:'row'
   

  },
  color1:{

  	color : '#FFFFFF',
  flex:4,
 
    backgroundColor: '#212121',
	

  },

   color2:{

  	color : '#FFFFFF',
    flex:6,
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
    }



});

AppRegistry.registerComponent(
    'AwesomeProject',
    () => Investor );