import React, { FC } from "react";
import Modal from "react-modal";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { uiCloseModal } from "../../actions/ui";
import { modalStyles } from "../../styles/modalStyles";
import { DatePicker } from "./DatePicker";

Modal.setAppElement("#root");

export const CalendarModal: FC = () => {
  const dispatch = useDispatch();

  const { modalOpen } = useSelector((state: RootStateOrAny) => state.ui);

  const closeModal = () => {
    dispatch(uiCloseModal());
  };

  return (
    <div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Calendar Modal"
      >
        <div className="checkout-wrapper">
          <DatePicker />
        </div>
      </Modal>
    </div>
  );
};
