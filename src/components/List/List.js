import {FlatList} from 'react-native';
import React, {useCallback} from 'react';
import VenueCard from '../VenueCard/VenueCard';

const List = ({data}) => {
  const displayVenueCard = useCallback(({item}) => {
    return <VenueCard venue={item} />;
  }, []);

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
