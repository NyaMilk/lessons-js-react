export const checkIncludesValueInStartString = (string, value) =>
  string.toLowerCase().startsWith(value.toLowerCase());

export const checkIncludesValueInString = (string, value) =>
  string.toLowerCase().includes(value.toLowerCase());

export const checkIncludesValueInArray = (array) => (value) => {
  if (array.length === 0) {
    return true;
  }

  return array.includes(value);
};
