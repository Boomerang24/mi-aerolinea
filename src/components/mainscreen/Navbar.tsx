import { FaLuggageCart } from 'react-icons/fa'
import { MdOutlineAirplaneTicket } from 'react-icons/md'

export const Navbar = () => {
    return (
        <div className="mainscreen__navbar">
            <h1 className='mainscreen__home-logo pointer'>
                miAerolinea
                <MdOutlineAirplaneTicket />
            </h1>
            <div className='mainscreen__mis-reservas pointer'>
                <FaLuggageCart className='mainscreen__cart-logo'/>
                <span className='hide-element_medium-breakpoint'>
                    Checkout
                </span>
            </div>
        </div>
    )
}
