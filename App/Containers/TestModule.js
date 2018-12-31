//import * as React, {Component} from 'react';
import React, { Component } from 'react'
import { View,StyleSheet,Dimensions,Text,Alert,ScrollView,ImageBackground,TouchableOpacity,Animated,Image,TextInput } from 'react-native';
import { TabView, TabBar, SceneMap,TabViewAnimated } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/Entypo'
import Icons from 'react-native-vector-icons/MaterialIcons'
const fIcon = (<Icon name="star" size={20} color="#cccc00"/>)
import * as Progress from 'react-native-progress';

export default class TestModule extends Component {
  state = {
    index: 0,
    numComments: 0,
    routes: [
      { key: 'info', title: 'Info' },
      { key: 'comment', title: 'Rate' },
      { key: 'rate', title: 'Commemt' },
    ],
    commentFood:[
        {
            name: 'Koko Real',
            like: '15',
            dislike: '0',
            comment: '11'
        },
        {
            name: 'Top King',
            like: '5',
            dislike: '0',
            comment: '1'
        },
        {
            name: 'Koko Real',
            like: '2',
            dislike: '0',
            comment: '0'
        },
        {
            name: 'Top Sound',
            like: '8',
            dislike: '0',
            comment: '2'
        },
        {
            name: 'Nanoo Black',
            like: '12',
            dislike: '0',
            comment: '22'
        },
        {
            name: 'Mr Ploak',
            like: '30',
            dislike: '3',
            comment: '35'
        }
    ],
    DetailFoodInfo: [
        {
            ingredients: [
                { id:'1',title:'Beef (baked meat)' },
                { id:'2',title:'Salad' },
                { id:'3',title:'tomato' },
                { id:'3',title:'beans' },
                { id:'3',title:'cucumber' },
                { id:'3',title:'onion' },
                { id:'3',title:'citrus' },
                { id:'3',title:'Garlic' },
                { id:'3',title:'oil' },
                { id:'3',title:'sugar' },
                { id:'3',title:'salt' },
                { id:'3',title:'pepper' }, 
                { id:'3',title:'oil' }, 
            ],
            How_to_cook: [
                { id:'1',title:'Cut beef are small pieces' },
                { id:'3',title:'Wash clean vegetable and place salad in a bowl' },
                { id:'2',title:'The tomatoes split into two or not splitting and hinged in the pan, as in the picture, then placed on the salad' },
                { id:'3',title:'Hands of cucumber are spun (width) arranged in or out of tomato circles' },
                { id:'3',title:'Cut onions are as thin as squares in the center of the tomato and cucumber' },
                { id:'3',title:'Cut short peas, fry (put some oil in the pan, leave the hot sauce, then rip it, cover it and cover it for a while) fry it and squeeze on onion' },
                { id:'3',title:'Fill garlic with peas.' },
                { id:'3',title:'Beef washed and squeezed over the bean' },
            ],
            Cooking: 'Put a little oil in the pan and let the hot meat pour in sugar, salt, pepper, oil (put a little more shape), slightly flushed and then pulled out. If too long, it will make the beef tough.Make a glass of pepper juice with your cabbage. If you like the egg, you can fry the peppermint on the beef. If you like the juice or tomato juice, try to steam for a little while with beef and then eat with hot rice.',
        }
        
      ],
  };

