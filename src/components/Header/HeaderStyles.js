import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  mainWrapper: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colors.white,
    height: 75,
    width: width - 40,
    marginHorizontal: 20,
  },
  headerContainer: {
    flex: 0.85,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  iconContainer: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
