import React, { Component } from 'react';
import { Platform, StyleSheet, View,Image,Text,ImageBackground,ScrollView,FlatList,TouchableOpacity,Alert,Dimensions } from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Entypo'
import Swiper from 'react-native-swiper';
const myIcon = (<Icon name="star" size={18} color="yellow" backgroundColor="yellow" />)
const fIcon = (<Icon name="star" size={15} color="yellow" backgroundColor="yellow" />)
const arrowIcon = (<Icon name="chevron-right" size={15} color="red" />)

const WIDTH = Dimensions.get('window').width 
export default class SoupCategoryScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[
                {id:1,name:'Soup Black Chicken',img:'./Images/soup.jpg',img_uri:'http://1.bp.blogspot.com/-QT7_eXH7Ek4/TmcKKNVv-HI/AAAAAAAAGCc/67ipwWUL2z4/s400/300745_10150277303621526_536581525_8438262_1203344248_n.jpg'},
                {id:2,name:'Fry',img:'./Images/fry.jpg',img_uri:'http://taidynasty.com/wp-content/uploads/2016/08/General-Tsos-Chicken.jpg?w=640'},
                {id:3,name:'Roast',img:'./Images/roast.jpg',img_uri:'http://eatdrinkpaleo.com.au/wp-content/uploads/2016/04/paleo-duck-pancakes_900-1.jpg'},
                {id:4,name:'Dessert',img:'./Images/dessert.jpg',img_uri:'http://assets.epicurious.com/photos/57b3377cdf05218810c52122/6:4/w_620%2Ch_413/sesame-balls.jpg'},
                {id:5,name:'Other',img:'./Images/other.jpg',img_uri:'http://s-yoolk-images.s3.amazonaws.com/kh/product_catalog/product_images/large/323130?1468418940'}, 
            ],
            catId: props.catId
        }
    }

    componentDidMount(){
        console.tron.log(this.state.catId)
    }

    handClickCategory=(item, key)=>{
        Actions.MainDetailFoodInfo(item)
    }

    _renderSoupItems=({item, key})=>{
        return(
            <View style={{width:'50%',paddingRight:5,paddingLeft:5,paddingBottom:10}}>
                <TouchableOpacity onPress={()=>this.handClickCategory(item, key)}>
                    <ImageBackground
                        style={{height:180}}
                        borderTopLeftRadius={8}
                        borderTopRightRadius={8}
                        source={{uri:item.img_uri}}
                    >
                        <View style={{width:'100%',marginTop:110,height:70,backgroundColor:'rgba(0,0,0,.6)',padding:5}}>
                            <Text style={{flex:2.5,color:'#ffffff',fontWeight:'bold'}}>{item.name}</Text>
                            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                                <Text style={{color:'#ffffff'}}>{fIcon}{fIcon}{fIcon}{fIcon}{fIcon}</Text>
                                <Text style={{color:'#ffffff',fontSize:13}}>10 Views</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
            
        )
    }
    
    render() {
      return (
            <View style={{height:'100%',paddingBottom:10,backgroundColor:'#F2EFF8'}}>
                <View style={{width:'100%',height:185}}>
                    <Swiper style={{}} autoplay={true} autoplayTimeout = {3.5}
                        dot={<View style={{backgroundColor: 'rgba(255,255,255,.3)', width: 10, height: 10, borderRadius:5, marginLeft:5, marginRight:5}} />}
                        activeDot={<View style={{backgroundColor: 'red', width: 10, height: 10, borderRadius:5, marginLeft:5, marginRight:5}} />}
                    >
                        {
                            this.state.data.map((item, key)=>{
                                return(
                                    <View style={{}}>
                                        <TouchableOpacity onPress={()=>this.handClickCategory(item, key)} style={{width:'100%'}}>
                                            <ImageBackground
                                                style={{width:'100%',height:180}}
                                                source={{uri:item.img_uri}}
                                            >
                                                <View style={{marginTop:100,width:'100%',height:80,backgroundColor:'rgba(0,0,0,.6)',padding:10}}>
                                                    <View style={{flex:2.8}}>
                                                        <Text style={{color:'#ffffff',fontWeight:'bold'}}>Soups</Text>
                                                        <Text style={{color:'#ffffff'}}>Soup Black Chicken</Text>
                                                    </View>
                                                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                                                        <Text style={{color:'#ffffff'}}>{myIcon}{myIcon}{myIcon}{myIcon}{myIcon}</Text>
                                                        <Text style={{color:'#ffffff'}}>10 Views</Text>
                                                    </View>
                                                </View>
                                            </ImageBackground>
                                        </TouchableOpacity>
                                    </View> 
                                )
                            })
                        }
                    </Swiper>
                </View>

                <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
                    <Text style={{fontWeight:'bold',color:'red',textDecorationLine:'underline'}}>Categories</Text>
                    <Text style={{fontWeight:'bold'}}><Text style={{fontWeight:'bold',color:'red',textDecorationLine:'underline'}}>Soups</Text>{arrowIcon}</Text>
                </View>

                <ScrollView horizontal={false} style={{paddingLeft:5,paddingRight:5}}>
                    <FlatList
                        data={this.state.data}
                        numColumns={2}
                        renderItem={this._renderSoupItems}
                        keyExtractor={(item, index) => index}
                    />
                </ScrollView>
            </View>

      );
    }
}
