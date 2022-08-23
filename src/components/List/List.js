import {FlatList} from 'react-native';
import React from 'react';
import VenueCard from '../VenueCard/VenueCard';

const List = ({data}) => {
  const displayVenueCard = ({item}) => {
    return <VenueCard venue={item} />;
  };

  // const renderItem = useCallback(({item}) => displayVenueCard({item}), []);

  return (
    <FlatList
      data={data}
      renderItem={displayVenueCard}
      keyExtractor={item => `key-${item.id}`}
      bounces={false}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default List;
