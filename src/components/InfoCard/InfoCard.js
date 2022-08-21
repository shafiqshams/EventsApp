import {View, Text} from 'react-native';
import React from 'react';
import styles from '../InfoCard/InfoCardStyles';
import TourIcon from '../../assets/icons-logo/virtual-tour.svg';

import colors from '../../styles/colors';
import InfoBox from '../InfoBox/InfoBox';

const InfoCard = () => {
  return (
    <View style={styles.infoWrapper}>
      <View style={styles.textContainer}>
        <Text style={styles.titleStyle}>THE VIEW COLOGNE</Text>
        <Text style={styles.addressStyle}>50679 Koln, Deutschland</Text>
        <InfoBox iconType={'user'} data={'10 - 150'} />
        <InfoBox iconType={'catering'} data={'Partner'} />
      </View>
      <View style={styles.iconContainer}>
        <TourIcon width={28} height={28} fill={colors.grey02} />
      </View>
    </View>
  );
};

export default InfoCard;
