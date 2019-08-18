/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { createStackNavigator, createAppContainer,createDrawerNavigator,DrawerItems,HeaderButtons, } from "react-navigation";
import { Platform, StyleSheet, View, StatusBar, Text ,AsyncStorage ,Button} from 'react-native';

import Login from './src/pages/Login';
import SignUp from './src/pages/SignUp';
import Menu from './src/pages/Menu';
import MultiText from './src/components/MultiText';
import PopUpFormInvestee from './src/components/PopUpFormInvestee';
import PopUpFormInvestor from './src/components/PopUpFormInvestor';
import LoanProviderForm from './src/components/LoanProviderForm';
import LoanReceiverForm from './src/components/LoanReceiverForm';
import Form from './src/components/Form';
import Form2 from './src/components/Form2';
import Investee from './src/pages/Investee';
import Investor from './src/pages/Investor';
import LReceiver from './src/pages/LoanReceiver';
import LProvider from './src/pages/LoanProvider';
import userbRequest from './src/pages/sendReqUserB';
import gettingAlluserEx from './src/pages/gettingAlluserEx';


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});










class App extends Component<{}> {

 constructor(props) {
        super(props);

    
    }


    render() {
        return (
       
            
                <AppStackNavigator />

         
        );
    }
}

const Drawer = createDrawerNavigator({
    login: {
        screen: Login,
    
      },
        Sign_Up: {
        
        screen :SignUp,
    
    
        },
        Menu: Menu,

}, {
    contentOptions: {
        activeTintColor :'#ffffff',
        inactiveTintColor :'#0172a0',
      },
    initialRouteName: 'Menu',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    contentComponent: (props) => (
    
         <ImageBackground source={{ uri: 'https://i.imgur.com/StNtgvB.jpg' }}  style={{flex:1}}>
            <View style={{height: 160,alignItems: 'center', justifyContent: 'center'}}>
    
            <Image source={{ uri: 'https://www.iconbunny.com/icons/media/catalog/product/1/6/168.9-phone-icon-iconbunny.jpg' }} style={{flex:1}}/>
            </View>
          <ScrollView>
            <DrawerItems {...props} />
          </ScrollView>
        </ImageBackground>
       )
}


);
const AppStackNavigator = createStackNavigator({
  
  login: {
    screen: Login,

  },
    Sign_Up: {
	
	screen :SignUp,


	},
    Menu: Menu,
    Drawer:{
        screen: Drawer,
        navigationOptions:{
            
              
                headerLeft: (
                    <Button title="close" onPress={ () => this.props.navigation.navigate('Drawer') } />
                )
              
            
          }

    },
	 investeeForm: PopUpFormInvestee,
  investorForm: PopUpFormInvestor,
    LPForm: LoanProviderForm,
	 LRForm: LoanReceiverForm,
   investee:Investee,
   investor:Investor,
    LR: LReceiver,
    LP: LProvider,
	getAlluser:gettingAlluserEx,
	userbReq:userbRequest,
 

 
})


const Apps = createAppContainer(AppStackNavigator);

export default Apps;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#212121'

    },

});
