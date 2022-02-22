import React, { FC } from "react";
import Modal from "react-modal";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { uiCloseModal } from "../../actions/ui";
import { DatePicker } from "./DatePicker";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

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
        style={customStyles}
        contentLabel="Calendar Modal"
      >
        <div className="checkout-wrapper">
          <DatePicker />
        </div>
      </Modal>
    </div>
  );
};
