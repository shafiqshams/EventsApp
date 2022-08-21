import {BASE_URL} from '../helpers/config';
import {getFetch} from '../helpers/api';

export function getVenues() {
  const URL = BASE_URL + 'venues';
  return getFetch(URL);
}
