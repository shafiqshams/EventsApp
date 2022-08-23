import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  infoWrapper: {
    display: 'flex',
    flex: 0.35,
    flexDirection: 'row',
    marginTop: 15,
  },
  textContainer: {
    flex: 0.85,
  },
  titleStyle: {
    color: colors.black01,
    fontFamily: 'OpenSans-Bold',
  },
  fontLarge: {
    fontSize: 20,
  },
  fontSmall: {
    fontSize: 18,
  },
  addressStyle: {
    color: colors.lightblue02,
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
  },
  iconContainer: {
    flex: 0.15,
    alignItems: 'flex-end',
  },
});
