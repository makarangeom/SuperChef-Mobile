
import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import Video from "react-native-video";
import * as Progress from 'react-native-progress';

import Icon from "react-native-vector-icons/FontAwesome";

function secondsToTime(time) {
  return ~~(time / 60) + ":" + (time % 60 < 10 ? "0" : "") + time % 60;
}

export default class TestModule extends Component {
  state = {
    paused: false,
    progress: 0,
    duration: 0,
  };

  handleMainButtonTouch = () => {
    if (this.state.progress >= 1) {
      this.player.seek(0);
    }

    this.setState(state => {
      return {
        paused: !state.paused,
      };
    });
  };

  handleProgressPress = e => {
    const position = e.nativeEvent.locationX;
    const progress = (position / 250) * this.state.duration;
    const isPlaying = !this.state.paused;
    
    this.player.seek(progress);
  };

  handleProgress = progress => {
    this.setState({
      progress: progress.currentTime / this.state.duration,
    });
  };

  handleEnd = () => {
    this.setState({ paused: true });
  };

  handleLoad = meta => {
    this.setState({
      duration: meta.duration,
    });
  };

  render() {
    const { width } = Dimensions.get("window");
    const height = width * 0.5625;

    return (
      <View style={styles.container}>
        <View>
          <Video
            paused={this.state.paused}
            source={{uri: "https://r2---sn-npoeened.googlevideo.com/videoplayback?ipbits=0&expire=1549362839&source=youtube&sparams=clen,dur,ei,expire,gir,id,ip,ipbits,itag,lmt,mime,mip,mm,mn,ms,mv,pl,ratebypass,requiressl,source&itag=18&lmt=1452083292253282&ip=38.126.112.68&id=o-ALr8PTTRfc5A21vnvge6RDAxhpHsKz14Ax6SiExtN-pO&requiressl=yes&dur=233.615&pl=24&ratebypass=yes&fvip=2&ei=NxJZXLGiE4ThkgaIrpBw&c=WEB&mime=video%2Fmp4&signature=7043FB7EC6978EB6A804D1B45340DDCEBAA89060.2C3E0D7166E175E62BC30BAD7640FEDBCF9D1246&key=cms1&gir=yes&clen=9589412&mip=136.228.128.32&redirect_counter=1&cm2rm=sn-npoxu-2oie7e&req_id=62453039a5c8a3ee&cms_redirect=yes&mm=29&mn=sn-npoeened&ms=rdu&mt=1549341213&mv=m&ir=1&rr=12.mp4"}}
            style={{ width: "100%", height }}
            resizeMode="contain"
            onLoad={this.handleLoad}
            onProgress={this.handleProgress}
            onEnd={this.handleEnd}
            ref={ref => {
              this.player = ref;
            }}
          />
          <View style={styles.controls}>
            <TouchableOpacity onPress={this.handleMainButtonTouch}>
              <Icon name={!this.state.paused ? "pause" : "play"} size={20} color="#FFF" />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.handleProgressPress}>
              <View>
                <Progress.Bar
                  progress={this.state.progress}
                  color="#FFF"
                  unfilledColor="rgba(255,255,255,.5)"
                  borderColor="#FFF"
                  width={250}
                  height={8}
                />
              </View>
            </TouchableOpacity>

            <Text style={styles.duration}>
              {secondsToTime(Math.floor(this.state.progress * this.state.duration))}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 250,
  },
  controls: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: 48,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 10,
  },
  mainButton: {
    marginRight: 15,
  },
  duration: {
    color: "#FFF",
    marginLeft: 15,
  },
});