    _FoodInformationDetail=(item, key)=>{
        return(
            <ScrollView>
                <View style={{flex:1,paddingTop:5,paddingBottom:5,paddingLeft:10,paddingRight:10}} >
                    <Text style={{color:'red',fontSize:15,fontWeight:'bold',textDecorationLine:'underline'}}>Ingredients</Text>
                        {
                            this.state.DetailFoodInfo.map((item, key)=>{
                                return(
                                    item.ingredients.map((data, index)=>{
                                        return(
                                            <View style={{flexDirection: 'row',alignItems:'center',paddingRight:30}}> 
                                                <Icon name="dot-single" size={25} /><Text style={{justifyContent:'center',alignItems:'center'}}>{data.title}</Text>
                                            </View>   
                                        )
                                    })
                                )
                            })
                        }
                        
                    <Text style={{color:'red',fontSize:15,fontWeight:'bold',textDecorationLine:'underline'}}>How to cook?</Text>
                        {
                            this.state.DetailFoodInfo.map((item, key)=>{
                                return(
                                    item.How_to_cook.map((data, index)=>{
                                        return(
                                            <View style={{flexDirection: 'row',alignItems:'center',paddingLeft:10,paddingRight:30}}> 
                                                <Text style={{justifyContent:'center',alignItems:'center'}}><Text style={{fontWeight:'bold'}}>{index + 1}/.</Text>  {data.title}</Text>
                                            </View>   
                                        )
                                    })
                                )
                            })
                        }

                    <Text style={{color:'red',fontSize:15,fontWeight:'bold',textDecorationLine:'underline'}}>Start Cooking</Text>
                        {
                            this.state.DetailFoodInfo.map((item, key)=>{
                                return(
                                    <View style={{flex:1,flexDirection: 'row',paddingLeft:10,paddingRight:30}}> 
                                        <Text style={{justifyContent:'center',alignItems:'center'}}>{item.Cooking}</Text>
                                    </View>   
                                )
                            })
                        }
                </View>
            </ScrollView>
        )
    }
    _FoodComment=(item, key)=>{
        return(
            <ScrollView>
                <View style={{flex:1,paddingTop:5,paddingBottom:5,paddingLeft:10,paddingRight:10}} >
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginBottom:10}}>
                        <Text style={{fontSize:15,color:'#EB011C',fontWeight:'bold'}}>Comments</Text>
                        <Text style={{fontSize:15,color:'#EB011C',fontWeight:'bold'}}>({this.state.numComments})</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
                        <View style={{flex:5,flexDirection:'row',alignItems:'center'}}>
                            <Image
                                style={{width:45,height:45,borderRadius:100,borderWidth:1,marginRight:10}}
                                source={{uri: 'http://greenwings.co/wp-content/uploads/2018/09/blank-head-profile-pic-for-a-man.jpg'}}
                            />
                            <TextInput style = {{flex:5,fontSize:15,color:'#707070'}}
                                underlineColorAndroid = "transparent"
                                placeholder = "Type new comment here . . ."
                                autoCapitalize = "none"
                                onChangeText = {this.handlePassword}/>
                        </View>
                        
