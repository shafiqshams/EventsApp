import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  mainWrapper: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.white,
    marginTop: 20,
  },
});
