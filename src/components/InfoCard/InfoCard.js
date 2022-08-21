import {View, Text} from 'react-native';
import React from 'react';
import styles from '../InfoCard/InfoCardStyles';
import TourIcon from '../../assets/icons-logo/virtual-tour.svg';

import colors from '../../styles/colors';
import InfoBox from '../InfoBox/InfoBox';

const InfoCard = ({info}) => {
  return (
    <View style={styles.infoWrapper}>
      <View style={styles.textContainer}>
        <Text style={styles.titleStyle}>{info.name}</Text>
        <Text style={styles.addressStyle}>{info.addressName}</Text>
        <InfoBox iconType={'user'} data={`${info.min} - ${info.max}`} />
        <InfoBox iconType={'catering'} data={info.cateringType} />
      </View>
      {info.tourIcon && (
        <View style={styles.iconContainer}>
          <TourIcon width={28} height={28} fill={colors.grey02} />
        </View>
      )}
    </View>
  );
};

export default InfoCard;
