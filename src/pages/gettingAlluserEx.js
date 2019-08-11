// JavaScript source code
// JavaScript source code
// JavaScript source code
// JavaScript source code
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
	ActivityIndicator,

} from 'react-native';







export default class gettingAlluserEx extends Component<{}> {

 constructor(props){
        super(props);
  this.state = {
   isloading:true,
   datasource:[],
    accesstoken:null,
	username:this.props.navigation.state.params.username,

  }
  }

  componentDidMount()
  {
    fetch('http://192.168.8.100:8080/api/auth/userb', {
    method:'GET',
    headers: {         
	     
        Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    //body: JSON.stringify(data),
  })
	
	  .then((response) => response.json())
	  .then((responseJson) => {
	  

	  // let acesstoken =JSON.stringify(responseJson);

	  this.setState(
	  	  {
		  	  isLoading:false,
			  datasource:responseJson.name
		  })

		

    })
	.catch((error) => {
	   console.warn(error)

	});

  }
      render() {
        if(this.state.isLoading){
	        return (
            <View style={styles.container}>
			<ActivityIndicator/>

			</View>
			)
	}
	else
	{
	  let namesofUserb =this.state.datasource.map((val,key) => 
	  {
	     return<View key={key}  style={styles.item}>
		 <Text>{val.name}</Text>
		 </View>

	  });

        return (
            <View style={styles.container}>
			
				{namesofUserb}


				 

          
            </View>
         )
		}
    }
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#212121'
    },
    logoText: {
        marginVertical: 10,
        fontSize: 18,
        color: 'rgb(0, 0, 0)'
    },
	item :
	{
		flex:1,
		alignSelf:'stretch',
		margin:10,
		 alignItems: 'center',
        justifyContent: 'center',
		borderBottomWidth: 1,
		borderBottomColor:'#eee'
	}
});