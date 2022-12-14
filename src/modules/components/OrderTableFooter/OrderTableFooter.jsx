import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Switcher, TableFooter } from "../../../shared/components";
import { DropdownList } from "../../../shared/components/DropdownList/DropdowmList";
import { getSelectedRecordsIds, SORT_TYPE } from "../../../store/selectors";
import { deleteRecords, updateRecord } from "../../../store/slices/recordSlice";
import { statusesLangRu } from "../OrderStatus/OrderStatus";
import { Pagination } from "../Pagination/Pagination";
import { useClickOutside } from "../utils/useClickOutside";
import styles from "./OrderTableFooter.module.css";

export const OrderTableFooter = ({ pageCount }) => {
  const dispatch = useDispatch();
  const selectedRecordsIds = useSelector(getSelectedRecordsIds);
  const selectedRecordsCount = selectedRecordsIds.length;

  const deleteSelectedRecordsHandler = () => {
    dispatch(deleteRecords());
    setShowDeleteModal(false);
  };

  const closeDeleteModalHandler = () => {
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
      onClick: closeDeleteModalHandler,
    },
  ];

  const toggleChangeStatusRef = useRef();
  const toggleDeleteRef = useRef();

  const {
    ref: changeStatus,
    isShow: isShowChangeStatusModal,
    setShow: setShowChangeStatusModal,
  } = useClickOutside(false, toggleChangeStatusRef);
  const {
    ref: deleteRef,
    isShow: isShowDeleteModal,
    setShow: setShowDeleteModal,
  } = useClickOutside(false, toggleDeleteRef);

  const toggleChangeStatusModal = (e) => {
    e.stopPropagation();
    setShowChangeStatusModal(!isShowChangeStatusModal);
  };

  const toggleDeleteRecordModal = (e) => {
    e.stopPropagation();
    setShowDeleteModal(!isShowDeleteModal);
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
              ref={toggleChangeStatusRef}
              size="small"
              icon={{ name: "pencil" }}
              onClick={toggleChangeStatusModal}
            >
              Изменить статус
            </Button>
            {isShowChangeStatusModal && (
              <DropdownList
                ref={changeStatus}
                className={styles.changeStatusModal}
                type="single"
                name="status"
                list={statusesLangRu}
                onChange={statusChangeHandler}
                hidden
              />
            )}

            <Button
              ref={toggleDeleteRef}
              theme="secondary"
              size="small"
              icon={{ name: "bin" }}
              onClick={toggleDeleteRecordModal}
            >
              Удалить
            </Button>
            {isShowDeleteModal && (
              <Switcher
                ref={deleteRef}
                className={styles.deleteModal}
                items={deleteModalItems}
              >
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
