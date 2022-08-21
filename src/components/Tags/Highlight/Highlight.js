import {View, Text} from 'react-native';
import React from 'react';
import styles from './HighlightStyles';

const Highlight = () => {
  return (
    <View style={styles.tagWrapper}>
      <Text style={styles.textStyle}>Highlight</Text>
    </View>
  );
};

export default Highlight;
