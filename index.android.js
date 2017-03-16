import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';

import Main from "./components/Main.js";
import Detail from "./components/Detail.js";

export default class ThePopularMovieApp extends Component {
  constructor(props){
    super(props);
  }

  renderScene(route, navigator){
    switch (route.name) {
      case 'main':
        return (
          <Main
            onClick = {
              (data) => {
                navigator.push(
                  {
                    name: 'detail',
                    passProps: {movie: data},
                  }
                )
              }
            }
          />
        )

      case 'detail':
        return(
          <Detail
            receiver = {route.passProps.movie}
          />
        )

    }
  }

  render() {
    return (
      <Navigator
        initialRoute = {{name: "main"}}
        renderScene = {this.renderScene}
      />
    )
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('ThePopularMovieApp', () => ThePopularMovieApp);
