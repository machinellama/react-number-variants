/*
  Format a number value into a string (with commas or spaces), based on given locale
  (i.e. 12000 -> 12,000 if locale = 'en-US')

  @param value: number
  @param locale: string
  @param minimumFractionDigits: number, min number of decimals
  @param maximumFractionDigits: number, max number of decimals

  @return string, formatted number of given value
*/
export default function formatNumber(value, locale, minimumFractionDigits = 0, maximumFractionDigits = 20) {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits,
    maximumFractionDigits
  }).format(value);
}
