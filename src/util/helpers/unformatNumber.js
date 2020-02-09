import getLocale from './getLocale';

/*
  Function to unformat a number based on locale (got from stackoverflow)

  @param stringNumber: string
  @param locale: string,

  @return number, unformatted number of input string
*/
export default function unformatLocaleNumber(stringNumber, locale) {
  let newLocale = locale;
  if (!locale || locale == null || locale === undefined) {
    newLocale = getLocale();
  }
  newLocale = newLocale.replace('_', '-'); // just in case

  const thousandSeparator = (1111)
    .toLocaleString(newLocale)
    .replace(/1/g, '')
    .replace(/١/g, '');

  const decimalSeparator = (1.1)
    .toLocaleString(newLocale)
    .replace(/1/g, '')
    .replace(/١/g, '');

  const parsed = parseFloat(stringNumber
    .replace(new RegExp('[^0-9., ]', 'g'), '')
    .replace(new RegExp(`\\${thousandSeparator}`, 'g'), '')
    .replace(new RegExp(`\\${decimalSeparator}`), '.'),
  );

  return parsed;
}
