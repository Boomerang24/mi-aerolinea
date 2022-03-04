import { DestinationCard } from "./DestinationCard";

export const PopularDestinations = () => {
  return (
    <div className="travelslider__gallery mt-10">
      <h1>Popular destinations right now</h1>
      <br />
      <div className="destinationcards-wrapper">
        <DestinationCard />
        <DestinationCard />
        <DestinationCard />
        <DestinationCard />
      </div>
    </div>
  );
};
