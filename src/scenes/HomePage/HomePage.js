import {SafeAreaView, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './HomePageStyles';
import Header from '../../components/Header/Header';
import VenueCard from '../../components/VenueCard/VenueCard';
import {getVenues} from '../../services/events/events';

const HomePage = () => {
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    const fetchVenues = async () => {
      const {data} = await getVenues();
      setVenues(data);
    };

    fetchVenues();
  }, []);

  return (
    <SafeAreaView style={styles.mainWrapper}>
      <Header />
      <FlatList
        data={venues}
        renderItem={({item}) => <VenueCard venue={item} />}
        keyExtractor={item => `key-${item.id}`}
        bounces={false}
        showsVerticalScrollIndicator={false}
        // alwaysBounceVertical={false}
      />
    </SafeAreaView>
  );
};

export default HomePage;
