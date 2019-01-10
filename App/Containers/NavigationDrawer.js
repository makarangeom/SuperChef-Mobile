//import * as React, {Component} from 'react';
import React, { Component } from 'react'
import { View,StyleSheet,Dimensions,Text,Alert,ScrollView,ImageBackground,TouchableOpacity,Animated,Image,TextInput } from 'react-native';
import { TabView, TabBar, SceneMap,TabViewAnimated } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/Entypo'
import Icons from 'react-native-vector-icons/MaterialIcons'
const fIcon = (<Icon name="star" size={20} color="#cccc00"/>)
const star = (<Icon name="star" size={30} color="#707070"/>)
import * as Progress from 'react-native-progress';
import Drawer from 'react-native-drawer'
import DetailFood from './MainMenuScreen';
import Main from './MainDetailFoodInfo';
const Window = Dimensions.get('window');
const drawerStyles = {
    drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
    main: {paddingLeft: 3},
  }
export default class NavigationDrawer extends Component {
    state={
        drawerOpen: false,
        drawerDisabled: false,
      };
      closeDrawer = () => {
        this._drawer.close()
      };
      openDrawer = () => {
        this._drawer.open()
      };
      render() {
        return (
          <Drawer
                ref={(ref) => this._drawer = ref}
                type="overlay"
                content={<DetailFood closeDrawer={this.closeDrawer} />}
                acceptDoubleTap={false}
                styles={{main: {shadowColor: "#000000", shadowOpacity: 0.3, shadowRadius: 15}}}
                onOpen={() => {
                    console.log('onopen')
                    this.setState({drawerOpen: true})
                }}
                onClose={() => {
                    console.log('onclose')
                    this.setState({drawerOpen: false})
                }}
                captureGestures={false}
                tweenDuration={50}
                negotiatePan={true}
                panThreshold={0.08}
                panOpenMask={0.35}
                disabled={this.state.drawerDisabled}
                type="overlay"
                tapToClose={true}
                openDrawerOffset={0.3} // 20% gap on the right side of drawer
                panCloseMask={0.2}
                closedDrawerOffset={-3}
                tweenHandler={(ratio) => ({ main: { opacity:(2-ratio)/2 } })}
            >
            {/* <Main /> */}
          </Drawer>
        )
      }
}
const styles = StyleSheet.create({
    container: {
      padding: 20,
      flex: 1,
    }
  })