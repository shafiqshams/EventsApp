import {SafeAreaView, FlatList} from 'react-native';
import React, {useEffect, useState, useReducer} from 'react';
import styles from './HomePageStyles';
import R from 'ramda';
import Header from '../../components/Header/Header';
import VenueCard from '../../components/VenueCard/VenueCard';
import {getVenues} from '../../services/events/events';
import Loader from '../../components/Loader/Loader';
import useFavorite from '../../hooks/useFavorite';

const HomePage = () => {
  const [venues, setVenues] = useState([]);
  const [favorites, {setFavItem, removeFavItem, getFavorites}] = useFavorite();

  useEffect(() => {
    const fetchVenues = async () => {
      const {data} = await getVenues();
      setVenues(data);
    };

    fetchVenues();
  }, []);

  const addToFavorite = id => {
    setFavItem(id);
  };

  const removeFavorite = id => {
    removeFavItem(id);
  };

  return (
    <SafeAreaView style={styles.mainWrapper}>
      <Header />
      {R.isEmpty(venues) ? (
        <Loader />
      ) : (
        <FlatList
          data={venues}
          renderItem={({item}) => (
            <VenueCard
              isFav={!!favorites.find(favs => favs.id === item.id)}
              venue={item}
              setFavItem={addToFavorite}
              removeFavItem={removeFavorite}
            />
          )}
          keyExtractor={item => `key-${item.id}`}
          bounces={false}
          showsVerticalScrollIndicator={false}
          // alwaysBounceVertical={false}
        />
      )}
    </SafeAreaView>
  );
};

export default HomePage;
