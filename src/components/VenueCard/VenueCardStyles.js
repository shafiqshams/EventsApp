import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  cardWrapper: {
    height: 350,
    width: width - 40,
    margin: 20,
    backgroundColor: 'red',
  },
  imageContainer: {
    flex: 0.65,
  },
  imageStyle: {
    height: 225,
    width: width - 40,
    resizeMode: 'cover',
    borderRadius: 6,
  },
  highlightTag: {
    position: 'absolute',
    top: 8,
    left: 8,
  },
  demandTag: {
    position: 'absolute',
    bottom: 2,
  },
});
