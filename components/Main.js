import React, {Component} from "react";
import{
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import axios from 'axios';

import GridView from 'react-native-grid-view';

var MOVIES_PER_ROW = 3;
var BASE_URL_IMAGE = "http://image.tmdb.org/t/p/";
var SIZE_IMAGE = "w185";
var BASE_URL = "http://api.themoviedb.org/3";
var MOVE_PARAMS = "movie";
var TYPE_PARAMS = "popular";
var APIKEY = "5f367c06670ce8648e31b20fd81bf1f5";
var APIKEY_PARAMS = "api_key";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: null,
      movie: null,
    }
    this.getMovieFromAPI = this.getMovieFromAPI.bind(this)
  }

  async getMovieFromAPI(){
    const app = this;
    var URL = BASE_URL + "/" + MOVE_PARAMS + "/" + TYPE_PARAMS + "?" + APIKEY_PARAMS + "=" + APIKEY;
    try {
      const result = await axios.get(URL);
      app.setState({
        dataSource: result.data.results,
      })
    } catch (e) {
      throw e;
    }

  }

  renderElement = (item) => {
    var resImage = BASE_URL_IMAGE + "/" + SIZE_IMAGE + "/" + item.poster_path;
    console.log(resImage);

    return(
      <TouchableOpacity
        onPress = {() => {
          this.props.onClick(item)
        }}
        style = {styles.parent}>
        <Image
          source = {{ uri: resImage }}
          style = {styles.thumbnail}
        />
        <Text
          style = {styles.title}>
          {item.title}
        </Text>
      </TouchableOpacity>
    )
  }
  componentDidMount() {
    this.getMovieFromAPI();
  }
  render(){
    if (!this.state.dataSource) {
      return (
        <Text>Loading</Text>
      )
    }
    console.log(this.state.dataSource)
    return(

      <GridView
        items = {this.state.dataSource}
        itemsPerRow = {2}
        renderItem = {this.renderElement}
        style = {styles.gridview}
      />
    )
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingBottom: 5,
  },

  thumbnail: {
    width: 200,
    height: 300,
  },

  title: {
    backgroundColor: "skyblue",
    fontSize: 17,
    width: 200,
    height: 40,
    textAlign: 'center',
  },
  gridview: {

  },
});
