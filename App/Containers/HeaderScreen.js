import React,{Component} from 'react';
import {View,Text,ScrollView,TouchableHighlight,TextInput,StyleSheet,TouchableOpacity,Alert} from 'react-native';
import { connect } from 'react-redux'
import HeaderActions from '../Redux/HeaderRedux'
import {Actions} from 'react-native-router-flux'
import { Header, Icon } from 'native-base';
import _ from 'lodash'

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

    mainCategoriesScreen(){
        Actions.MainCategoriesScreen();
    }

    mainMenuScreen(){
        Actions.MainMenuScreen();
    }

    popularCategoryScreen(){
        Actions.PopularCategoryScreen();
    }

    handOpenDrawer=()=>{
        Actions.drawerOpen()
        // this.setState({statusHeader: false , statusIcon: false, title: ''});
    }

    handBacktoPrevious(){
        Actions.pop();
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
                                    <TouchableOpacity onPress={this.handOpenDrawer} style={styles.leftIcon}>
                                        <Icon type='SimpleLineIcons' name='menu' style={{fontSize:20,color:'#fff'}} />
                                    </TouchableOpacity>
                                :
                                    <TouchableOpacity onPress={this.handBacktoPrevious} style={styles.leftIcon}>
                                        <Icon type='FontAwesome' name='angle-left' style={{fontSize:25,color:'#fff'}} />
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

                        <View style={{width: "45%", flexDirection: 'row', justifyContent: 'flex-end'}}>
                            <TouchableOpacity style={styles.rightIcon}>
                                <Icon type='MaterialIcons' onPress={this.mainCategoriesScreen} name='restaurant-menu' style={{fontSize:25,color:'#fff'}} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.rightIcon}>
                                <Icon type='FontAwesome' onPress={this.popularCategoryScreen} name='home' style={{fontSize:25,color:'#fff'}} />
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
        color: '#FFFFFF',
        fontWeight:'bold',
        fontSize:22
    },
    title:
    {
        fontSize:18,
        color: '#FFFFFF',
        paddingBottom:3
    },
    headerStyle: {
        paddingLeft:5,
        paddingRight:-13,
        backgroundColor: '#F90303', 
        height: 45, 
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
        setHeader: (data) => dispatch(HeaderActions.headerSuccess(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderScreen)