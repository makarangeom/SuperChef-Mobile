import React,{Component} from 'react';
import {View,Text,ScrollView,TouchableOpacity,FlatList,TextInput,StyleSheet,Alert,Dimensions} from 'react-native';
import {Actions} from 'react-native-router-flux'

const WIDTH = Dimensions.get('window').width
export default class HomeScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[
                {id:1,name:'RECEIPT STOCK COLLECTED'},
                {id:2,name:'RECEIPT STOCK COLLECTED'},
                {id:3,name:'RECEIPT STOCK RETURNED'},
                {id:4,name:'WEBVIEW'},
                {id:5,name:'GOOGL ADMOB'},
            ],
        }
    }

    handClickButton=(item, key)=>{
        if(item.id==1){
            Actions.PrintStockCollectedScreen()
        }
        else if(item.id==2){
            Actions.PrintStockReturnedScreen()
        }
        else if(item.id==3){
            Actions.PrintStockReturnedOnlyScreen()
        }
        else if(item.id==4){
            Actions.WebViewTest()
        }
        else if(item.id==5){
            Actions.GoogleAdmob()
        }
    }

    HomeScreen=()=>{
        Actions.HomeScreen()
    }

    _renderListItems=({item, key})=>{
        return(
            <TouchableOpacity onPress={()=>this.handClickButton(item, key)} style={{margin:5,justifyContent:'center' ,width: '30%',height:WIDTH/4,backgroundColor:'#648CB4',borderWidth: 1, borderColor: '#648CB4'}}>
                <Text style={{fontSize:15,color:'#fff',justifyContent:'center',textAlign:'center'}}>{item.name}</Text>
            </TouchableOpacity>
            // <TouchableOpacity onPress={()=>this.handClickButton(item, key)} style={{height:50,backgroundColor:'#747474',alignItems:'center',justifyContent:'center',marginBottom:20}}><Text style={{fontSize:14,color:'#FFFFFF',fontWeight:'bold'}}>{item.name}</Text></TouchableOpacity>
        )
    }

    render(){
        return(
            <View style={{flex: 3,padding:20,marginTop:10}}>
                <FlatList
                    data={this.state.data}
                    numColumns={3}
                    renderItem={this._renderListItems}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}