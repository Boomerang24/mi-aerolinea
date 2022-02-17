import React from 'react'
import { SliderData } from '../../data/SliderData'
import { PopularDestinations } from './PopularDestinations'
import { FlightMenu } from './FlightMenu'
import { TravelSlider } from './TravelSlider'

export const MainScreen = () => {
    return (
        <>
            <div className="mainscreen__searchflight">
              <FlightMenu />
              <TravelSlider slides={ SliderData }/>
            </div>
            <PopularDestinations />
        </>
    )
}
