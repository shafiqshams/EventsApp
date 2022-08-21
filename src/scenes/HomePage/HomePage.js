import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import styles from './HomePageStyles';
import Header from '../../components/Header/Header';
import VenueCard from '../../components/VenueCard/VenueCard';

const HomePage = ({navigation}) => {
  useEffect(() => {
    console.log('HomePage Mounted');
  }, []);

  return (
    <View style={styles.mainWrapper}>
      <Header />
      <VenueCard />
    </View>
  );
};

export default HomePage;
