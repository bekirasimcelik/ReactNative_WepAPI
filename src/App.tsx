import React from 'react';
import {SafeAreaView, Text, Button, View} from 'react-native';

import axios from 'axios';

function fetchData() {
  console.log('1');
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      console.log(response);
      console.log('3');
    })
    .catch(error => console.log(error));
  console.log('2');
}

function App() {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello!</Text>
        <Button title="Fetch Data" onPress={fetchData} />
      </View>
    </SafeAreaView>
  );
}

export default App;
