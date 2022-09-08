import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('window');

const globalStyles = StyleSheet.create({
  globalWidth: {
    width: width - 40,
  },
  globalMargin: {
    marginHorizontal: 20,
  },

  // OpenSansItalic: {
  //   fontFamily:
  //     Platform.OS === 'ios' ? 'OpenSans-Italic' : 'OpenSans-RegularItalic',
  // },
});

export default globalStyles;
