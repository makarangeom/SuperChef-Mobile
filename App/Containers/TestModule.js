//import * as React, {Component} from 'react';
import React, { Component } from 'react'
import { View,StyleSheet,Dimensions,Text,Alert,ScrollView,ImageBackground,TouchableOpacity,Animated,Image,TextInput } from 'react-native';
import { TabView, TabBar, SceneMap,TabViewAnimated } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/Entypo'
import Icons from 'react-native-vector-icons/MaterialIcons'
const fIcon = (<Icon name="star" size={20} color="#cccc00"/>)
const star = (<Icon name="star" size={30} color="#707070"/>)
import * as Progress from 'react-native-progress';

const Window = Dimensions.get('window');
export default class TestModule extends Component {
  state = {
    index: 0,
    numComments: 0,
  };

   
  render() {
    return (
        <View>
            <ImageBackground
                style={{height:Window.height}}
                resizeMode= 'cover'
                borderTopLeftRadius={8}
                borderTopRightRadius={8}
                source={require('./Images/wallpaper.png')}
            >
                <View style={{width:Window.width,height:Window.height,backgroundColor:'rgba(0,0,0,.4)',alignItems:'center',justifyContent:'center'}}>
                        <Image
                        style={{height:110,width:110}}
                        borderRadius={100}
                        source={require('./Images/wallpaper.png')}
                    />
                    <Text style={{flex:2.5,color:'#ffffff',fontWeight:'bold'}}>sfdsdf</Text>
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