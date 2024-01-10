import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [age, setAge] = useState('');
  const [heartRateLimits, setHeartRateLimits] = useState('');


  function calculateHeartRate() {
    const lowerLimit = (220-age) * 0.65;
    const upperLimit = (220-age) * 0.85;
    setHeartRateLimits(lowerLimit + ' - ' + upperLimit);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Age</Text>
      <TextInput style={styles.text1} value={age} onChangeText={calculateHeartRate}/>
      <Text style={styles.text1}>Heart rate limits</Text>
      <Text style={styles.text1}>{heartRateLimits}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#012',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    color: '#fff',
    fontSize: 30,
  },
});
