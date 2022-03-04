interface IDestinationCard {
  image: string;
  name: string;
}

export const DestinationCard = ({ image, name }: IDestinationCard) => {
  return (
    <div className="destionationcard__card">
      <div
        style={{ backgroundImage: "url(" + image + ")" }}
        className="destionationcard__img"
      ></div>
      <div className="destionationcard__container">
        <span>Mexico City - </span>
        <h4>
          <b>{name}</b>
        </h4>
        <br />
      </div>
    </div>
  );
};
