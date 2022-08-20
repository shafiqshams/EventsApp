import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import styles from './HomePageStyles';

const HomePage = ({navigation}) => {
  useEffect(() => {
    console.log('HomePage Mounted');
  }, []);

  return (
    <View style={styles.mainWrapper}>
      <Text>Hello Home</Text>
    </View>
  );
};

export default HomePage;
