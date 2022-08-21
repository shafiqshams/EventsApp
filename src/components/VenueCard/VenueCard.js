import {View, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import styles from './VenueCardStyles';
import Highlight from '../Tags/Highlight/Highlight';
import Demand from '../Tags/Demand/Demand';
import Favorite from '../Favorite/Favorite';
import InfoCard from '../InfoCard/InfoCard';
const imagePath = '../../assets/images/colonge.png';

const VenueCard = () => {
  const [isFav, setFav] = useState(false);

  return (
    <View style={styles.cardWrapper}>
      <ImageBackground
        imageStyle={styles.imageStyle}
        style={styles.imageContainer}
        source={require(imagePath)}>
        <View style={styles.highlightTag}>
          <Highlight />
        </View>
        <View style={styles.demandTag}>
          <Demand />
        </View>
        <View style={styles.favoriteIcon}>
          <Favorite isFav={isFav} setFav={setFav} />
        </View>
      </ImageBackground>
      <InfoCard />
    </View>
  );
};

export default VenueCard;
