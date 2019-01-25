import React,{Component} from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { connect } from 'react-redux'
import HeaderActions from '../Redux/HeaderRedux'
import MainCategoriesScreen from "../Containers/MainCategoriesScreen";
import SoupCategoryScreen from "../Containers/SoupCategoryScreen";
import MainDetailFoodInfo from "../Containers/MainDetailFoodInfo";
import DetailFoodInfo from "../Containers/DetailFoodInfo";
import TestModule from "../Containers/TestModule";
import PopularCategoryScreen from "../Containers/PopularCategoryScreen";
import MainMenuScreen from "../Containers/MainMenuScreen";
import SettingScreen from "../Containers/SettingScreen";
import LoginScreen from "../Containers/LoginScreen"; 
import WelcomeScreen from "../Containers/WelcomeScreen";

class NavigationRouter extends Component{
    constructor(props){
        super(props);
        this.state={}
    }

    onEnter=(statusHeader, statusIcon, title)=>{
        this.props.setHeader({statusHeader: statusHeader , statusIcon: statusIcon, title: title})
    }

    render(){
        return(
            <Router>
                <Scene key = "root">
                    <Scene initial={true} key="PopularCategoryScreen" drawer contentComponent={MainMenuScreen} hideNavBar={true}>
                   		<Scene onEnter={()=>this.onEnter(true, true, 'Popular Food')} key="PopularCategoryScreen" component = {PopularCategoryScreen} hideNavBar={true} />
				    </Scene>
                    <Scene onEnter={()=>this.onEnter(false, false, '')} key = "MainMenuScreen" component = {MainMenuScreen} title = "MainMenuScreen" hideNavBar={true}  />
                    {/* <Scene onEnter={()=>this.onEnter(false, false, '')} key = "NavigationDrawer" component = {NavigationDrawer} title = "NavigationDrawer" hideNavBar={true}  /> */}
                    <Scene onEnter={()=>this.onEnter(false, false, '')} key = "MainCategoriesScreen" component = {MainCategoriesScreen} title = "MainCategoriesScreen" hideNavBar={true}  />
                    {/* <Scene onEnter={()=>this.onEnter(true, true, 'Soups')} key = "SoupCategoryScreen" component = {SoupCategoryScreen} title = "SoupCategoryScreen" hideNavBar={true}  /> */}
                    <Scene onEnter={()=>this.onEnter(true, false, 'Food Information Detail')} key = "MainDetailFoodInfo" component = {MainDetailFoodInfo} title = "MainDetailFoodInfo" hideNavBar={true}  />
                    <Scene onEnter={()=>this.onEnter(false, false, 'DetailFoodInfo')} key = "DetailFoodInfo" component = {DetailFoodInfo} title = "DetailFoodInfo" hideNavBar={true}  />
                    <Scene initial={true} onEnter={()=>this.onEnter(true, false, 'I am working at the office')} key = "TestModule" component = {TestModule} title = "TestModule" hideNavBar={true}  />
                    <Scene onEnter={()=>this.onEnter(true, false, 'Setting')} key = "SettingScreen" component = {SettingScreen} title = "TestModule" hideNavBar={true}  />
                    <Scene onEnter={()=>this.onEnter(false, false, '')} key = "LoginScreen" component = {LoginScreen} title = "LoginScreen" hideNavBar={true}  />
                    <Scene onEnter={()=>this.onEnter(false, false, '')} key = "WelcomeScreen" component = {WelcomeScreen} title = "WelcomeScreen" hideNavBar={true}  />
                    {/* <Scene key = "HeaderScreen" component = {HeaderScreen} title = "HeaderScreen" hideNavBar={true}  /> */}
                    <Scene key="SoupCategoryScreen" drawer contentComponent={MainMenuScreen} hideNavBar={true}>
                   		<Scene onEnter={()=>this.onEnter(true, true, 'Soups')} key="SoupCategoryScreen" component = {SoupCategoryScreen} hideNavBar={true} />
				    </Scene>
                    
                </Scene>
            </Router>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setHeader: (data) => dispatch(HeaderActions.setHeaderRequest(data)),
    }
  }
  
export default connect(null, mapDispatchToProps)(NavigationRouter) 