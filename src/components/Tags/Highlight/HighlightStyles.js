import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  tagWrapper: {
    height: 26,
    width: 76,
    padding: 4,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.yellow,
  },
  textStyle: {
    color: colors.black01,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'OpenSans-Regular',
    letterSpacing: 0.2,
  },
});