                        <TouchableOpacity style={{justifyContent:'center'}}><Icons name="send" size={25} ImageBackground={'#707070'}/></TouchableOpacity>
                    </View>
                    {
                        this.state.commentFood.map((item, key)=>{
                            this.state.numComments = key + 1
                            return(
                                <View style={{flexDirection:'row',justifyContent:'space-between',borderTopWidth:1,borderColor:'#cccccc'}}>
                                    <View style={{flex:5,flexDirection:'row',alignItems:'center',marginTop:10,marginBottom:10}}>
                                        <Image
                                            style={{width:45,height:45,borderRadius:100,borderWidth:1,marginRight:10}}
                                            source={{uri: 'http://greenwings.co/wp-content/uploads/2018/09/blank-head-profile-pic-for-a-man.jpg'}}
                                        />

                                        <View style={{flexDirection:'column'}}>
                                            <Text style={{fontSize:15,color:'#707070'}}>{item.name}</Text>
                                            <Text style={{fontSize:13,color:'#E4BE73',fontWeight:'bold'}}>Comment here...</Text>
                                            <View style={{flexDirection:'row'}}>
                                                <TouchableOpacity style={{justifyContent:'center',paddingRight:5}}><Icons name="thumb-up" size={15} ImageBackground={'#707070'}/></TouchableOpacity><Text style={{fontSize:13,color:'black'}}>{item.like}</Text>
                                                <TouchableOpacity style={{justifyContent:'center',paddingRight:5,marginLeft:20}}><Icons name="thumb-down" size={15} ImageBackground={'#707070'}/></TouchableOpacity><Text style={{fontSize:13,color:'black'}}>{item.dislike}</Text>
                                                <TouchableOpacity style={{justifyContent:'center',paddingRight:5,marginLeft:20}}><Icons name="comment" size={15} ImageBackground={'#707070'}/></TouchableOpacity><Text style={{fontSize:13,color:'black'}}>{item.comment}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    
                                    <TouchableOpacity style={{justifyContent:'center'}}><Icon name="dots-three-vertical" size={15} ImageBackground={'#707070'}/></TouchableOpacity>
                                </View>   
                            )
                        })
                    }
                </View>
            </ScrollView>
        )
    }

    _FoodRateStar=(item, key)=>{
        return(
            <ScrollView>
                <View style={{flex:1,paddingTop:5,paddingBottom:5,paddingLeft:10,paddingRight:10}} >
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginBottom:10}}>
                        <Text style={{fontSize:15,color:'#EB011C',fontWeight:'bold'}}>Overall Rating</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:13,color:'#FFFFFF',paddingRight:8,paddingLeft:8,paddingTop:2,borderWidth:1,borderColor:'#EB011C',backgroundColor:'#EB011C',borderRadius:15,marginRight:10}}>5.0</Text>
                            <Text style={{color:'#E4BE73'}}>{fIcon}{fIcon}{fIcon}{fIcon}{fIcon}</Text>
                        </View>
                        <Text style={{fontSize:15,color:'#EB011C',fontWeight:'bold'}}>({this.state.numComments})</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{fontSize:13,color:'#707070'}}>Excellent</Text>
                        <View style={{justifyContent:'center'}}><Progress.Bar progress={'0.3'} color={'#EB011C'} width={200} borderRadius={0} />
                        </View>
                        <Text style={{fontSize:13,color:'#707070'}}>100 %</Text>
                    </View>
                    <TouchableOpacity style={{flex:1,paddingBottom:13,paddingTop:13,borderWidth:1,borderColor:'#EB011C',backgroundColor:'#EB011C',borderRadius:20,marginBottom:25,marginTop:25}}>
                        <Text style={{fontSize:13,color:'#FFFFFF',textAlign:'center'}}>Rating Now</Text>
                    </TouchableOpacity>
                    {
                        this.state.commentFood.map((item, key)=>{
                            this.state.numComments = key + 1
                            return(
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <View style={{flexDirection:'row',alignItems:'center',marginTop:10,marginBottom:10}}>
                                        <Image
                                            style={{width:45,height:45,borderRadius:100,borderWidth:1,marginRight:10}}
                                            source={{uri: 'http://greenwings.co/wp-content/uploads/2018/09/blank-head-profile-pic-for-a-man.jpg'}}
                                        />

                                        <View style={{flexDirection:'column'}}>
                                            <Text style={{fontSize:15,color:'#707070'}}>{item.name}</Text>
                                            <Text style={{fontSize:13,color:'#707070'}}>Date</Text>
                                        </View>
                                    </View>
                                    
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <Text style={{fontSize:13,color:'#FFFFFF',paddingRight:8,paddingLeft:8,paddingTop:2,borderWidth:1,borderColor:'#EB011C',backgroundColor:'#EB011C',borderRadius:15,marginRight:10}}>5.0</Text>
                                        <Text style={{color:'#E4BE73'}}>{fIcon}{fIcon}{fIcon}{fIcon}{fIcon}</Text>
                                    </View>
                                </View>   
                            )
                        })
                    }
                </View>
            </ScrollView>
        )
    }
  render() {
    return (
        
        // <View> 
            

            // <WebView src="http://nativescript-vue.org/" />

            <TabView
                navigationState={this.state}
                renderScene={SceneMap({
                    info: ()=>this._FoodInformationDetail(),
                    comment: ()=>this._FoodRateStar(),
                    rate: ()=>this._FoodComment(),
                })}
                
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width }}
            />

            
    );
  }
}
const styles = StyleSheet.create({
    scene: {
      flex: 1,
    },
  });