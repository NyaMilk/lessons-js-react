export const parseDateFromString = (date) => {
  if (!date || date.length < 10) {
    return null;
  }

  const [day, month, year] = date.split(".");

  return new Date(+year, month - 1, +day);
};

export const parseDateTimeFromString = (date) => {
  if (!date || date.length < 10) {
    return null;
  }

  const [dateValues, timeValues] = date.split(",");
  const [day, month, year] = dateValues.split(".");
  const [hours, minutes] = timeValues.split(":");

  return new Date(+year, month - 1, +day, hours, minutes);
};
