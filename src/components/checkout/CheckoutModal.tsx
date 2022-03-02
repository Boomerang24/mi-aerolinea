import React from "react";
import Modal from "react-modal";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { uiCloseModal } from "../../actions/ui";
import { useForm } from "../../hooks/useForm";
import { modalStyles } from "../../styles/modalStyles";

Modal.setAppElement("#root");

export const CheckoutModal = () => {
  const dispatch = useDispatch();
  const { modalOpen } = useSelector((state: RootStateOrAny) => state.ui);

  const { firstName, lastName, address, email, handleChange, formulario } =
    useForm({
      firstName: "",
      lastName: "",
      address: "",
      email: "",
    });

  const isEmpty = Object.values(formulario).some((value) => value === "");

  const closeModal = () => {
    dispatch(uiCloseModal());
  };

  return (
    <div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Checkout Modal"
      >
        <div className="checkout-wrapper">
          <h1>Complete your purchase</h1>
          <form>
            <div className="form-group">
              <label>First Name</label>
              <input
                value={firstName}
                type="text"
                placeholder="Peter"
                name="firstName"
                autoComplete="off"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                value={lastName}
                type="text"
                placeholder="Smith"
                name="lastName"
                autoComplete="off"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Billing Address</label>
              <input
                value={address}
                type="text"
                placeholder="Street Name and #, Neighborhood, ZipCode, City"
                name="address"
                autoComplete="off"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                value={email}
                type="text"
                placeholder="example@domain.com"
                name="email"
                autoComplete="off"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <div className="form-total">
                <h2>Total</h2>
                <h2>$10,000</h2>
              </div>
              <button className="form-button" disabled={isEmpty}>
                Pay Now
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};
