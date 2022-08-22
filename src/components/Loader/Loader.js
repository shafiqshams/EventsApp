import {View, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './LoaderStyles';
import colors from '../../styles/colors';

const Loader = () => {
  return (
    <View style={styles.loaderWrapper}>
      <ActivityIndicator size="large" color={colors.red} />
    </View>
  );
};

export default Loader;
