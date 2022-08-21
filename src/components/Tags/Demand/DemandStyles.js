import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  tagWrapper: {
    height: 34,
    width: 112,
    padding: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightblue01,
  },
  textStyle: {
    color: colors.white,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'OpenSans-Bold',
    letterSpacing: 0.2,
  },
});
