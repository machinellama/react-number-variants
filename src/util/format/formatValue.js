import isNumber from 'lodash/isNumber';
import isEmpty from 'lodash/isEmpty';
import checkMinMax from '../helpers/checkMinMax';
import getCurrency from '../helpers/getCurrency';
import formatPercentage from './formatPercentage';
import formatCurrency from './formatCurrency';
import formatNumber from './formatNumber';
import getLocale from 'get-user-locale';
import numeral from 'numeral';

/*
  Format a given number value by locale, to either a number, percent, or currency

  @param value: number
  @param type: string, either 'number', 'percent', or 'currency'
  @param locale: string
  @param currency: string
  @param min: number
  @param max: number
  @param minNumberOfDecimals: number
  @param maxNumberOfDecimals: number

  @return string, formatted string of given value, based on type
*/
export default function formatValue(value, type, locale, currency, min, max, minNumberOfDecimals, maxNumberOfDecimals) {
  if (!isNumber(value)) {
    value = numeral(value).value();
  }
  if (isNumber(value)) {
      let newMinDecimals = (minNumberOfDecimals < 0) ? 0 : minNumberOfDecimals;
      let newMaxDecimals = (maxNumberOfDecimals > 20) ? 20 : maxNumberOfDecimals;
      const newValue = checkMinMax(value, min, max);

      let newLocale = locale;
      if (isEmpty(locale)) {
        newLocale = getLocale();
      }
      newLocale = newLocale.replace('_', '-'); // just in case

      if (type === 'percent') {
        return formatPercentage(newValue, newLocale, newMinDecimals, newMaxDecimals);
      }

      if (type === 'currency') {
        let newCurrency = currency;
        if (isEmpty(currency)) {
            newCurrency = getCurrency(newLocale);
        }

        return formatCurrency(newValue, newLocale, newCurrency, newMinDecimals, newMaxDecimals);
      }
      
      return formatNumber(newValue, newLocale, newMinDecimals, newMaxDecimals);
  }

  return '';
}