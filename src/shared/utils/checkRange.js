export const checkNumberRange = (min, max) => (value) => {
  const minValue = min || Number.MIN_SAFE_INTEGER;
  const maxValue = max || Number.MAX_SAFE_INTEGER;

  return value >= minValue && value <= maxValue;
};

export const checkDateRange = (min, max) => (value) => {
  if (!min && !max) {
    return true;
  } else if (!min) {
    return value <= max;
  } else if (!max) {
    return value >= min;
  }

  return value >= min && value <= max;
};
