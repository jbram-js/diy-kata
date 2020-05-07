const humanCatDogYears = number => {
  const catYears = 15 + 9 + (number - 2) * 4;
  const dogYears = 15 + 9 + (number - 2) * 5;
  const allAges = [number, catYears, dogYears];

  return allAges;
};

module.exports = humanCatDogYears;
