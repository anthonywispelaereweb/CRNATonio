// Components/FilmItem.js

import React from "react";
import { StyleSheet, View, Text, Image ,TouchableOpacity } from "react-native";
import {getImageFromApi} from '../API/TMDBApi'

class FilmItem extends React.Component {
  displayDescription(description){
    if (description.length == 0) {
      return 'Pas de descrption ! '
    } else {
      return description
    }

  }
  render() {
    const { film, displayDetailForFilm } = this.props
    return (
      <TouchableOpacity style={styles.main_container} onPress={() => displayDetailForFilm(film.id)}>
        <Image style={styles.image} source={{ uri: getImageFromApi(film.poster_path) }} />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{film.title}</Text>
            <Text style={styles.vote_text}>{film.vote_average}</Text>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text} numberOfLines={6}>
              {this.displayDescription(film.overview)}
            </Text>
          </View>
          <View style={styles.date_container}>
            <Text style={styles.date_text}>Sorti le {film.release_date}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: "row",
    borderColor: "#000000",
		borderWidth: 1,
		marginTop: 15,
		padding: 5,
		borderRadius: 5,
		
  },
  image: {
    width: 120,
    height: 170,
    margin: 5,
    backgroundColor: "gray",
  },
  content_container: {
    flex: 1,
    margin: 5,
  },
  header_container: {
    flex: 3,
    flexDirection: "row",
  },
  title_text: {
    fontWeight: "bold",
    fontSize: 16,
    flex: 1,
    flexWrap: "wrap",
    paddingRight: 5,
  },
  vote_text: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#666666",
  },
  description_container: {
    flex: 7,
  },
  description_text: {
    fontStyle: "italic",
	
    color: "#666666",
  },
  date_container: {
    flex: 1,
  },
  date_text: {
    textAlign: "right",
    fontSize: 14,
  },
});

export default FilmItem;
