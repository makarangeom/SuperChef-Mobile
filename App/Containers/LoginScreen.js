//import * as React, {Component} from 'react';
import React, { Component } from 'react'
import { View,StyleSheet,Dimensions,Text,Alert,ScrollView,ImageBackground,TouchableOpacity,Animated,Image,TextInput } from 'react-native';

const Window = Dimensions.get('window');
export default class LoginScreen extends Component {
    state = {
        status: true,
        ListTextInputSignUp:[
            {
                name: 'Username',
                placeHolder: 'Username',
                statusType: false
            },
            {
                name: 'Email',
                placeHolder: 'Email',
                statusType: false
            },
            {
                name: 'Phone',
                placeHolder: 'Phone',
                statusType: false
            },
            {
                name: 'Password',
                placeHolder: 'Password',
                statusType: true
            },
            {
                name: 'Re-Password',
                placeHolder: 'Re-Password',
                statusType: true
            }
        ],
        ListTextInputSignIn:[
            {
                name: 'Username',
                placeHolder: 'Username',
                statusType: false
            },
            {
                name: 'Password',
                placeHolder: 'Password',
                statusType: true
            }
        ]
    };

    handClickSignIn=()=>{
        this.setState({status: true});
    }
    handClickSignUp=()=>{
        this.setState({status: false});
    }
   
    render() {
        return (
            <ScrollView style={{flex:1}}>
                <ImageBackground
                    style={{height:Window.height}}
                    resizeMode= 'cover'
                    borderTopLeftRadius={8}
                    borderTopRightRadius={8}
                    source={require('./Images/wallpaper.png')}
                >
                    <View style={{flex:1,width:Window.width,height:Window.height,backgroundColor:'rgba(0,0,0,.4)',}}>
                        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                            <Image
                                style={{height:110,width:110}}
                                borderRadius={100}
                                source={require('./Images/wallpaper.png')}
                            />
                            <Text style={{fontSize:23,color:'#ffffff',fontWeight:'bold'}}>WELCOME</Text>

                            {
                                this.state.status?
                                    this.state.ListTextInputSignIn.map((item, index)=>{
                                        return(
                                            <View style={{marginTop:13,flexDirection:'row',borderBottomWidth:1,borderColor:'#AAA2A2',width:'70%'}}>
                                                <Text style={{color:'#fff',fontWeight:'bold'}}>{item.name}: </Text>
                                                <TextInput style={{height:18,padding:0,width:'100%',color:'#fff'}}
                                                    underlineColorAndroid = "transparent"
                                                    placeholder = ""
                                                    autoCapitalize = "none"
                                                    returnKeyLabel = {"next"}
                                                    secureTextEntry={item.statusType}
                                                    onChangeText = {this.handlePassword}/>
                                            </View>
                                        )
                                    })
                                :
                                    this.state.ListTextInputSignUp.map((item, index)=>{
                                        return(
                                            <View style={{marginTop:13,flexDirection:'row',borderBottomWidth:1,borderColor:'#AAA2A2',width:'70%'}}>
                                                <Text style={{color:'#fff',fontWeight:'bold'}}>{item.name}: </Text>
                                                <TextInput style={{height:18,padding:0,width:'100%',color:'#fff'}}
                                                    underlineColorAndroid = "transparent"
                                                    placeholder = ""
                                                    autoCapitalize = "none"
                                                    returnKeyLabel = {"next"}
                                                    secureTextEntry={item.statusType}
                                                    onChangeText = {this.handlePassword}/>
                                            </View>
                                        )
                                    })
                            }
                            
                            {
                                this.state.status?
                                    <TouchableOpacity style={{borderWidth:1,borderColor:'#B4ABAB',borderRadius:19,marginTop:23,width:'70%',padding:5}}><Text style={{fontSize:20,color:'#fff',textAlign:'center'}}>Sign In</Text></TouchableOpacity>
                                :
                                    <TouchableOpacity style={{borderWidth:1,borderColor:'#B4ABAB',borderRadius:19,marginTop:23,width:'70%',padding:5}}><Text style={{fontSize:20,color:'#fff',textAlign:'center'}}>Sign Up</Text></TouchableOpacity>
                            }

                            <View style={{flexDirection:'row',marginTop:20}}>
                                <Text style={{color:'#FFFFFF',width:'30%',borderBottomWidth:1,borderColor:'#AAA2A2',bottom:7}}></Text>
                                <Text style={{color:'#FFFFFF',paddingLeft:5,paddingRight:5}}>Or Sign In With </Text>
                                <Text style={{color:'#FFFFFF',width:'30%',borderBottomWidth:1,borderColor:'#AAA2A2',bottom:7}}></Text>
                            </View>
                    
                            <View style={{flexDirection:'row',marginTop:10}}>
                                <TouchableOpacity><Image style={{height:40,width:40,margin:5}} borderRadius={100} source={require('./Images/facebook.png')} /></TouchableOpacity>
                                <TouchableOpacity><Image style={{height:40,width:40,margin:5}} borderRadius={100} source={require('./Images/google.png')} /></TouchableOpacity>
                                <TouchableOpacity><Image style={{height:40,width:40,margin:5}} borderRadius={100} source={require('./Images/twitter.png')} /></TouchableOpacity>
                            </View>

                            {
                                this.state.status?
                                    <TouchableOpacity onPress={()=>this.handClickSignUp()} style={{flexDirection:'row',marginTop:13}}>
                                        <Text style={{fontSize:20,color:'#FFFFFF',textDecorationLine:'underline'}}>Sign Up</Text>
                                    </TouchableOpacity>
                                :
                                    <TouchableOpacity onPress={()=>this.handClickSignIn()} style={{flexDirection:'row',marginTop:13}}>
                                    <Text style={{fontSize:20,color:'#FFFFFF',textDecorationLine:'underline'}}>Sign In</Text>
                                </TouchableOpacity>
                            }
                            
                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>
        );
    }
}
