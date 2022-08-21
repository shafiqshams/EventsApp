import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './FavoriteStyles';
import OutlineHeart from '../../assets/icons-logo/outline-heart.svg';
import FilledHeart from '../../assets/icons-logo/filled-heart.svg';
import colors from '../../styles/colors';

const Favorite = ({isFav, setFav}) => {
  return (
    <TouchableOpacity
      style={[
        styles.iconTouchWrapper,
        isFav ? {backgroundColor: colors.red} : {backgroundColor: colors.white},
      ]}
      onPress={isFav ? () => setFav(false) : () => setFav(true)}>
      {isFav ? (
        <FilledHeart width={28} height={28} />
      ) : (
        <OutlineHeart width={28} height={28} fill={colors.red} />
      )}
    </TouchableOpacity>
  );
};

export default Favorite;
