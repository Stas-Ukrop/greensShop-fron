import React, { useState, useEffect, useCallback } from 'react';
import { VscAccount } from 'react-icons/vsc';
import { CgShoppingCart } from 'react-icons/cg';
import styles from './InLogPanel.module.css';
import Modal from 'components/Modal/Modal';
import LoginView from 'components/LoginView/LoginView';

export const InlogPanel = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = useCallback(() => {
    return setShowModal(true);
  }, []);
  const onCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <>
      <ul className={styles.flexText}>
        <li>
          <input type="text" placeholder="введите ваш запрос" />
        </li>
        <li className={styles.headerMainMenuClientItem}>
          <VscAccount />
        </li>
        <li className={styles.headerMainMenuClientItem}>
          <CgShoppingCart
            onClick={() => {
              setShowModal(true);
            }}
          />
        </li>
      </ul>
      {showModal && (
        <Modal onClose={onCloseModal}>
          <button
            type="button"
            className={styles.btn_close_modal}
            onClick={onCloseModal}
          ></button>
          <LoginView />
        </Modal>
      )}
    </>
  );
};
