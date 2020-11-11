import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const HomeScreen = (navigation) => {
  return (
    <View style={styles.container}>
      <Text>Open up HomeScreen.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button onPress={() => navigation.navigate('Second')}
      title="Go to Second Screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
