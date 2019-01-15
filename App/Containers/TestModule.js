//import * as React, {Component} from 'react';
import React, { Component } from 'react'
import { View,StyleSheet,Dimensions,Text,Alert,ScrollView,ImageBackground,TouchableOpacity,Animated,Image,TextInput } from 'react-native';
import { TabView, TabBar, SceneMap,TabViewAnimated } from 'react-native-tab-view';
import {Icon} from 'native-base'
import Rating from 'react-native-rating-simple';
var fullStar = require('./Images/fullStar.png');
var emptyStar = require('./Images/emptyStar.png');

export default class TestModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating5: 2
    };
  }
   
  render() {
    return (
      <View style={{}}>
      
      <Text style={{}}>
        On release/click, no half, max 7: {this.state.rating2}
      </Text>
      <Rating
        emptyStar={
          <Image source={emptyStar} style={{ width: 30, height: 30 }} />
        }
        fullStar={
          <Image source={fullStar} style={{ width: 30, height: 30 }} />
        }
        maxRating={5}
        starSize={30}
        onChange={rating => {
          this.setState({ rating2: rating });
        }}
      />
    </View>
  );
}
}