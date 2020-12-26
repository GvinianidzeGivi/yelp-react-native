import React from 'react';
import { Button, View, Text } from 'react-native';
import SearchBar from '../components/SearchBar';

import Icon from 'react-native-vector-icons/dist/FontAwesome';

const HomeScreen = ({ navigation }) => {
return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Icon name="apple" size={30} color="#900" />
      <Icon name="android" size={30} color="#900" />

      <SearchBar />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
  }

export default HomeScreen;