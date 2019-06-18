function isValid(value, validate) {
  const regexp = new RegExp(validate);
  const isValid = regexp.test(value);

  return isValid;
}

export {
  isValid,
};
