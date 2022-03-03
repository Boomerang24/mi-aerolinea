import React, { useEffect } from "react";
import { SliderData } from "../../data/sliderData";
import { PopularDestinations } from "./PopularDestinations";
import { FlightMenu } from "./FlightMenu";
import { TravelSlider } from "./TravelSlider";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { startLoadingCities } from "../../actions/cities";

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
        <TravelSlider slides={SliderData} />
      </div>
      <PopularDestinations />
    </>
  );
};
