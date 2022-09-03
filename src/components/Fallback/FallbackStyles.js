import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  fallbackWrapper: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'flex-start',
  },
  imageStyle: {
    width: width,
    resizeMode: 'contain',
  },
  textStyle: {
    textAlign: 'center',
    color: colors.red,
    fontSize: 28,
    fontFamily: 'OpenSans-Bold',
  },
});
