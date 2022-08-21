import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  lineWrapper: {
    width: width,
    borderWidth: 0.2,
    borderColor: colors.grey03,
  },
});
