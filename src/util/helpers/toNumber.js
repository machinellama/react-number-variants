export default function(value) {
  if (value == null || value === undefined) {
    return null;
  }

  const number = Number(value);
  const returnValue =
    (isNaN(number) || number == null || number === undefined) ?
    null : number;

  return returnValue;
}
