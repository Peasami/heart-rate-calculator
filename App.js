import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [age, setAge] = useState('');
  const [heartRateLimits, setHeartRateLimits] = useState('');


  function calculateHeartRate() {
    const lowerLimit = (220-age.replace(',','.')) * 0.65;
    const upperLimit = (220-age.replace(',','.')) * 0.85;
    setHeartRateLimits(lowerLimit.toFixed(2) + ' - ' + upperLimit.toFixed(2));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Age</Text>
      <TextInput style={styles.text1} value={age} onChangeText={text => setAge(text)}
        keyboardType='decimal-pad'/>
      <Text style={styles.text1}>Heart rate limits</Text>
      <Text style={styles.text1}>{heartRateLimits}</Text>
      <Button title="Calculate" onPress={calculateHeartRate}></Button>
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
