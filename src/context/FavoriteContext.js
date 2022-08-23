import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const key = 'FAV_VENUES';
const INITIAL_STATE = [];

export const FavoriteContext = createContext();

export function useFavorite() {
  return useContext(FavoriteContext);
}

export function FavoriteProvider({children}) {
  const [favorites, setFavorites] = useState(INITIAL_STATE);

  // returning array of venues
  // [{id: 102}, {id: 100}, {id: 102}, {id: 100}]
  const getFavorites = useCallback(async () => {
    try {
      const favs = await AsyncStorage.getItem(key);
      setFavorites(favs ? JSON.parse(favs) : []);
    } catch (e) {
      // saving error
      console.log('Unable to get data error', e);
    }
  }, []);

  useEffect(() => {
    getFavorites();
  }, [getFavorites]);

  const setVenue = async venues => {
    try {
      setFavorites(venues);
      await AsyncStorage.setItem(key, JSON.stringify(venues));
    } catch (e) {
      // saving error
      console.log('Saving error', e);
    }
  };

  const setFavItem = id => {
    const updatedFavs = [...favorites, {id}];
    setVenue(updatedFavs);
  };

  const removeFavItem = id => {
    const updatedFavs = favorites.filter(item => item.id !== id);
    setVenue(updatedFavs);
  };

  return (
    <FavoriteContext.Provider
      value={{favorites, setFavItem, removeFavItem, getFavorites}}>
      {children}
    </FavoriteContext.Provider>
  );
}
