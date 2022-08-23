import {View, Image} from 'react-native';
import React from 'react';
import styles from './EmptyStyles';

const Empty = () => {
  return (
    <View style={styles.emptyWrapper}>
      <Image
        source={require('../../assets/images/empty.png')}
        style={styles.imageStyle}
      />
    </View>
  );
};

export default Empty;
