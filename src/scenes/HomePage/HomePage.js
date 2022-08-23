import {SafeAreaView, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './HomePageStyles';
import R from 'ramda';
import Header from '../../components/Header/Header';
import VenueCard from '../../components/VenueCard/VenueCard';
import {getVenues} from '../../services/events/events';
import Loader from '../../components/Loader/Loader';
// import useFavorite from '../../hooks/useFavorite';
import Empty from '../../components/Empty/Empty';
import {useFavorite} from '../../context/FavoriteContext';

const HomePage = () => {
  const [venues, setVenues] = useState([]);
  // const [favorites, {setFavItem, removeFavItem}] = useFavorite();
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

  const displayVenueCard = ({item}) => {
    return <VenueCard venue={item} />;
  };

  const renderVenues = () => {
    return (
      <>
        {showFav && R.isEmpty(getFavorites()) && <Empty />}
        <FlatList
          data={showFav ? getFavorites() : venues}
          renderItem={displayVenueCard}
          keyExtractor={item => `key-${item.id}`}
          bounces={false}
          showsVerticalScrollIndicator={false}
        />
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
