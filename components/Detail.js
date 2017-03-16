import React, {Component} from "react";
import{
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

var BASE_URL_IMAGE = "http://image.tmdb.org/t/p/";
var SIZE_IMAGE = "w185";

export default class Detail extends Component {
  constructor(props){
    super(props);

  }

  render(){
    var data = this.props.receiver;
    var resImage = BASE_URL_IMAGE + "/" + SIZE_IMAGE + "/" + data.poster_path;
    var overview = data.overview;
    var title = data.title;
    var vote = data.vote_average + "/10";
    var release = data.release_date;

    return(
      <View
        style = {styles.parent}>
        <View style = {styles.header}>
          <Text style = {styles.textHeader}>
            {title}
          </Text>
        </View>
        <View
          style = {styles.info}>
          <Image
            style = {styles.poster}
            source = {{uri: resImage}}
          />
          <View
            style = {styles.content}>
            <Text style = {styles.textStyle}>
              {release}
            </Text>
            <Text style = {styles.textStyle}>
              {vote}
            </Text>
            <TouchableOpacity style = {styles.button}>
              <Text style = {styles.textStyle}>
                Watch Video
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style = {styles.desciption}>
          <Text style = {styles.textDescription}>
            {overview}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },

  header: {
    height: 70,
    justifyContent: 'center',
    backgroundColor: '#00AE72',
  },

  textHeader: {
    fontSize: 22,
    textAlign: 'center',
  },

  info: {
    flexDirection: 'row',
    height: 270,
  },

  poster: {
    width: 100,
    height: 270,
    flex: 1,
  },

  textStyle: {
    fontSize: 17,
    margin: 10,
  },

  button: {
    backgroundColor: 'skyblue',
    color: 'black',
  },

  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
  },

  desciption: {
    flex: 1,
    marginTop: 20,
    paddingLeft: 8,
  },

  textDescription: {
    fontSize: 17,
  },

})
