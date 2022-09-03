import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './FallbackStyles';

const Fallback = ({errorMessage}) => {
  return (
    <View style={styles.fallbackWrapper}>
      <Image
        source={require('../../assets/images/error.png')}
        style={styles.imageStyle}
      />
      <Text style={styles.textStyle}>{errorMessage}</Text>
    </View>
  );
};

export default Fallback;
