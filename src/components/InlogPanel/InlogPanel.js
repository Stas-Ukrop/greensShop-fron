import React, { useState, useEffect, useCallback } from 'react';
import { VscAccount } from 'react-icons/vsc';
import { CgShoppingCart } from 'react-icons/cg';
import styles from './InLogPanel.module.css';
import Modal from 'components/Modal/Modal';
import LoginView from 'components/LoginView/LoginView';
import RegisterView from 'components/RegisterView/RegisterView';

export const InlogPanel = () => {
  const [showModal, setShowModal] = useState(false);
  const [showRegistr, setShowRegistr] = useState(true);

  const openModal = useCallback(() => {
    return setShowModal(true);
  }, []);
  const onCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);
  const changeForm = useCallback(() => {
    return setShowRegistr(!showRegistr);
  }, [showRegistr]);
  return (
    <>
      <ul className={styles.flexText}>
        <li>
          <input type="text" placeholder="введите ваш запрос" />
        </li>
        <li className={styles.headerMainMenuClientItem}>
          <VscAccount
            onClick={() => {
              setShowModal(true);
            }}
          />
        </li>
        <li className={styles.headerMainMenuClientItem}>
          <CgShoppingCart />
        </li>
      </ul>
      {showModal && (
        <Modal onClose={onCloseModal}>
          <button
            type="button"
            className={styles.btn_close_modal}
            onClick={onCloseModal}
          ></button>
          {showRegistr ? <LoginView /> : <RegisterView />}
          <button
            type="button"
            className={styles.btn_close_modal}
            onClick={changeForm}
          >
            {showRegistr ? 'Зарегестрироваться' : 'Залогиниться'}
          </button>
        </Modal>
      )}
    </>
  );
};
