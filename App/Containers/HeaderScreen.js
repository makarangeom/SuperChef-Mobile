import React,{Component} from 'react';
import {View,Text,ScrollView,TouchableHighlight,TextInput,StyleSheet,TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'
import HeaderActions from '../Redux/HeaderRedux'
import { Header, Icon } from 'native-base';
import _ from 'lodash'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

class HeaderScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            statusHeader:true,
            statusIcon:true,
            title:"",
        }
    }

    componentDidMount(){
        if(this.props.headerData.fetching == false && this.props.headerData.error == null){
            this.setState({statusHeader: this.props.headerData.data.statusHeader, statusIcon: this.props.headerData.data.statusIcon, title: this.props.headerData.data.title });
        }
    }

    componentWillReceiveProps(newProps){
        if(newProps.headerData.fetching == false && newProps.headerData.error == null){
            this.setState({statusHeader: newProps.headerData.data.statusHeader, statusIcon: newProps.headerData.data.statusIcon, title: newProps.headerData.data.title });
        }
    }

    render(){
        let title_header = ""
        if(this.state.title){
            title_header = this.state.title.replace(/(\r\n\t|\n|\r\t)/gm,"");
            title_header = _.capitalize(title_header);
        }
        return(
            <View>
            {
                this.state.statusHeader?
                    <Header style={styles.headerStyle}>
                        <View style={{width: "10%"}}>
                            {this.state.statusIcon?
                                    <TouchableOpacity onPress={this.mainMenuScreen} style={styles.leftIcon}>
                                        <SimpleLineIcons name='menu' size={17} style={styles.iconColor} />
                                    </TouchableOpacity>
                                :
                                    <TouchableOpacity onPress={this.backtoPrevious} style={styles.leftIcon}>
                                        <FontAwesome name='angle-left' size={24} style={styles.iconColor} />
                                    </TouchableOpacity>
                            }
                        </View>

                        <View style={{width: "45%"}}>
                            <Text style={styles.title}>
                                {
                                    title_header!=''?
                                        title_header.length>19?
                                            title_header.substr(0, 15)+"..."
                                        :
                                            title_header
                                    :
                                        ''
                                }
                            </Text>
                        </View>

                        <View style={{width: "45%", flexDirection: 'row', justifyContent: 'space-around'}}>
                            <TouchableOpacity style={styles.rightIcon}>
                                <FontAwesome name='file-o' size={17} style={styles.iconColor} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.rightIcon}>
                                <FontAwesome name='envelope-o' size={20} style={styles.iconColor} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.rightIcon}>
                                <FontAwesome name='user-o' size={17} style={styles.iconColor} />
                            </TouchableOpacity>
                        </View>
                    </Header>
                    :
                    null
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    iconColor:
    {
        color: '#FFFFFF'
    },
    title:
    {
        fontSize:20,
        color: '#FFFFFF',
    },
    headerStyle: {
        backgroundColor: '#668BB5', 
        height: 55, 
        flexDirection: 'row', 
        alignItems:'center',
        justifyContent:'center'
    },
    leftIcon: {
        width: 30, 
        height: 30, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    rightIcon: {
        width: "25%", 
        justifyContent: 'center', 
        alignItems: 'center'
    }
  });

const mapStateToProps = (state) => {
    return {
      headerData: state.header,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setHeader: () => dispatch(HeaderActions.headerSuccess()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderScreen)