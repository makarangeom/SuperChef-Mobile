import React, { Component } from 'react';
import { Platform, StyleSheet, View,Image,Text,ImageBackground,ScrollView,FlatList,TouchableOpacity,Alert,Dimensions } from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome'
import DetailFood from './DetailFoodInfo';
const myIcon = (<Icon name="play-circle" size={50} color="yellow" backgroundColor="yellow" />)

const WIDTH = Dimensions.get('window').width 
export default class MainDetailFoodInfo extends Component{
    constructor(props){
        super(props);
        this.state={
            eachItem : 'test',
            data:[
                {id:1,name:'Soup Black Chicken',img:'./Images/soup.jpg',img_uri:'http://1.bp.blogspot.com/-QT7_eXH7Ek4/TmcKKNVv-HI/AAAAAAAAGCc/67ipwWUL2z4/s400/300745_10150277303621526_536581525_8438262_1203344248_n.jpg'},
                {id:2,name:'Fry',img:'./Images/fry.jpg',img_uri:'http://taidynasty.com/wp-content/uploads/2016/08/General-Tsos-Chicken.jpg?w=640'},
                {id:3,name:'Roast',img:'./Images/roast.jpg',img_uri:'http://eatdrinkpaleo.com.au/wp-content/uploads/2016/04/paleo-duck-pancakes_900-1.jpg'},
                {id:4,name:'Dessert',img:'./Images/dessert.jpg',img_uri:'http://s-yoolk-images.s3.amazonaws.com/kh/product_catalog/product_images/large/323130?1468418940'},
                {id:5,name:'Other',img:'./Images/other.jpg',img_uri:'http://s-yoolk-images.s3.amazonaws.com/kh/product_catalog/product_images/large/323130?1468418940'}, 
            ],
            
        }
    }

    componentDidMount(){
        console.tron.log(this.state.eachItem)
    }

    handClickCategory=(item, key)=>{
        Actions.DetailFoodInfo()
    }

    render() {
      return (
            <View style={{height:'100%',backgroundColor:'#F2EFF8'}}>
                <View style={{width:'100%',height:185,marginBottom:-5}}>
                    <View style={{}}>
                        <TouchableOpacity onPress={()=>this.handClickCategory(item, key)} style={{width:'100%'}}>
                            <ImageBackground
                                style={{width:'100%',height:180}}
                                source={{uri:'http://1.bp.blogspot.com/-QT7_eXH7Ek4/TmcKKNVv-HI/AAAAAAAAGCc/67ipwWUL2z4/s400/300745_10150277303621526_536581525_8438262_1203344248_n.jpg'}}
                            >
                                <View style={{width:'100%',height:180,backgroundColor:'rgba(0,0,0,.6)',justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{color:'#ffffff'}}>{myIcon}</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View> 
                </View>
                <DetailFood/>
            </View>

      );
    }
}
