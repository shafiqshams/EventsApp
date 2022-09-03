import {View, ImageBackground} from 'react-native';
import React from 'react';
import styles from './VenueCardStyles';
import Highlight from '../Tags/Highlight/Highlight';
import Demand from '../Tags/Demand/Demand';
import Favorite from '../Favorite/Favorite';
import InfoCard from '../InfoCard/InfoCard';
import {getImagePath} from '../../utils/getImagePath';

const VenueCard = ({venue}) => {
  //Deep object destructuring
  const {
    id,
    files,
    subscription: {active},
    name,
    address: {address_line: addressName},
    catering: {type: cateringType},
    virtual_tour_url: tourIcon,
    min_pax: min,
    max_seated,
    max_standing,
  } = venue;
  const max = Math.max(max_seated, max_standing);
  const imageName = files[0].storage_name;

  return (
    <View style={styles.cardWrapper}>
      <ImageBackground
        imageStyle={styles.imageStyle}
        style={styles.imageContainer}
        source={{uri: getImagePath(imageName)}}>
        <View style={styles.highlightTag}>{active && <Highlight />}</View>
        <View style={styles.demandTag}>
          {/* Always visible for now */}
          <Demand />
        </View>
        <View style={styles.favoriteIcon}>
          <Favorite id={id} />
        </View>
      </ImageBackground>
      <InfoCard
        info={{
          name,
          addressName,
          tourIcon,
          min,
          max,
          cateringType,
        }}
      />
    </View>
  );
};

export default React.memo(VenueCard);
