import React, { Component } from 'react';
import { Platform, StyleSheet, View,Image,Text,ImageBackground,ScrollView,FlatList,TouchableOpacity,Alert,Dimensions } from 'react-native';
import {Actions} from 'react-native-router-flux';

const WIDTH = Dimensions.get('window').width
export default class DetailFoodInfo extends Component{
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
            Alert.alert("Soup")
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

    handleClose = () =>{
        Actions.pop();
    } 
    
    render() {
      return (
        <View style={{ width: '100%', height: '100%', flex: 1, backgroundColor:'#648CB4', padding: 14, paddingTop: 0, paddingBottom: 0}}>
            <View style={{alignItems:'center',justifyContent:'center', flexDirection: 'row', height: 10}}>
                <TouchableOpacity onPress={this.handleClose} style={{height: 50, width: 50, alignItems:'center',justifyContent:'center'}}>
                    <Text>Go</Text>
                </TouchableOpacity>
            </View>
            

        </View>
      );
    }
}
