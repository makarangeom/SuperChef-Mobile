import React, { Component } from 'react';
import { Platform, StyleSheet, View,Image,Text,ImageBackground,ScrollView,FlatList,TouchableOpacity,Alert,Dimensions } from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Entypo'
import Swiper from 'react-native-swiper';
const myIcon = (<Icon name="star" size={18} color="yellow" backgroundColor="yellow" />)
const fIcon = (<Icon name="star" size={15} color="yellow" backgroundColor="yellow" />)
const arrowIcon = (<Icon name="chevron-right" size={15} color="red" />)

const WIDTH = Dimensions.get('window').width 
export default class PopularCategoryScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[
                {id:1,name:'Soup Black Chicken',img:'./Images/soup.jpg',img_uri:'http://1.bp.blogspot.com/-QT7_eXH7Ek4/TmcKKNVv-HI/AAAAAAAAGCc/67ipwWUL2z4/s400/300745_10150277303621526_536581525_8438262_1203344248_n.jpg'},
                {id:2,name:'Fry',img:'./Images/fry.jpg',img_uri:'http://taidynasty.com/wp-content/uploads/2016/08/General-Tsos-Chicken.jpg?w=640'},
                {id:3,name:'Roast',img:'./Images/roast.jpg',img_uri:'http://eatdrinkpaleo.com.au/wp-content/uploads/2016/04/paleo-duck-pancakes_900-1.jpg'},
                {id:4,name:'Dessert',img:'./Images/dessert.jpg',img_uri:'http://s-yoolk-images.s3.amazonaws.com/kh/product_catalog/product_images/large/323130?1468418940'},
                {id:5,name:'Other',img:'./Images/other.jpg',img_uri:'http://s-yoolk-images.s3.amazonaws.com/kh/product_catalog/product_images/large/323130?1468418940'}, 
            ],
            catId: props.catId
        }
    }

    componentDidMount(){
        console.tron.log(this.state.catId)
    }

    handClickCategory=(item, index)=>{
        Actions.MainDetailFoodInfo(item)
    }

    _renderSoupItems=({item, index})=>{
        return(
            <View style={{width:'50%',paddingRight:5,paddingLeft:5,paddingBottom:10}}>
                <TouchableOpacity onPress={()=>this.handClickCategory(item, index)} style={{borderWidth:1,borderColor:'#d6d7da',borderTopLeftRadius:8,borderTopRightRadius:8}}>
                    <ImageBackground
                        style={{height:200}}
                        borderTopLeftRadius={8}
                        borderTopRightRadius={8}
                        source={{uri:item.img_uri}}
                    >
                        <View style={{width:'100%',marginTop:130,height:70,backgroundColor:'#FFFFFF',padding:5}}>
                            <Text style={{flex:2.5,color:'#707070',fontWeight:'bold'}}>{item.name}</Text>
                            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                                <Text style={{}}>{fIcon}{fIcon}{fIcon}{fIcon}{fIcon}</Text>
                                <Text style={{color:'#707070',fontSize:13}}>10 Views</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
            
        )
    }

    SoupCategoryScreen(){
        Actions.SoupCategoryScreen()
    }
    
    render() {
      return (
            <View style={{height:'100%',paddingBottom:10,backgroundColor:'#F2EFF8'}}>
                <View style={{width:'100%',height:100,borderBottomWidth:2,borderColor:'#d6d7da'}}>
                    <Swiper style={{}} autoplay={true} autoplayTimeout = {3.5} showsButtons={true}
                        dot={<View style={{width: 0, height: 0}} />}
                        activeDot={<View style={{width: 0, height: 0}} />}
                        prevButton={<Text style={{color:'#707070',fontSize:40}}>‹</Text>}
                        nextButton={<Text style={{color:'#707070',fontSize:40}}>›</Text>}
                    >
                        {
                            this.state.data.map((item, index)=>{
                                return(
                                    <View style={{}}>
                                        <View style={{height:100,backgroundColor:'#ffffff',padding:10}}>
                                            <View style={{flex:2.8}}>
                                                <Text style={{color:'#707070',fontWeight:'bold'}}>Soups</Text>
                                                <Text style={{color:'#707070'}}>Soup Black Chicken</Text>
                                            </View>
                                        </View>
                                    </View> 
                                )
                            })
                        }
                    </Swiper>
                </View>

            <ScrollView horizontal={false} style={{paddingLeft:5}}>
                <View style={{flexDirection:'row',justifyContent:'flex-start',padding:10}}>
                    <TouchableOpacity onPress={()=>this.SoupCategoryScreen()}><Text style={{fontWeight:'bold'}}><Text style={{fontWeight:'bold',color:'red',marginRight:5}}>Soup Categories</Text>{arrowIcon}</Text></TouchableOpacity>
                </View>
                <ScrollView horizontal={true}>
                    <View style={{flexDirection:'row'}}>
                        {
                            this.state.data.map((item, index)=>{
                                return(
                                    <View style={{width:180,paddingRight:5,paddingBottom:10}}>
                                        <TouchableOpacity onPress={()=>this.handClickCategory(item, index)} style={{borderWidth:1,borderColor:'#d6d7da',borderTopLeftRadius:8,borderTopRightRadius:8}}>
                                            <ImageBackground
                                                style={{height:150}}
                                                borderTopLeftRadius={8}
                                                borderTopRightRadius={8}
                                                source={{uri:item.img_uri}}
                                            >
                                                <View style={{width:'100%',marginTop:90,height:60,backgroundColor:'#FFFFFF',padding:5}}>
                                                    <Text style={{flex:2.5,color:'#707070',fontWeight:'bold'}}>{item.name}</Text>
                                                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                                                        <Text style={{}}>{fIcon}{fIcon}{fIcon}{fIcon}{fIcon}</Text>
                                                        <Text style={{color:'#707070',fontSize:13}}>10 Views</Text>
                                                    </View>
                                                </View>
                                            </ImageBackground>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })
                        }
                    </View>
                </ScrollView>

                <View style={{flexDirection:'row',justifyContent:'flex-start',padding:10}}>
                    <Text style={{fontWeight:'bold'}}><Text style={{fontWeight:'bold',color:'red',marginRight:5}}>Fry Categories</Text>{arrowIcon}</Text>
                </View>
                <ScrollView horizontal={true}>
                    <View style={{flexDirection:'row'}}>
                        {
                            this.state.data.map((item, index)=>{
                                return(
                                    <View style={{width:180,paddingRight:5,paddingBottom:10}}>
                                        <TouchableOpacity onPress={()=>this.handClickCategory(item, index)} style={{borderWidth:1,borderColor:'#d6d7da',borderTopLeftRadius:8,borderTopRightRadius:8}}>
                                            <ImageBackground
                                                style={{height:150}}
                                                borderTopLeftRadius={8}
                                                borderTopRightRadius={8}
                                                source={{uri:item.img_uri}}
                                            >
                                                <View style={{width:'100%',marginTop:90,height:60,backgroundColor:'#FFFFFF',padding:5}}>
                                                    <Text style={{flex:2.5,color:'#707070',fontWeight:'bold'}}>{item.name}</Text>
                                                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                                                        <Text style={{}}>{fIcon}{fIcon}{fIcon}{fIcon}{fIcon}</Text>
                                                        <Text style={{color:'#707070',fontSize:13}}>10 Views</Text>
                                                    </View>
                                                </View>
                                            </ImageBackground>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })
                        }
                    </View>
                </ScrollView>

                <View style={{flexDirection:'row',justifyContent:'flex-start',padding:10}}>
                    <Text style={{fontWeight:'bold'}}><Text style={{fontWeight:'bold',color:'red',marginRight:5}}>Roast Categories</Text>{arrowIcon}</Text>
                </View>
                <ScrollView horizontal={true}>
                    <View style={{flexDirection:'row'}}>
                        {
                            this.state.data.map((item, index)=>{
                                return(
                                    <View style={{width:180,paddingRight:5,paddingBottom:10}}>
                                        <TouchableOpacity onPress={()=>this.handClickCategory(item, index)} style={{borderWidth:1,borderColor:'#d6d7da',borderTopLeftRadius:8,borderTopRightRadius:8}}>
                                            <ImageBackground
                                                style={{height:150}}
                                                borderTopLeftRadius={8}
                                                borderTopRightRadius={8}
                                                source={{uri:item.img_uri}}
                                            >
                                                <View style={{width:'100%',marginTop:90,height:60,backgroundColor:'#FFFFFF',padding:5}}>
                                                    <Text style={{flex:2.5,color:'#707070',fontWeight:'bold'}}>{item.name}</Text>
                                                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                                                        <Text style={{}}>{fIcon}{fIcon}{fIcon}{fIcon}{fIcon}</Text>
                                                        <Text style={{color:'#707070',fontSize:13}}>10 Views</Text>
                                                    </View>
                                                </View>
                                            </ImageBackground>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })
                        }
                    </View>
                </ScrollView>

                <View style={{flexDirection:'row',justifyContent:'flex-start',padding:10}}>
                    <Text style={{fontWeight:'bold'}}><Text style={{fontWeight:'bold',color:'red',marginRight:5}}>Dessert Categories</Text>{arrowIcon}</Text>
                </View>
                <ScrollView horizontal={true}>
                    <View style={{flexDirection:'row'}}>
                        {
                            this.state.data.map((item, index)=>{
                                return(
                                    <View style={{width:180,paddingRight:5,paddingBottom:10}}>
                                        <TouchableOpacity onPress={()=>this.handClickCategory(item, index)} style={{borderWidth:1,borderColor:'#d6d7da',borderTopLeftRadius:8,borderTopRightRadius:8}}>
                                            <ImageBackground
                                                style={{height:150}}
                                                borderTopLeftRadius={8}
                                                borderTopRightRadius={8}
                                                source={{uri:item.img_uri}}
                                            >
                                                <View style={{width:'100%',marginTop:90,height:60,backgroundColor:'#FFFFFF',padding:5}}>
                                                    <Text style={{flex:2.5,color:'#707070',fontWeight:'bold'}}>{item.name}</Text>
                                                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                                                        <Text style={{}}>{fIcon}{fIcon}{fIcon}{fIcon}{fIcon}</Text>
                                                        <Text style={{color:'#707070',fontSize:13}}>10 Views</Text>
                                                    </View>
                                                </View>
                                            </ImageBackground>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })
                        }
                    </View>
                </ScrollView>

                <View style={{flexDirection:'row',justifyContent:'flex-start',padding:10}}>
                    <Text style={{fontWeight:'bold'}}><Text style={{fontWeight:'bold',color:'red',marginRight:5}}>Other Categories</Text>{arrowIcon}</Text>
                </View>
                <ScrollView horizontal={true}>
                    <View style={{flexDirection:'row'}}>
                        {
                            this.state.data.map((item, index)=>{
                                return(
                                    <View style={{width:180,paddingRight:5,paddingBottom:10}}>
                                        <TouchableOpacity onPress={()=>this.handClickCategory(item, index)} style={{borderWidth:1,borderColor:'#d6d7da',borderTopLeftRadius:8,borderTopRightRadius:8}}>
                                            <ImageBackground
                                                style={{height:150}}
                                                borderTopLeftRadius={8}
                                                borderTopRightRadius={8}
                                                source={{uri:item.img_uri}}
                                            >
                                                <View style={{width:'100%',marginTop:90,height:60,backgroundColor:'#FFFFFF',padding:5}}>
                                                    <Text style={{flex:2.5,color:'#707070',fontWeight:'bold'}}>{item.name}</Text>
                                                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                                                        <Text style={{}}>{fIcon}{fIcon}{fIcon}{fIcon}{fIcon}</Text>
                                                        <Text style={{color:'#707070',fontSize:13}}>10 Views</Text>
                                                    </View>
                                                </View>
                                            </ImageBackground>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })
                        }
                    </View>
                </ScrollView>
            </ScrollView>
        </View>

      );
    }
}
