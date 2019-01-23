//import * as React, {Component} from 'react';
import React, { Component } from 'react'
import { View,StyleSheet,Dimensions,Text,Alert,ScrollView,ImageBackground,TouchableOpacity,Animated,Image,TextInput} from 'react-native';
import {Icon} from 'native-base'
import { Actions } from 'react-native-router-flux';

const Window = Dimensions.get('window');
export default class MainMenuScreen extends Component {
  state = {
    index: 0,
    numComments: 0,
    eachMenuItem:[
        {
            id:1,
            name:'Home',
            type:'FontAwesome',
            name_icon:'home',
        },
        {
            id:2,
            name:'Menu',
            type:'MaterialIcons',
            name_icon:'menu',
        },
        {
            id:3,
            name:'About',
            type:'MaterialIcons',
            name_icon:'info',
        },
        {
            id:4,
            name:'Contact',
            type:'MaterialCommunityIcons',
            name_icon:'notebook',
        },
        {
            id:5,
            name:'Support',
            type:'FontAwesome5',
            name_icon:'donate',
        },
        {
            id:6,
            name:'Feedback',
            type:'MaterialIcons',
            name_icon:'feedback',
        },
        {
            id:7,
            name:'Setting',
            type:'MaterialIcons',
            name_icon:'settings',
        },
        {
            id:8,
            name:'Sign Out',
            type:'MaterialCommunityIcons',
            name_icon:'logout',
        }
    ]
  };

  handClickEachMenu=(item)=>{
    if(item.id == 1){
        Actions.PopularCategoryScreen()
    }
    else if(item.id == 2){
        Actions.MainCategoriesScreen()
    }
    else if(item.id == 7){
        Actions.SettingScreen()
    }
    else if(item.id == 8){
        Actions.LoginScreen()
    }
  }

   
    render() {
        return (
            <View style={{}}>
                <ImageBackground
                    style={{height:Window.height}}
                    resizeMode= 'cover'
                    borderTopLeftRadius={8}
                    borderTopRightRadius={8}
                    source={require('./Images/sideMenu.png')}
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
                                        <TouchableOpacity onPress={()=>this.handClickEachMenu(item)} style={{flexDirection:'row',paddingBottom:15}}>
                                            <Icon type={item.type} name={item.name_icon} style={{color:'#fff',fontSize:23,paddingRight:15,fontWeight:'bold'}} />
                                            <Text style={{fontSize:16,color:'#fff'}}>{item.name}</Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                            
                        </View>
                        

                        <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',borderTopWidth:1,borderTopColor:'#fff',padding:10}}>
                            <Text style={{color:'#ffffff',fontWeight:'bold'}}>Nanoo Black</Text>
                            <Text style={{color:'#ffffff',fontWeight:'bold'}}>Version 0.0.1</Text>
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