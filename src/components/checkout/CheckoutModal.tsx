import React, { MouseEvent } from "react";
import Modal from "react-modal";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { resetCities } from "../../actions/cities";
import { resetDates } from "../../actions/date";
import { resetSelectedFlights } from "../../actions/selectedFlight";
import { resetPassengers } from "../../actions/tickets";

import { uiCloseModal } from "../../actions/ui";
import { useForm } from "../../hooks/useForm";
import { modalStyles } from "../../styles/modalStyles";

Modal.setAppElement("#root");

export const CheckoutModal = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { modalOpen } = useSelector((state: RootStateOrAny) => state.ui);

  const { firstName, lastName, address, email, handleChange, formulario } =
    useForm({
      firstName: "",
      lastName: "",
      address: "",
      email: "",
    });

  const handlePayBtn = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    //TODO: Add validator npm
    Swal.fire("Success", "Completed purchase", "success")
      .then(() => history.push("/"))
      .then(() => closeModal())
      .then(() => dispatch(resetSelectedFlights()));
    dispatch(resetDates());
    dispatch(resetCities());
    dispatch(resetPassengers());
  };

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
              <button
                className="form-button"
                disabled={isEmpty}
                onClick={handlePayBtn}
              >
                Pay Now
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};
