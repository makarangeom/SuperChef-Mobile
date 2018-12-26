import React,{Component} from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LaunchScreen from "../Containers/LaunchScreen";
import HomeScreen from "../Containers/HomeScreen";
import MainCategoriesScreen from "../Containers/MainCategoriesScreen";

export default class NavigationRouter extends Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <Router>
                <Scene key = "root">
                    <Scene key = "LaunchScreen" component = {LaunchScreen} title = "LaunchScreen" hideNavBar={true}  />
                    <Scene key = "HomeScreen" component = {HomeScreen} title = "HomeScreen" hideNavBar={true}  />
                    <Scene initial={true} key = "MainCategoriesScreen" component = {MainCategoriesScreen} title = "MainCategoriesScreen" hideNavBar={true}  />
                </Scene>
            </Router>
        );
    }
}