import React from "react";
import classnames from "classnames";
import { Button } from "../../../shared/components";
import styles from "./Pagination.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPage } from "../../../store/selectors";
import { setCurrentPage } from "../../../store/slices/recordSlice";

export const Pagination = ({ pageCount }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector(getCurrentPage);

  const onChangePage = ({ target: { textContent } }) => {
    const page = Number(textContent);

    if (currentPage !== page) {
      dispatch(setCurrentPage(page));
    }
  };

  let firstPage, lastPage;

  if (pageCount > 1) {
    if (currentPage === 1 && pageCount > 2) {
      lastPage = currentPage + 2;
      firstPage = currentPage;
    } else if (currentPage === 1 && pageCount === 2) {
      lastPage = currentPage + 1;
      firstPage = currentPage;
    } else if (currentPage === pageCount && pageCount > 2) {
      lastPage = currentPage + 1;
      firstPage = currentPage - 2;
    } else {
      lastPage = currentPage + 1;
      firstPage = currentPage - 1;
    }
  }

  const pageList = [...Array(pageCount + 1).keys()].slice(
    firstPage,
    lastPage + 1
  );

  const viewEndPage = pageCount > 3 && pageCount - 1 > currentPage;
  const viewMiddlePage = pageCount < 4;

  const paginationListClassName = classnames(styles.list, {
    [styles.end]: viewEndPage,
    [styles.middle]: viewMiddlePage,
  });

  return (
    <div className={styles._}>
      <div className={paginationListClassName}>
        {pageCount > 3 && currentPage > 2 && (
          <>
            <Button size="small" transparent onClick={onChangePage}>
              1
            </Button>
            <span className={styles.text}>...</span>
          </>
        )}
        {pageList.map((page) => (
          <Button
            key={page}
            size="small"
            transparent={page !== currentPage}
            onClick={onChangePage}
          >
            {page}
          </Button>
        ))}
        {viewEndPage && (
          <>
            <span className={styles.text}>...</span>
            <Button
              size="small"
              transparent={pageCount !== currentPage}
              onClick={onChangePage}
            >
              {pageCount}
            </Button>
          </>
        )}
      </div>
      <Button size="small" transparent>
        #
      </Button>
    </div>
  );
};
