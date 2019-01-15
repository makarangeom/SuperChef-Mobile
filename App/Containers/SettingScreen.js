//import * as React, {Component} from 'react';
import React, { Component } from 'react'
import { View,StyleSheet,Dimensions,Text,Alert,ScrollView,ImageBackground,TouchableOpacity,Animated,Image,TextInput } from 'react-native';
import { TabView, TabBar, SceneMap,TabViewAnimated } from 'react-native-tab-view';
import {Icon} from 'native-base'
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
            <View style={{flex:1}}>
                <View style={{flex:3}}>
                    <View style={{height:'65%',backgroundColor:'green'}}>
                        <Image
                            style={{width:'100%',flex:1}}
                            source={{uri:'http://eatdrinkpaleo.com.au/wp-content/uploads/2016/04/paleo-duck-pancakes_900-1.jpg'}}
                        />
                    </View>
                    <View style={{width:'100%',height:'100%',top:'10%',justifyContent:'center',alignItems:'center',position:'absolute'}}>
                        <Image
                            style={{width:110,height:110,borderRadius:100,borderWidth:5,borderColor:'#fff',marginRight:10}}
                            source={{uri: 'http://greenwings.co/wp-content/uploads/2018/09/blank-head-profile-pic-for-a-man.jpg'}}
                        />
                    </View>
                </View>
                <View style={{flex:5}}>
                    <Text style={{fontSize:15,color:'#F90303',fontWeight:'bold',borderBottomWidth:1,borderColor:'#707070',padding:10}}>Personal Information</Text>
                    <Text style={{fontSize:15,color:'#707070',borderBottomWidth:1,borderColor:'#707070',padding:10}}>ID</Text>
                    <Text style={{fontSize:15,color:'#707070',borderBottomWidth:1,borderColor:'#707070',padding:10}}>Name</Text>
                    <Text style={{fontSize:15,color:'#707070',borderBottomWidth:1,borderColor:'#707070',padding:10}}>Email</Text>
                    <Text style={{fontSize:15,color:'#707070',borderBottomWidth:1,borderColor:'#707070',padding:10}}>Phone</Text>
                    <Text style={{fontSize:15,color:'#707070',borderBottomWidth:1,borderColor:'#707070',padding:10}}>Change Password</Text>
                </View>
                <View style={{flex:2,justifyContent:'center'}}>
                    <TouchableOpacity style={{width:150,height:45,borderWidth:1,borderColor:'#fff',backgroundColor:'#EB011C',borderRadius:25}}>
                        <Text style={{fontSize:13,color:'#FFFFFF',textAlign:'center'}}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}