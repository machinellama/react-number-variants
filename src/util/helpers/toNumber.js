export default function(value) {
  const number = Number(value);
  const returnValue =
    (isNaN(number) || number == null || number === undefined) ?
    null : number;

  return returnValue;
}
