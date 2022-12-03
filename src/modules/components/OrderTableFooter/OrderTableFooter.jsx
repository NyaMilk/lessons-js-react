import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Switcher, TableFooter } from "../../../shared/components";
import { DropdownList } from "../../../shared/components/DropdownList/DropdowmList";
import { getSelectedRecordsIds, SORT_TYPE } from "../../../store/selectors";
import { deleteRecords, updateRecord } from "../../../store/slices/recordSlice";
import { statusesLangRu } from "../OrderStatus/OrderStatus";
import { Pagination } from "../Pagination/Pagination";
import styles from "./OrderTableFooter.module.css";

export const OrderTableFooter = ({ pageCount }) => {
  const dispatch = useDispatch();
  const [isShowDeleteModal, setShowDeleteModal] = useState(false);
  const [isShowChangeStatusModal, setShowChangeStatusModal] = useState(false);
  const selectedRecordsIds = useSelector(getSelectedRecordsIds);
  const selectedRecordsCount = selectedRecordsIds.length;

  useEffect(() => {
    const onClickOutside = () => setShowDeleteModal(false);
    if (isShowDeleteModal) {
      window.addEventListener("click", onClickOutside);
    }
    return () => window.removeEventListener("click", onClickOutside);
  }, [isShowDeleteModal]);

  const deleteSelectedRecordsHandler = () => {
    dispatch(deleteRecords());
    setShowDeleteModal(false);
  };

  const statusChangeHandler = ({ target: { value } }) => {
    selectedRecordsIds.forEach((id) => {
      dispatch(updateRecord({ id, key: SORT_TYPE.status, value }));
    });
    setShowChangeStatusModal(false);
  };

  const deleteModalItems = [
    {
      title: "Удалить",
      transparent: true,
      onClick: deleteSelectedRecordsHandler,
    },
    {
      title: "Отмена",
    },
  ];

  const toggleDeleteRecordModal = (e) => {
    e.stopPropagation();
    setShowDeleteModal(!isShowDeleteModal);
  };

  const toggleChangeStatusModal = (e) => {
    e.stopPropagation();
    setShowChangeStatusModal(!isShowChangeStatusModal);
  };

  return (
    <TableFooter>
      <div className={styles.group}>
        {selectedRecordsCount > 0 && (
          <>
            <span className={styles.text}>
              Выбрано записей: {selectedRecordsCount}
            </span>
            <Button
              size="small"
              icon={{ name: "pencil" }}
              onClick={toggleChangeStatusModal}
            >
              Изменить статус
            </Button>
            {isShowChangeStatusModal && (
              <DropdownList
                className={styles.changeStatusModal}
                type="single"
                name="status"
                list={statusesLangRu}
                onChange={statusChangeHandler}
                hidden
              />
            )}

            <Button
              theme="secondary"
              size="small"
              icon={{ name: "bin" }}
              onClick={toggleDeleteRecordModal}
            >
              Удалить
            </Button>
            {isShowDeleteModal && (
              <Switcher className={styles.deleteModal} items={deleteModalItems}>
                Удалить {selectedRecordsCount} записей?
              </Switcher>
            )}
          </>
        )}
      </div>
      <Pagination pageCount={pageCount} />
    </TableFooter>
  );
};
