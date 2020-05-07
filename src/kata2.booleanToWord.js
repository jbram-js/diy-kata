const booleanToWord = boolean => {
  if (boolean !== true) return "No";
  return "Yes";
};

module.exports = booleanToWord;
