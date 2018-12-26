import React, { Component } from 'react';
import { Platform, StyleSheet, View,Image,Text,ImageBackground,ScrollView,FlatList,TouchableOpacity,Alert,Dimensions } from 'react-native';
import {Actions} from 'react-native-router-flux';

const WIDTH = Dimensions.get('window').width
export default class SoupCategoryScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[
                {id:1,name:'Soup',img:'./Images/soup.jpg',img_uri:'http://1.bp.blogspot.com/-QT7_eXH7Ek4/TmcKKNVv-HI/AAAAAAAAGCc/67ipwWUL2z4/s400/300745_10150277303621526_536581525_8438262_1203344248_n.jpg'},
                {id:2,name:'Fry',img:'./Images/fry.jpg',img_uri:'http://taidynasty.com/wp-content/uploads/2016/08/General-Tsos-Chicken.jpg?w=640'},
                {id:3,name:'Roast',img:'./Images/roast.jpg',img_uri:'http://eatdrinkpaleo.com.au/wp-content/uploads/2016/04/paleo-duck-pancakes_900-1.jpg'},
                {id:4,name:'Dessert',img:'./Images/dessert.jpg',img_uri:'http://s-yoolk-images.s3.amazonaws.com/kh/product_catalog/product_images/large/323130?1468418940'},
                {id:5,name:'Other',img:'./Images/other.jpg',img_uri:'http://s-yoolk-images.s3.amazonaws.com/kh/product_catalog/product_images/large/323130?1468418940'}, 
            ],
        }
    }

    handClickCategory=(item, key)=>{
        if(item.id == 1){
            Actions.DetailFoodInfo()
        }
        else if(item.id == 2){
            Alert.alert("Fry")
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
                        <View style={{borderTopLeftRadius:8,borderTopRightRadius:8,width:'100%',height:180,backgroundColor:'rgba(0,0,0,.6)',justifyContent: 'center'}}>
                            <Text style={{textAlign:'center',color:'#ffffff',fontWeight:'bold'}}>{item.name}</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
            
        )
    }
    
    render() {
      return (
            <View style={{height:'100%',paddingBottom:10}}>
                <View style={{}}>
                    <ImageBackground
                        style={{width:'100%',height:180}}
                        // source={require('./Images/soup.jpg')}
                        source={{uri:'http://1.bp.blogspot.com/-QT7_eXH7Ek4/TmcKKNVv-HI/AAAAAAAAGCc/67ipwWUL2z4/s400/300745_10150277303621526_536581525_8438262_1203344248_n.jpg'}}
                    >
                        <View style={{marginTop:100,width:'100%',height:80,backgroundColor:'rgba(0,0,0,.6)',padding:10}}>
                            <Text style={{color:'#ffffff',fontWeight:'bold'}}>Soups</Text>
                            <Text style={{color:'#ffffff'}}>Soup Black Chicken</Text>
                        </View>
                    </ImageBackground>
                </View>

                <ScrollView horizontal={false} style={{paddingTop:10,paddingLeft:5,paddingRight:5}}>
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
