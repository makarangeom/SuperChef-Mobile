import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = (<Icon name="rocket" size={30} color="#900" />)

export default class TestModule extends Component {
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

    render(){
        return (
            <View style={{height:135}}>
                <Swiper style={{}} autoplay={true} autoplayTimeout = {2.5}
                    dot={<View style={{backgroundColor: 'rgba(255,255,255,.3)', width: 10, height: 10, borderRadius:5, marginLeft:5, marginRight:5}} />}
                    activeDot={<View style={{backgroundColor: 'red', width: 10, height: 10, borderRadius:5, marginLeft:5, marginRight:5}} />}
                >
                    {
                        this.state.data.map((item, index)=>{
                            return(
                                <View style={{}}>
                                    <TouchableOpacity onPress={()=>this.handClickCategory()} style={{width:'100%'}}>
                                        <ImageBackground
                                            style={{width:'100%',height:120,marginBottom:10}}
                                            source={{uri:item.img_uri}}
                                        >
                                            <View style={{width: '100%', height: 120,backgroundColor:'rgba(0,0,0,.6)',justifyContent: 'center'}}>
                                                <Text style={{textAlign:'center',color:'#ffffff',fontWeight:'bold'}}>{myIcon}{item.name}</Text>
                                            </View>
                                        </ImageBackground>
                                    </TouchableOpacity>
                                </View> 
                            )
                        })
                    }
                </Swiper>
            </View>
        );
    }
}

const styles = StyleSheet.create({})