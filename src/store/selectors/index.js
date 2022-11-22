import recordsMock from "../../assets/mock/orders.json";
import { chunk } from "lodash/array";
import {
  checkDateRange,
  checkNumberRange,
} from "../../shared/utils/checkRange";
import {
  parseDateFromString,
  parseDateTimeFromString,
} from "../../shared/utils/parseDate";
import {
  checkIncludesValueInStartString,
  checkIncludesValueInString,
  checkIncludesValueInArray,
} from "../../shared/utils/checkIncludesValue";

const RECORDS_ON_PAGE = 30;

export const getFilters = (state) => state.filters;
export const getStatuses = (state) => state.filters.statuses;
export const getCurrentPage = (state) => state.records.currentPage;

const getFilteredRecords = ({ filters }, records) => {
  const checkSearch = (id, name) => {
    return (
      checkIncludesValueInStartString(id, filters.search) ||
      checkIncludesValueInString(name, filters.search)
    );
  };
  const checkDate = checkDateRange(
    parseDateFromString(filters.dateFrom),
    parseDateFromString(filters.dateTo)
  );
  const checkStatus = checkIncludesValueInArray(filters.statuses);
  const checkAmount = checkNumberRange(filters.amountFrom, filters.amountTo);

  const checkValuesByFilter = (filters) =>
    filters.every((filter) => filter === true);

  return records.filter(({ id, date, status, amount, name }) =>
    checkValuesByFilter([
      checkSearch(id, name),
      checkDate(parseDateTimeFromString(date)),
      checkStatus(status),
      checkAmount(Number(amount)),
    ])
  );
};

export const getRecords = (state) => {
  const filterRecord = getFilteredRecords(state, recordsMock);

  return chunk(filterRecord, RECORDS_ON_PAGE);
};
