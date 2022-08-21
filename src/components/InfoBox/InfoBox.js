import {View, Text} from 'react-native';
import React from 'react';
import styles from './InfoBoxStyles';
import colors from '../../styles/colors';
import UserIcon from '../../assets/icons-logo/user.svg';
import Catering from '../../assets/icons-logo/catering.svg';

const InfoBox = ({iconType, data}) => {
  return (
    <View style={styles.boxWrapper}>
      {iconType === 'user' ? (
        <UserIcon width={20} height={20} color={colors.black01} />
      ) : (
        <Catering width={20} height={20} color={colors.black01} />
      )}
      <Text style={styles.textStyle}>{data}</Text>
    </View>
  );
};

export default InfoBox;
