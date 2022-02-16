import React from 'react'

export const CheckoutCard = () => {
    return (
        <div className="checkoutcard__card-wrapper">
            <div className="checkoutcard__card-origin-destination">
                <p>Origin</p>
                <p>Destination</p>
            </div>
            <div className="checkoutcard__card-origin-destination">
                <h3>Mexico</h3>
                <h3>Cancun</h3>                    
            </div>
            <hr />
            <div className="checkoutcard__card-details">
                <p>Time of flight - 10:30am CST</p>
                <p>Adult - 4</p>
                <p>Child - 2</p>
            </div>
            <hr />
            <div className="checkoutcard__card-summary">
                <span>Total - $5000</span>
            </div>
        </div>
    )
}
