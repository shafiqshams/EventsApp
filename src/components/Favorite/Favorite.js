import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './FavoriteStyles';
import OutlineHeart from '../../assets/icons-logo/outline-heart.svg';
import FilledHeart from '../../assets/icons-logo/filled-heart.svg';
import colors from '../../styles/colors';
import {useFavorite} from '../../context/FavoriteContext';
const Favorite = ({id}) => {
  const {favorites, setFavItem, removeFavItem} = useFavorite();
  const isFav = !!favorites.find(favs => favs.id === id);
  return (
    <TouchableOpacity
      style={[
        styles.iconTouchWrapper,
        isFav ? {backgroundColor: colors.red} : {backgroundColor: colors.white},
      ]}
      onPress={isFav ? () => removeFavItem(id) : () => setFavItem(id)}>
      {isFav ? (
        <FilledHeart width={28} height={28} />
      ) : (
        <OutlineHeart width={28} height={28} fill={colors.red} />
      )}
    </TouchableOpacity>
  );
};

export default Favorite;
