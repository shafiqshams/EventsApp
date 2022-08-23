import {SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './HomePageStyles';
import R from 'ramda';
import Header from '../../components/Header/Header';
import {getVenues} from '../../services/events/events';
import Loader from '../../components/Loader/Loader';
import Empty from '../../components/Empty/Empty';
import {useFavorite} from '../../context/FavoriteContext';
import List from '../../components/List/List';

const HomePage = () => {
  const [venues, setVenues] = useState([]);
  const [showFav, setShowFav] = useState(false);
  const {favorites} = useFavorite();

  useEffect(() => {
    const fetchVenues = async () => {
      const {data} = await getVenues();
      setVenues(data);
    };

    fetchVenues();
  }, []);

  const getFavorites = () => {
    const favs = venues.filter(
      venue => !!favorites?.find(f => f.id === venue.id),
    );
    return favs;
  };

  const renderVenues = () => {
    return (
      <>
        {showFav && R.isEmpty(getFavorites()) && <Empty />}
        <List data={showFav ? getFavorites() : venues} />
      </>
    );
  };

  return (
    <SafeAreaView style={styles.mainWrapper}>
      <Header showFav={showFav} onPress={() => setShowFav(value => !value)} />
      {R.isEmpty(venues) ? <Loader /> : renderVenues()}
    </SafeAreaView>
  );
};

export default HomePage;
