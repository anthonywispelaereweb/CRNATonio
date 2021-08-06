import Search from './Components/Search';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Navigation from './Navigation/Navigation';

export default function App() {
  return (
    <View style={styles.main_container}>
      <Text style={styles.title}>Application de recherche de film.</Text>
      <Search />
      {/* <Navigation /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop: 20
  },
  title: {
    textAlign: 'center',
  }
});
