import getLocale from './getLocale';
import currencyMap from './currency-map';

/*
  Return a currency based on a given locale (or user's browser's locale)
  (i.e. 'en-US' -> 'USD')

  @param locale: string
  
  @return string
*/
function getCountryCode(localeString) {
  let components = localeString.split("_");
  if (components.length == 2) {
    return components.pop();
  }

  components = localeString.split("-");
  if (components.length == 2) {
    return components.pop();
  }

  return localeString;
}

export default function(locale) {
  let userLocale = locale;
  if (!userLocale) {
    userLocale = getLocale();
  }

  const countryCode = getCountryCode(userLocale).toUpperCase();

  if (countryCode in currencyMap) {
    return currencyMap[countryCode];
  }

  return 'USD';
}
