import beachPicture from '../../assets/beach.jpg';

export const DestinationCard = () => {
    return (
        <div className="destionationcard__card">
          <div className="destionationcard__container">
            <img 
              src={ beachPicture }
              alt="place-thumbnail"
              className='destinationcard__img'
            />
            <span>Mexico City - </span>
            <h4><b>Cancun</b></h4>
            <span>Book From...</span>
          </div>
        </div>
    )
}
