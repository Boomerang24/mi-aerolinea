import { MdOutlineAirplaneTicket } from 'react-icons/md'

export const Navbar = () => {
    return (
        <div className="mainscreen__navbar">
            <h1 className='mainscreen__home-logo pointer'>
                miAerolinea
                <MdOutlineAirplaneTicket />
            </h1>
            <span className='mainscreen__mis-reservas pointer'>
                Mis Reservas
            </span>
        </div>
    )
}
