import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './HeaderStyles';
import HeaderTitle from '../../assets/icons-logo/eventlocations.svg';
import Bookmark from '../../assets/icons-logo/bookmarks.svg';
import Back from '../../assets/icons-logo/arrow-back.svg';

import Line from '../Line/Line';
import colors from '../../styles/colors';

const Header = ({showFav, onPress}) => {
  return (
    <>
      <View style={styles.mainWrapper}>
        <View style={styles.headerContainer}>
          <HeaderTitle width={140} height={75} color={colors.black01} />
        </View>
        <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
          {showFav ? (
            <Back width={28} height={28} color={colors.black01} />
          ) : (
            <Bookmark width={28} height={28} color={colors.black01} />
          )}
        </TouchableOpacity>
      </View>
      <Line />
    </>
  );
};

export default Header;
