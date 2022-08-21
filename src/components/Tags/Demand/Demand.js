import {View, Text} from 'react-native';
import React from 'react';
import styles from './DemandStyles';

const Demand = () => {
  return (
    <View style={styles.tagWrapper}>
      <Text style={styles.textStyle}>Auf Anfrage</Text>
    </View>
  );
};

export default Demand;
