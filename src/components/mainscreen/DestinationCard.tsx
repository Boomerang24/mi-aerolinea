import beachPicture from '../../assets/beach.jpg';

export const DestinationCard = () => {
    return (
        <div className="destionationcard__card">
          <div 
            style={{backgroundImage: "url(" + beachPicture + ")"}}
            className="destionationcard__img"
          ></div>
          <div className="destionationcard__container">
            <span>Mexico City - </span>
            <h4><b>Cancun</b></h4>
            <span>Book From...</span>
          </div>
        </div>
    )
}
