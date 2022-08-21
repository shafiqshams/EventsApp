import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  boxWrapper: {
    flexDirection: 'row',
    marginTop: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textStyle: {
    alignItems: 'center',
    color: colors.grey04,
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    marginLeft: 5,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});
