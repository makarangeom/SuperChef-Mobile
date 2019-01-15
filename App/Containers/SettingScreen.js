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
                <View style={{flex:5}}>
                    <View style={{height:'50%',backgroundColor:'green'}}>
                        <Image
                            style={{width:'100%',flex:1}}
                            source={{uri:'http://eatdrinkpaleo.com.au/wp-content/uploads/2016/04/paleo-duck-pancakes_900-1.jpg'}}
                        />
                    </View>
                    <View style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center',position:'absolute'}}>
                        <Image
                            style={{width:110,height:110,borderRadius:100,borderWidth:1,marginRight:10}}
                            source={{uri: 'http://greenwings.co/wp-content/uploads/2018/09/blank-head-profile-pic-for-a-man.jpg'}}
                        />
                    </View>
                </View>
                <View style={{flex:8}}>
                    <Text>Personal Informatin</Text>
                </View>
            </View>
        );
    }
}