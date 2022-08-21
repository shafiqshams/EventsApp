import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './HeaderStyles';
import HeaderTitle from '../../assets/icons-logo/eventlocations.svg';
import MenuIcon from '../../assets/icons-logo/menu.svg';
import Line from '../Line/Line';
import colors from '../../styles/colors';

const Header = () => {
  return (
    <>
      <View style={styles.mainWrapper}>
        <View style={styles.headerContainer}>
          <HeaderTitle width={140} height={75} color={colors.black01} />
        </View>
        <TouchableOpacity style={styles.iconContainer}>
          <MenuIcon width={35} height={35} color={colors.black01} />
        </TouchableOpacity>
      </View>
      <Line />
    </>
  );
};

export default Header;
