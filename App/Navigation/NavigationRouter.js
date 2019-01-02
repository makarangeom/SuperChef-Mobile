import React,{Component} from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { connect } from 'react-redux'
import HeaderActions from '../Redux/HeaderRedux'
import LaunchScreen from "../Containers/LaunchScreen";
import HomeScreen from "../Containers/HomeScreen";
import MainCategoriesScreen from "../Containers/MainCategoriesScreen";
import SoupCategoryScreen from "../Containers/SoupCategoryScreen";
import MainDetailFoodInfo from "../Containers/MainDetailFoodInfo";
import DetailFoodInfo from "../Containers/DetailFoodInfo";
import TestModule from "../Containers/TestModule";

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
                    <Scene key = "LaunchScreen" component = {LaunchScreen} title = "LaunchScreen" hideNavBar={true}  />
                    <Scene key = "HomeScreen" component = {HomeScreen} title = "HomeScreen" hideNavBar={true}  />
                    <Scene initial={true} key = "MainCategoriesScreen" component = {MainCategoriesScreen} title = "MainCategoriesScreen" hideNavBar={true}  />
                    <Scene key = "SoupCategoryScreen" component = {SoupCategoryScreen} title = "SoupCategoryScreen" hideNavBar={true}  />
                    <Scene key = "MainDetailFoodInfo" component = {MainDetailFoodInfo} title = "MainDetailFoodInfo" hideNavBar={true}  />
                    <Scene key = "DetailFoodInfo" component = {DetailFoodInfo} title = "DetailFoodInfo" hideNavBar={true}  />
                    <Scene component = {TestModule} title = "TestModule" hideNavBar={true}  />
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