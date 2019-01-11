import React,{Component} from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { connect } from 'react-redux'
import HeaderActions from '../Redux/HeaderRedux'
import MainCategoriesScreen from "../Containers/MainCategoriesScreen";
import SoupCategoryScreen from "../Containers/SoupCategoryScreen";
import MainDetailFoodInfo from "../Containers/MainDetailFoodInfo";
import DetailFoodInfo from "../Containers/DetailFoodInfo";
import TestModule from "../Containers/TestModule";
import HeaderScreen from "../Containers/HeaderScreen";
import PopularCategoryScreen from "../Containers/PopularCategoryScreen";
import MainMenuScreen from "../Containers/MainMenuScreen";
import NavigationDrawer from "../Containers/NavigationDrawer";

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
                    <Scene onEnter={()=>this.onEnter(false, false, '')} key = "MainMenuScreen" component = {MainMenuScreen} title = "MainMenuScreen" hideNavBar={true}  />
                    {/* <Scene onEnter={()=>this.onEnter(false, false, '')} key = "NavigationDrawer" component = {NavigationDrawer} title = "NavigationDrawer" hideNavBar={true}  /> */}
                    <Scene onEnter={()=>this.onEnter(false, false, '')} key = "MainCategoriesScreen" component = {MainCategoriesScreen} title = "MainCategoriesScreen" hideNavBar={true}  />
                    <Scene onEnter={()=>this.onEnter(true, true, 'Soups')} key = "SoupCategoryScreen" component = {SoupCategoryScreen} title = "SoupCategoryScreen" hideNavBar={true}  />
                    <Scene onEnter={()=>this.onEnter(true, false, 'Food Information Detail')} key = "MainDetailFoodInfo" component = {MainDetailFoodInfo} title = "MainDetailFoodInfo" hideNavBar={true}  />
                    <Scene onEnter={()=>this.onEnter(false, false, 'DetailFoodInfo')} key = "DetailFoodInfo" component = {DetailFoodInfo} title = "DetailFoodInfo" hideNavBar={true}  />
                    <Scene onEnter={()=>this.onEnter(true, false, 'I am working at the office')} key = "TestModule" component = {TestModule} title = "TestModule" hideNavBar={true}  />
                    <Scene onEnter={()=>this.onEnter(true, false, 'I am working at the office')} key = "HeaderScreen" component = {HeaderScreen} title = "HeaderScreen" hideNavBar={true}  />
                    {/* <Scene onEnter={()=>this.onEnter(true, true, 'Popular Food')} key = "PopularCategoryScreen" component = {PopularCategoryScreen} title = "PopularCategoryScreen" hideNavBar={true}  /> */}
                    <Scene initial={true} key="drawer" drawer contentComponent={MainMenuScreen} hideNavBar={true}>
                   		<Scene onEnter={()=>this.onEnter(true, true, 'Popular Food')} key="PopularCategoryScreen" component = {PopularCategoryScreen} hideNavBar={true} />
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