import React, { Component } from 'react';
 
import { Platform, StyleSheet, View,Image,Text,ImageBackground,ScrollView,FlatList,TouchableOpacity,Alert } from 'react-native';
import {Actions} from 'react-native-router-flux'
 
export default class MainCategoriesScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[
                {id:1,name:'Popular',img:'./Images/soup.jpg',img_uri:'http://cambodialuxuryvacations.com/wp-content/uploads/2016/06/10-mon-ngon-Campuchia-5-Nom-banh-chok-696x523.jpg'},
                {id:2,name:'Soup',img:'./Images/soup.jpg',img_uri:'http://1.bp.blogspot.com/-QT7_eXH7Ek4/TmcKKNVv-HI/AAAAAAAAGCc/67ipwWUL2z4/s400/300745_10150277303621526_536581525_8438262_1203344248_n.jpg'},
                {id:3,name:'Fry',img:'./Images/fry.jpg',img_uri:'http://taidynasty.com/wp-content/uploads/2016/08/General-Tsos-Chicken.jpg?w=640'},
                {id:4,name:'Roast',img:'./Images/roast.jpg',img_uri:'http://search.chow.com/thumbnail/800/0/www.chowstatic.com/blog-media/2018/09/peking-duck-chowhound.jpg'},
                {id:5,name:'Dessert',img:'./Images/dessert.jpg',img_uri:'http://1.bp.blogspot.com/-VRtsZJyNFcU/U8ADdZoMbpI/AAAAAAAAIVM/OlteZDFvE9k/s400/SesameSeedBalls.jpg'},
                {id:6,name:'Other',img:'./Images/other.jpg',img_uri:'http://s-yoolk-images.s3.amazonaws.com/kh/product_catalog/product_images/large/323130?1468418940'}, 
            ],
        }
    }

    handClickCategory=(item, key)=>{
        if(item.id == 1){
            Actions.PopularCategoryScreen({catId: item.id})
        }
        else if(item.id == 2){
            Actions.SoupCategoryScreen({catId: item.id})
        }
        else if(item.id == 3){
            Alert.alert("Roast")
        }
        else if(item.id == 4){
            Alert.alert("Dessert")
        }
        else if(item.id == 5){
            Alert.alert("Other")
        }
        else if(item.id == 6){
            Alert.alert("Other")
        }
    }

    _renderListCategories=({item, key})=>{
        return(
            <TouchableOpacity onPress={()=>this.handClickCategory(item, key)} style={{width:'100%'}}>
                <ImageBackground
                    style={{width:'100%',height:120,marginBottom:10}}
                    source={{uri:item.img_uri}}
                >
                    <View style={{width: '100%', height: 120,backgroundColor:'rgba(0,0,0,.6)',justifyContent: 'center'}}>
                        <Text style={{textAlign:'center',color:'#ffffff',fontWeight:'bold'}}>{item.name}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
    }
    
    render() {
      return (
    
            <View style={{flex:1,paddingTop:10,paddingLeft:10,paddingRight:10}}>
                <ScrollView>
                    <FlatList
                        data={this.state.data}
                        renderItem={this._renderListCategories}
                        keyExtractor={(item, index) => index} 
                    />
                            {/* <ImageBackground
                                style={{width:'100%',height:120,marginBottom:10}}
                                source={require('./Images/soup.jpg')}
                                // source={{uri:'http://1.bp.blogspot.com/-QT7_eXH7Ek4/TmcKKNVv-HI/AAAAAAAAGCc/67ipwWUL2z4/s400/300745_10150277303621526_536581525_8438262_1203344248_n.jpg'}}
                            >
                                <View style={{width: '100%', height: 120,backgroundColor:'rgba(0,0,0,.6)',justifyContent: 'center'}}>
                                    <Text style={{textAlign:'center',color:'#ffffff',fontWeight:'bold'}}>Soups</Text>
                                </View>
                            </ImageBackground>
                            <ImageBackground
                                style={{width:'100%',height:120,marginBottom:10}}
                                source={require('./Images/fry.jpg')} 
                                // source = {{uri:'http://taidynasty.com/wp-content/uploads/2016/08/General-Tsos-Chicken.jpg?w=640'}}
                            >
                                <View style={{width: '100%', height: 120,backgroundColor:'rgba(0,0,0,.6)',justifyContent: 'center'}}>
                                    <Text style={{textAlign:'center',color:'#ffffff',fontWeight:'bold'}}>Fry</Text>
                                </View>
                            </ImageBackground>
                            <ImageBackground
                                style={{width:'100%',height:120,marginBottom:10}}
                                source={require('./Images/roast.jpg')} 
                                // source = {{uri:'http://eatdrinkpaleo.com.au/wp-content/uploads/2016/04/paleo-duck-pancakes_900-1.jpg'}}
                            >
                                <View style={{width: '100%', height: 120,backgroundColor:'rgba(0,0,0,.6)',justifyContent: 'center'}}>
                                    <Text style={{textAlign:'center',color:'#ffffff',fontWeight:'bold'}}>Roast</Text>
                                </View>
                            </ImageBackground>
                            <ImageBackground
                                style={{width:'100%',height:120,marginBottom:10}}
                                source={require('./Images/dessert.jpg')}  
                                // source = {{uri:'https://www.malis-restaurant.com/phnompenh/wp-content/uploads/2015/12/khmer-dessert-960x365.jpg'}}
                            >
                                <View style={{width: '100%', height: 120,backgroundColor:'rgba(0,0,0,.6)',justifyContent: 'center'}}>
                                    <Text style={{textAlign:'center',color:'#ffffff',fontWeight:'bold'}}>Dessert</Text>
                                </View>
                            </ImageBackground>
                            <ImageBackground
                                style={{width:'100%',height:120,marginBottom:10}}
                                source = {{uri:'https://lh4.googleusercontent.com/proxy/IOepd_REYkMHpKWDeZS7LKCc6Ol6fZVzwf4BOa1x_HPpwT5A9AgDEsJXdycI6hPxiE8_u4AArk9opO3FHPufZ8Cf_MaA6VmKfPMjVlVIV5_9F1U=s0-d'}}
                            >
                                <View style={{width: '100%', height: 120,backgroundColor:'rgba(0,0,0,.6)',justifyContent: 'center'}}>
                                    <Text style={{textAlign:'center',color:'#ffffff',fontWeight:'bold'}}>Popular</Text>
                                </View>
                            </ImageBackground>
                            <ImageBackground
                                style={{width:'100%',height:120,marginBottom:10}}
                                source={require('./Images/other.jpg')}
                                // source = {{uri:'http://s-yoolk-images.s3.amazonaws.com/kh/product_catalog/product_images/large/323130?1468418940'}}
                            >
                                <View style={{width: '100%', height: 120,backgroundColor:'rgba(0,0,0,.6)',justifyContent: 'center'}}>
                                    <Text style={{textAlign:'center',color:'#ffffff',fontWeight:'bold'}}>Other</Text>
                                </View>
                            </ImageBackground> */}
                        
                </ScrollView>
            </View>

      );
    }
   }
