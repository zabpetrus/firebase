import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';

export default function AssetExample() {
  return (

    <View style={styles.container_fluid}>
      <Text style={styles.paragraph_fluid}>
        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>
      <Card>
        <View style={styles.container}>
          <Text style={styles.paragraph}>
               Local files and assets can be imported by dragging and dropping them into the editor
          </Text>
          <Image style={styles.logo} source={require('../assets/OIP.jpg')} />
        </View>        
      </Card>
    </View>    
  );
}

const styles = StyleSheet.create({
  container_fluid: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph_fluid: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});
