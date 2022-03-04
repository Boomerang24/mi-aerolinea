import React, { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

import { PopularDestinations } from "./PopularDestinations";
import { FlightMenu } from "./FlightMenu";
import { TravelSlider } from "./TravelSlider";
import { startLoadingCities } from "../../actions/cities";
import { sliderData } from "../../data/sliderData";

export const MainScreen = () => {
  const dispatch = useDispatch();
  const availableFlights = useSelector(
    (state: RootStateOrAny) => state.availableFlights
  );

  useEffect(() => {
    dispatch(startLoadingCities());
  }, [availableFlights]);

  return (
    <>
      <div className="mainscreen__searchflight">
        <FlightMenu />
        <TravelSlider slides={sliderData} />
      </div>
      <PopularDestinations />
    </>
  );
};
