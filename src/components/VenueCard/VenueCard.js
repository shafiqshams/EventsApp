import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import styles from './VenueCardStyles';
import Highlight from '../Tags/Highlight/Highlight';
import Demand from '../Tags/Demand/Demand';

const imagePath = '../../assets/images/colonge.png';

const VenueCard = () => {
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
      </ImageBackground>
    </View>
  );
};

export default VenueCard;
