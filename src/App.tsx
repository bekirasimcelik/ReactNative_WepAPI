import React from 'react';
import {SafeAreaView, Text, Button, View} from 'react-native';

import axios from 'axios';

async function fetchData() {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users',
  );
  console.log(response);
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
