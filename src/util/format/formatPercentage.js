/*
  Format a given number into a percentage string, with a percent sign (multiplies given number by 100, so dividing by 100 here)

  @param value: number
  @param locale: string
  @param minimumFractionDigits min number of decimals
  @param maximumFractionDigits max number of decimals

  @return string, formatted string of given value
*/
export default function formatPercentage(value, locale, minimumFractionDigits = 0, maximumFractionDigits = 20) {
  return (new Intl.NumberFormat(locale, {
    minimumFractionDigits,
    maximumFractionDigits,
    style: 'percent'
  })).format(value / 100);
}