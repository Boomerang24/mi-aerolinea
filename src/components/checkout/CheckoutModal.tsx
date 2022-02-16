import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const CheckoutModal = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className='checkout-wrapper'>
          <h1>Complete your purchase</h1>
          <form>
            <div className='form-group'>
              <label>First Name</label>
              <input 
                type="text"
                placeholder='Peter'
                name="firstname"
                autoComplete='off'
              />
            </div>
            <div className='form-group'>
              <label>Last Name</label>
              <input 
                type="text"
                placeholder='Smith'
                name="lastname"
                autoComplete='off'
              />
            </div>
            <div className='form-group'>
              <label>Billing Address</label>
              <input 
                type="text"
                placeholder='Street Name and #, Neighborhood, ZipCode, City'
                name="address"
                autoComplete='off'
              />
            </div>
            <div className='form-group'>
              <label>Email</label>
              <input 
                type="text"
                placeholder='example@domain.com'
                name="email"
                autoComplete='off'
              />
            </div>
            <div className='form-group'>
              <div className='form-total'>
                <h2>Total</h2>
                <h2>$10,000</h2>
              </div>
              <button className='form-button'>
                Pay Now
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
