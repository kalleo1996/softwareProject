import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    Linking,
    Image,
    ImageBackground,
    AsyncStorage,ActivityIndicator,
    Button
} from 'react-native';
import {Container, Content, Card, CardItem,Left, Body} from 'native-base'



export default class gettingAllusersEx extends Component {

    static navigationOptions = {
        title: 'Loan Receivers\' details',
        headerStyle: {
          backgroundColor: 'blue',
        },
        headerTintColor: '#fff',
        headerRight:null
      };

      constructor(props) {
        super(props);
        this.state = {
          isLoading: true,
          numberOfArrivals: 0,
          dataSource: [],
          notification: "0",
          active: false,
          accesstoken: '',
          notification_color:'blue',
          duration:'',
          last_update:'',
          numOfNotifications:'',
          test:'ssss',
         username:this.props.navigation.state.params.username,
         loanreceiveruname:''
    
        }
      }

    componentDidMount() {
        this. loadData();
         }

    loadData() {
        const url = 'http://192.168.1.9:8080/api/auth/userb'
        fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                  
                }
            })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                    numOfNotifications:responseJson.length,
                });
            })
            .catch((error) => {
                console.error(error);
            });

    }

    testmethod(item){
        
        this.setState(
          {
            loanreceiveruname:item.uname   
          }
        )
        console.warn(item.name);
        return item;
    }
/*
    getToken = async () => {
        try {
            var token = await AsyncStorage.getItem('token')
            this.setState({accesstoken:token})
            console.log("Confirm getToken method");
            console.log(token);
            this.loadData();
        } catch (error) {
            alert('Unknown error, token not retrive');
        }
      }
      */
        DeleteUser()
        {
            
             

        }






      
    render() {
        return (
          this.state.isLoading
            ?
            <ImageBackground source={{ uri: 'https://i.pinimg.com/736x/48/f6/1b/48f61bf060d65c378f4128277fdc91dd.jpg' }} style={{flex:1}}>
              <ActivityIndicator />
            </ImageBackground>
            :
            <View style={{flex:1}}>
            
            <Container>
           <ImageBackground source={{ uri: 'https://i.pinimg.com/736x/48/f6/1b/48f61bf060d65c378f4128277fdc91dd.jpg' }}  style={{flex:1}}>

          
          <Content>
         
          {this.state.dataSource.map((item, index) => {

            //  this.notify(item);
                return(
                    <View style={styles.container}>
                      <Card key={index} style={styles.cardStyle} >
                      <CardItem  style={styles.cardItemStyle} >
                        <Left>
                          <Body>
                          <Text style={{color:'#00BFFF'}}>username:</Text>
                            <Text style={{color:'black'}}>{item.uname}</Text> 
                            <Text style={{color:'#00BFFF'}}>name of the user:</Text>
                            <Text style={{color:'black'}}>{item.username}</Text> 
                            <Text style={{color:'#00BFFF'}}>email address:</Text>
                            <Text style={{color:'black'}}>{item.email}</Text>   
                            <Text style={{color:'#00BFFF', fontSize:22, fontWeight:"bold"}}></Text>     
                            <Button
                                  title={'Delete'}
                                 style={styles.input}
                                onPress={() =>
                         this.props.navigation.navigate('Sign_Up')}
                                        />
                                         <Button
                                  title={'Request'}
                                 style={styles.input}
                                onPress={() =>
                         this.props.navigation.navigate('Sign_Up')}
                                        />
              
                            <Text></Text>
                            <Text></Text>
                            <Text></Text>
                          </Body>
                        </Left>
                      </CardItem>
                      
                    </Card>
                    </View>
                    
                  );
            
            
          })}
    
    
        
          </Content>
          </ImageBackground>
        </Container>
    
            </View>
        );
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    
      },
      cardItemStyle: {
        backgroundColor: '#FFFFFF',
        borderRadius:10,
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        borderLeftColor: '#000066',
        borderBottomColor: '#000066',
        width:350,
        flexDirection: 'row',
        alignItems:'center'
    },
    cardStyle: {
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      width:350,
      flexDirection: 'row',
      alignItems:'center'
    },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
      accbutton:{
        textAlign: 'center',
        justifyContent: 'center'
      },
      inputIcon:{
        width:30,
        height:30,
        marginLeft:15,
        justifyContent: 'center'
      },
      instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
      },
      vessel: {
        margin: 10,
        width: 350,
        height: 150,
        backgroundColor: '#343434',
        padding: 10,
        alignItems: 'center',
        borderRadius: 10
      },
      text: {
        fontSize: 18,
        color: 'black'
      },
      form: {
         flex: 1,
         flexDirection: 'row',
         alignItems:'center',
         width: '100%',
         padding: 20,
         backgroundColor: '#343434',
         borderRadius: 15,
         borderColor: 'white'
       },


});
