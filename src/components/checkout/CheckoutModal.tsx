import React from "react";
import Modal from "react-modal";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { uiCloseModal } from "../../actions/ui";

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

export const CheckoutModal = () => {
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
        contentLabel="Checkout Modal"
      >
        <div className="checkout-wrapper">
          <h1>Complete your purchase</h1>
          <form>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                placeholder="Peter"
                name="firstname"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Smith"
                name="lastname"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label>Billing Address</label>
              <input
                type="text"
                placeholder="Street Name and #, Neighborhood, ZipCode, City"
                name="address"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                placeholder="example@domain.com"
                name="email"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <div className="form-total">
                <h2>Total</h2>
                <h2>$10,000</h2>
              </div>
              <button className="form-button">Pay Now</button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};
