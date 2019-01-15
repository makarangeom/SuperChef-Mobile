//import * as React, {Component} from 'react';
import React, { Component } from 'react'
import { View,StyleSheet,Dimensions,Text,Alert,ScrollView,ImageBackground,TouchableOpacity,Animated,Image,TextInput } from 'react-native';
import { TabView, TabBar, SceneMap,TabViewAnimated } from 'react-native-tab-view';
import {Icon} from 'native-base'
import HeaderScreen from './HeaderScreen'
import Rating from 'react-native-rating-simple';
var fullStar = require('./Images/fullStar.png');
var emptyStar = require('./Images/emptyStar.png');

export default class SettingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        rating5: 2
        };
    }
   
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#fff'}}>
                <HeaderScreen/>
                <View style={{flex:3}}>
                    <View style={{height:'70%'}}>
                        <Image
                            style={{width:'100%',flex:1}}
                            source={{uri:'http://eatdrinkpaleo.com.au/wp-content/uploads/2016/04/paleo-duck-pancakes_900-1.jpg'}}
                        />
                    </View>
                    <View style={{width:'100%',height:'100%',top:'15%',justifyContent:'center',alignItems:'center',position:'absolute'}}>
                        <Image
                            style={{width:110,height:110,borderRadius:100,borderWidth:5,borderColor:'#fff',marginRight:10}}
                            source={{uri: 'http://greenwings.co/wp-content/uploads/2018/09/blank-head-profile-pic-for-a-man.jpg'}}
                        />
                        <TouchableOpacity style={{left:'56%',top:'60%',position:'absolute',backgroundColor:'#F5E8E8',width:25,height:25,borderRadius:100,justifyContent:'center',alignItems:'center'}}><Icon type='Entypo' name='camera' style={{color:'#000',fontSize:13}} /></TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:5}}>
                    <Text style={{fontSize:15,color:'#F90303',fontWeight:'bold',padding:10}}>Personal Information</Text>
                    <ScrollView>    
                        <Text style={{borderTopWidth:1,borderBottomWidth:1,borderColor:'#707070',padding:10}}>ID 156923</Text>
                        <View style={{borderBottomWidth:1,borderColor:'#707070',padding:10,flexDirection:'row',justifyContent:'space-between'}}>
                            <Text style={{fontSize:15,color:'#707070',}}>Name: </Text>
                            <TouchableOpacity style={{marginTop:5}}><Icon type='FontAwesome' name='edit' style={{color:'#707070',fontSize:15}} /></TouchableOpacity>
                        </View>
                        <View style={{borderBottomWidth:1,borderColor:'#707070',padding:10,flexDirection:'row',justifyContent:'space-between'}}>
                            <Text style={{fontSize:15,color:'#707070',}}>Email: </Text>
                            <TouchableOpacity style={{marginTop:5}}><Icon type='FontAwesome' name='edit' style={{color:'#707070',fontSize:15}} /></TouchableOpacity>
                        </View>
                        <View style={{borderBottomWidth:1,borderColor:'#707070',padding:10,flexDirection:'row',justifyContent:'space-between'}}>
                            <Text style={{fontSize:15,color:'#707070',}}>Phone: </Text>
                            <TouchableOpacity style={{marginTop:5}}><Icon type='FontAwesome' name='edit' style={{color:'#707070',fontSize:15}} /></TouchableOpacity>
                        </View>
                        <View style={{borderBottomWidth:1,borderColor:'#707070',padding:10,flexDirection:'row',justifyContent:'space-between'}}>
                            <Text style={{fontSize:15,color:'#707070',}}>Change Password: </Text>
                            <TouchableOpacity style={{marginTop:5}}><Icon type='FontAwesome' name='edit' style={{color:'#707070',fontSize:15}} /></TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
                <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity style={{width:180,paddingTop:13,paddingBottom:13,borderWidth:1,borderColor:'#707070',backgroundColor:'#EB011C',borderRadius:30}}>
                        <Text style={{fontSize:15,color:'#fff',textAlign:'center',fontWeight:'bold'}}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}