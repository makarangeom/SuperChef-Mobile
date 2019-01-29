import React,{Component} from 'react';
import {View,Text,ScrollView,TouchableOpacity,TextInput,StyleSheet,Alert} from 'react-native';
import moment from 'moment';

const date = moment().format('h:mm:ss a')
const currentTime = moment(date,'hh:mm:ss').fromNow();
const currentDate = moment('28-01-2019','DD-MM-YYYY').fromNow();
export default class TestModule extends Component{
    constructor(props){
        super(props);
        this.state={
            hours:0,
            statuTime:'',
            routes: [
                { key: 'info', title: 'Info', date: '2:41:43 am' },
                { key: 'comment', title: 'Rate', date: '1:40:43 am' },
                { key: 'rate', title: 'Commemt', date: '2:30:00 am' },
            ],
        }
    }

    componentDidMount(){
        console.tron.log(date)
    }

    render(){
        return(
            <View style={{flex:1}}>
                <Text style={{fontSize:15,color:'black'}}>{currentDate}</Text>
                <Text style={{fontSize:15,color:'black'}}>{currentTime}</Text>
                <Text style={{fontSize:15,color:'black'}}>{date}</Text>
                {
                    this.state.routes.map((item, index)=>{
                        return(
                            <View style={{}}>
                                {
                                    0<1?
                                    <Text style={{fontSize:15,color:'black'}}>{moment(item.date,'hh:mm:ss').fromNow()}</Text>
                                    :
                                    <Text style={{fontSize:15,color:'black'}}>{moment('28-01-2019','DD-MM-YYYY').fromNow()}</Text>
                                }
                            </View>
                        )
                    })
                }
                <TouchableOpacity onPress={this}><Text style={{fontSize:15,color:'black',textAlign:'center'}}>Toch Me</Text></TouchableOpacity>
            </View>
        );
    }
}