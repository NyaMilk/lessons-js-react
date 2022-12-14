import mockOrderRecords from "../../assets/mock/orders2.json";
import chunk from "lodash/chunk";
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
export const SORT_TYPE = {
  date: "date",
  status: "status",
  count: "count",
  amount: "amount",
};

export const getFilters = (state) => state.filters;
export const getStatuses = (state) => state.filters.statuses;
export const getRecords = (state) => state.records.records;
export const getCurrentPage = (state) => state.records.currentPage;
export const getPageCount = (state) => state.records.pageCount;
export const getSortDirection = (state) => state.records.sortDirection;
export const getSortColumn = (state) => state.records.sortColumn;
export const getSelectedRecordsIds = (state) =>
  state.records.selectedRecordsIds;
export const getRecord = (state) => state.form.record;

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

const sortRecords = (orders, sortDirection, sortColumn) => {
  const direction = sortDirection === "asc" ? -1 : 1;

  return orders.sort((a, b) => {
    let valueFirst = a[sortColumn];
    let valueSecond = b[sortColumn];

    if (sortColumn === SORT_TYPE.date) {
      valueFirst = parseDateTimeFromString(valueFirst);
      valueSecond = parseDateTimeFromString(valueSecond);
    }

    if (sortColumn === SORT_TYPE.amount || sortColumn === SORT_TYPE.count) {
      valueFirst = parseInt(valueFirst);
      valueSecond = parseInt(valueSecond);
    }

    return valueFirst < valueSecond ? direction : -direction;
  });
};

export const getRecordsWithFilters = (state) => {
  const records = getRecords(state);
  const filteredRecord = getFilteredRecords(state, records);
  const sortDirection = getSortDirection(state);
  const sortColumn = getSortColumn(state);
  const sortedRecords = sortRecords(filteredRecord, sortDirection, sortColumn);
  const chunkRecords = chunk(sortedRecords, RECORDS_ON_PAGE);
  const currentPage = getCurrentPage(state);

  return {
    records: chunkRecords[currentPage - 1],
    pageCount: chunkRecords.length,
  };
};

export const loadRecords = () => {
  return mockOrderRecords;
};
