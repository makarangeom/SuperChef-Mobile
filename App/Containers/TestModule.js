//import * as React, {Component} from 'react';
import React, { Component } from 'react'
import { View,StyleSheet,Dimensions,Text,Alert,ScrollView,ImageBackground,TouchableOpacity,Animated } from 'react-native';
import { TabView, TabBar, SceneMap,TabViewAnimated } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/Entypo'

_headerTest=(item, key)=>{
    return(
        <View style={{flex:1,paddingTop:5,paddingBottom:5,paddingLeft:10,paddingRight:10,position:'absolute'}} >
            <Text style={{color:'red',fontSize:15,fontWeight:'bold',textDecorationLine:'underline'}}>Ingredients</Text>
              
            
            <Text style={{color:'red',fontSize:15,fontWeight:'bold',textDecorationLine:'underline'}}>How to cook?</Text>
            <Text style={{color:'red',fontSize:15,fontWeight:'bold',textDecorationLine:'underline'}}>Cooking</Text>
        </View>
    )
}

export default class TestModule extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'info', title: 'Info' },
      { key: 'comment', title: 'Rate' },
      { key: 'rate', title: 'Commemt' },
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
            <View style={{flex:1,paddingTop:5,paddingBottom:5,paddingLeft:10,paddingRight:10}} >
                <Text style={{color:'red',fontSize:15,fontWeight:'bold',textDecorationLine:'underline'}}>Ingredients</Text>
                    {
                        this.state.routes.map((item, key)=>{
                            return(
                                <View style={{flexDirection: 'row',alignItems:'center'}}> 
                                    <Icon name="dot-single" size={25} /><Text style={{justifyContent:'center',alignItems:'center'}}> Ingredients</Text>
                                </View>   
                            )
                        })
                    }
                    
                
                <Text style={{color:'red',fontSize:15,fontWeight:'bold',textDecorationLine:'underline'}}>How to cook?</Text>
                <Text style={{color:'red',fontSize:15,fontWeight:'bold',textDecorationLine:'underline'}}>Cooking</Text>
            </View>
        )
    }

    _FoodRateStar=(item, key)=>{
        return(
            <View style={{flex:1,paddingTop:5,paddingBottom:5,paddingLeft:10,paddingRight:10}} >
                <Text style={{color:'red',fontSize:15,fontWeight:'bold',textDecorationLine:'underline'}}>Ingredients</Text>
                    {
                        this.state.routes.map((item, key)=>{
                            return(
                                <View style={{flexDirection: 'row',alignItems:'center'}}> 
                                    <Icon name="dot-single" size={25} /><Text style={{justifyContent:'center',alignItems:'center'}}> Ingredients</Text>
                                </View>   
                            )
                        })
                    }
                    
                
                <Text style={{color:'red',fontSize:15,fontWeight:'bold',textDecorationLine:'underline'}}>How to cook?</Text>
                <Text style={{color:'red',fontSize:15,fontWeight:'bold',textDecorationLine:'underline'}}>Cooking</Text>
            </View>
        )
    }

    _headerTest=(item, key)=>{
        return(
            <View style={{flex:1,paddingTop:5,paddingBottom:5,paddingLeft:10,paddingRight:10}} >
                <Text style={{color:'red',fontSize:15,fontWeight:'bold',textDecorationLine:'underline'}}>Ingredients</Text>
                  
                
                <Text style={{color:'red',fontSize:15,fontWeight:'bold',textDecorationLine:'underline'}}>How to cook?</Text>
                <Text style={{color:'red',fontSize:15,fontWeight:'bold',textDecorationLine:'underline'}}>Cooking</Text>
            </View>
        )
    }

    _renderHeader(props) {
        return (
            <TabBar
                {...props}
                style={{backgroundColor:'red'}}
                tabStyle={{}}
                labelStyle={{}}
            />
        )
      }

  render() {
    return (
        
        // <View> 
            

            // <WebView src="http://nativescript-vue.org/" />

            <TabView
                navigationState={this.state}
                renderHeader={_headerTest}
                renderScene={SceneMap({
                    info: ()=>this._FoodInformationDetail(),
                    comment: ()=>this._FoodRateStar(),
                    rate: ()=>this._headerTest(),
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