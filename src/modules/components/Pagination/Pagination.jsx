import React, { useState } from "react";
import classnames from "classnames";
import { Button } from "../../../shared/components";
import styles from "./Pagination.module.css";

export const Pagination = ({ size }) => {
  const countPages = Math.ceil(size / 20);
  const [currentPage, setCurrentPage] = useState(1);

  const onChangePage = ({ target: { textContent } }) => {
    const page = Number(textContent);

    if (currentPage !== page) {
      setCurrentPage(page);
    }
  };

  let firstPage, lastPage;

  if (countPages > 1) {
    if (currentPage === 1 && countPages > 2) {
      lastPage = currentPage + 2;
      firstPage = currentPage;
    } else if (currentPage === 1 && countPages === 2) {
      lastPage = currentPage + 1;
      firstPage = currentPage;
    } else if (currentPage === countPages && countPages > 2) {
      lastPage = currentPage + 1;
      firstPage = currentPage - 2;
    } else {
      lastPage = currentPage + 1;
      firstPage = currentPage - 1;
    }
  }

  const pageList = [...Array(countPages + 1).keys()].slice(
    firstPage,
    lastPage + 1
  );

  const viewEndPage = countPages > 3 && countPages - 1 > currentPage;

  const paginationListClassName = classnames(styles.list, {
    [styles.end]: viewEndPage,
  });

  return (
    <div className={styles._}>
      <div className={paginationListClassName}>
        {countPages > 3 && currentPage > 2 && (
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
              transparent={countPages !== currentPage}
              onClick={onChangePage}
            >
              {countPages}
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
