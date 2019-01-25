//import * as React, {Component} from 'react';
import React, { Component } from 'react'
import { View,StyleSheet,Dimensions,Text,Alert,ScrollView,ImageBackground,TouchableOpacity,Animated,Image,TextInput } from 'react-native';
import { TabView, TabBar, SceneMap,TabViewAnimated } from 'react-native-tab-view';
import {Icon} from 'native-base'
import Rating from 'react-native-rating-simple';
var fullStar = require('./Images/fullStar.png');
var emptyStar = require('./Images/emptyStar.png');

const Width = Dimensions.get('window').width
const tabWidth = Dimensions.get('window').width / 3
export default class TestModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating5: 2,
      textComment: '',
      tabBarMenu:[{ key: 'info', title: 'Info' }, { key: 'comment', title: 'Rate' }, { key: 'rate', title: 'Commemt' }],
      statusTabBar: [true, false, false],
    };
  }

  saveComment= () =>{
    if(this.state.textComment!=""){
        Alert.alert("Input comment")
    }
    else{
        Alert.alert("Please input comment!")
    }
}
handPressTabView=(item, index)=>{
  this.state.statusTabBar.map((itemStatus, indexStatus)=>{
    if(index==indexStatus) this.state.statusTabBar[indexStatus] = true
    else this.state.statusTabBar[indexStatus] = false
  })
}
   
  render() {
    return (
      // <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
      //                   <View style={{flex:5,flexDirection:'row',alignItems:'center'}}>
      //                       <Image
      //                           style={{width:45,height:45,borderRadius:100,borderWidth:1,marginRight:10}}
      //                           source={{uri: 'http://greenwings.co/wp-content/uploads/2018/09/blank-head-profile-pic-for-a-man.jpg'}}
      //                       />
      //                       <TextInput style = {{flex:5,fontSize:15,color:'#707070'}}
      //                           underlineColorAndroid = "transparent"
      //                           placeholder = "Type new comment here . . ."
      //                           autoCapitalize = "none"
      //                           onChangeText = {(text)=> this.setState({textComment: text})}
      //                           value={this.state.textComment}
      //                       />
      //                   </View>
                        
      //                   <TouchableOpacity onPress={this.saveComment} style={{justifyContent:'center'}}><Icon type='MaterialIcons' name="send" style={{fontSize:25,color:'#707070'}} /></TouchableOpacity>
      //               </View>
      <View style={{flex:1}}>
        <View style={{flexDirection:'row',justifyContent:'center',backgroundColor:'#EB011C',height:45}}>
          {
              this.state.tabBarMenu.map((item, index)=>{
                return(
                    <TouchableOpacity onPress={()=>this.handPressTabView(item, index)} style={{width:tabWidth,justifyContent:'center'}}>
                      <Text style={{fontSize:15,color:'#fff',textAlign:'center',fontWeight:'bold'}}>{item.title}</Text>
                    </TouchableOpacity>
                )
              })
          }
        </View>
        
      </View>
      
  );
}
}