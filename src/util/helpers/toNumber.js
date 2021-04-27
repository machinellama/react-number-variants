export default function(value) {
  if (value == null || value === '') {
    return undefined;
  }

  const number = Number(value);
  const returnValue =
    (isNaN(number) || number == null) ?
    undefined : number;

  return returnValue;
}
