const numberToReversedDigits = number => {
  return String(number)
    .split("")
    .reverse()
    .map(Number);
};

module.exports = numberToReversedDigits;
