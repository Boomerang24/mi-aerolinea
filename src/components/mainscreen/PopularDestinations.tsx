import { sliderData } from "../../data/sliderData";
import { DestinationCard } from "./DestinationCard";

export const PopularDestinations = () => {
  return (
    <div className="travelslider__gallery mt-10">
      <h1>Popular destinations right now</h1>
      <br />
      <div className="destinationcards-wrapper">
        {sliderData.map((card, id) => (
          <DestinationCard key={id} image={card.image} name={card.name} />
        ))}
      </div>
    </div>
  );
};
