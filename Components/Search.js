import React from "react";
import { StyleSheet,Text, TextInput, View, Button, FlatList } from "react-native";
import films from "./../Helpers/filmsData";

class Search extends React.Component {
  render() {
    return (
      <View style={styles.customCtnInput}>
        <TextInput style={styles.textinput} placeholder="Titre du film" />
        <Button style={styles.btn} title="Rechercher" onPress={() => {}} />

        <FlatList
          data={films}
		  keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Text>{item.title}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  customCtnInput: {
    marginTop: 50,
    marginLeft: 5,
    marginRight: 5,
    alignItems: "center",
    display: "flex",
    height: 80,
	flex:1
  },
  textinput: {
    margin: 5,
    padding: 5,
    height: 50,
    borderColor: "#000000",
    borderWidth: 1,
    paddingLeft: 5,
  },
  btn: {
    height: 50,
  },
});

export default Search;
