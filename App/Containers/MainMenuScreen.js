//import * as React, {Component} from 'react';
import React, { Component } from 'react'
import { View,StyleSheet,Dimensions,Text,Alert,ScrollView,ImageBackground,TouchableOpacity,Animated,Image,TextInput} from 'react-native';
import {Icon} from 'native-base'

const Window = Dimensions.get('window');
export default class MainMenuScreen extends Component {
  state = {
    index: 0,
    numComments: 0,
    eachMenuItem:[
        {
            name:'Home',
            type:'FontAwesome',
            name_icon:'home',
        },
        {
            name:'Menu',
            type:'MaterialIcons',
            name_icon:'menu',
        },
        {
            name:'About',
            type:'MaterialIcons',
            name_icon:'info',
        },
        {
            name:'Contact',
            type:'MaterialCommunityIcons',
            name_icon:'notebook',
        },
        {
            name:'Setting',
            type:'MaterialIcons',
            name_icon:'settings',
        },
        {
            name:'Feedback',
            type:'MaterialIcons',
            name_icon:'feedback',
        },
        {
            name:'Sign Out',
            type:'Entypo',
            name_icon:'log-out',
        }
    ]
  };

   
  render() {
    return (
        <View style={{}}>
            <ImageBackground
                style={{height:Window.height}}
                resizeMode= 'cover'
                borderTopLeftRadius={8}
                borderTopRightRadius={8}
                source={require('./Images/wallpaper.png')}
            >
                <View style={{height:Window.height,backgroundColor:'rgba(0,0,0,.7)'}}>
                    <View style={{flex:3,flexDirection:'row',alignItems:'center',borderBottomWidth:1,borderBottomColor:'#fff',padding:10}}>
                        <Image
                            style={{width:70,height:70,borderRadius:100,borderWidth:3,borderColor:'#fff',marginRight:10}}
                            source={{uri: 'http://greenwings.co/wp-content/uploads/2018/09/blank-head-profile-pic-for-a-man.jpg'}}
                        />

                        <View style={{flexDirection:'column'}}>
                            <Text style={{fontSize:18,color:'#fff'}}>User Name:</Text>
                            <Text style={{fontSize:15,color:'#fff'}}>Email:</Text>
                        </View>
                    </View>

                    <View style={{flex:10,padding:10}}>
                        <Text style={{fontSize:18,color:'#fff',textAlign:'center',paddingTop:5,paddingBottom:15}}>WELCOME</Text>
                        {
                            this.state.eachMenuItem.map((item, index)=>{
                                return(
                                    <View style={{flexDirection:'row',paddingBottom:15}}>
                                        <Icon type={item.type} name={item.name_icon} style={{color:'#fff',fontSize:23,paddingRight:15,fontWeight:'bold'}} />
                                        <Text style={{fontSize:16,color:'#fff'}}>{item.name}</Text>
                                    </View>
                                )
                            })
                        }
                        
                    </View>
                    

                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',borderTopWidth:1,borderTopColor:'#fff',padding:10}}>
                        <Text style={{color:'#ffffff',fontWeight:'bold'}}>Develop By</Text>
                        <Text style={{color:'#ffffff',fontWeight:'bold'}}>Version</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
  }
}
const styles = StyleSheet.create({
    scene: {
      flex: 1,
    },
  });