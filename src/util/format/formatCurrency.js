/*
  Format value to locale currency, i.e. with $ and commas

  @param value: number to format into a money string
  @param locale: string
  @param currency: string
  @param minimumFractionDigits: number, minimum number of decimal places
  @param maximumFractionDigits: number, maximum number of decimal places

  @return formatted string of input number
*/
export default function formatCurrency(value, locale, currency, minimumFractionDigits = 0, maximumFractionDigits = 20) {
    return (new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
        minimumFractionDigits,
        maximumFractionDigits
    })).format(value);
}
