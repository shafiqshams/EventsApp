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
import {useAxios} from '../../hooks/useAxios';
import Fallback from '../../components/Fallback/Fallback';
import {useToggle} from '../../hooks/useToggle';

const GET_VENUES = 'venues';
const HomePage = () => {
  // const [venues, setVenues] = useState([]);
  const [showFav, toggleFav] = useToggle();
  const {favorites} = useFavorite();
  const {response: venues, isLoading, fetchError} = useAxios(GET_VENUES);

  const getFavorites = () => {
    const favs = venues.filter(
      venue => !!favorites?.find(f => f.id === venue.id),
    );
    return favs;
  };

  const renderVenues = () => {
    return (
      <>
        {showFav && R.isEmpty(favorites) && <Empty />}
        <List data={showFav ? getFavorites() : venues} />
      </>
    );
  };

  return (
    <SafeAreaView style={styles.mainWrapper}>
      <Header showFav={showFav} onPress={toggleFav} />
      {isLoading && <Loader />}
      {fetchError ? <Fallback errorMessage={fetchError} /> : renderVenues()}
    </SafeAreaView>
  );
};

export default HomePage;
