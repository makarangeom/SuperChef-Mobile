import React,{Component} from 'react';
import { View,StyleSheet,Dimensions,Text,Alert,ScrollView,ImageBackground,TouchableOpacity,Animated,Image,TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Window = Dimensions.get('window');
export default class name extends Component{
    constructor(props){
        super(props);
        this.state={
            timer: 1
        }
    }

    componentDidMount(){
        this.interval = setInterval(()=>{
            this.setState({timer: this.state.timer + 1});
        },1000)
    }

    changeScreen=()=>{
        clearInterval(this.interval);
        Actions.PopularCategoryScreen()
    }

    render(){
        return(
            <View style={{flex:1}}>
                {
                    this.state.timer<4?
                        <ImageBackground
                            style={{height:Window.height}}
                            resizeMode= 'cover'
                            borderTopLeftRadius={8}
                            borderTopRightRadius={8}
                            source={require('./Images/splashscreen2.jpg')}
                        >
                            <View style={{flex:1,width:Window.width,height:Window.height,backgroundColor:'rgba(0,0,0,.4)',}}>
                                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontSize:15,color:'black'}}>Welcome</Text>                                    
                                </View>
                            </View>
                        </ImageBackground>
                    :
                        this.changeScreen()
                }
                
                    
            </View>
        );
    }
}