function isNumber(num) {
  const correctType = typeof num === 'number';
  const isANumber = !isNaN(num);
  const isNumberFinite = isFinite(num);

  return correctType && isANumber && isNumberFinite;
}

export default isNumber;
