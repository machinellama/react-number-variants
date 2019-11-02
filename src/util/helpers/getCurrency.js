import localeCurrency from 'locale-currency';
import getLocale from 'get-user-locale';

/*
  Return a currency based on a given locale (or user's browser's locale)
  (i.e. 'en-US' -> 'USD')

  @param locale: string
  
  @return string
*/
export default function getCurrency(locale) {
  if (locale) {
    return localeCurrency(locale) || 'USD';
  }

  return localeCurrency(getLocale()) || 'USD';
}