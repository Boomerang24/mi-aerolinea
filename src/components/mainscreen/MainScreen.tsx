import React from 'react'
import { SliderData } from '../../data/SliderData'
import { PopularDestinations } from './PopularDestinations'
import { SearchFlight } from './SearchFlight'
import { TravelSlider } from './TravelSlider'

export const MainScreen = () => {
    return (
        <>
            <div className="mainscreen__searchflight">
              <SearchFlight />
              <TravelSlider slides={ SliderData }/>
            </div>
            <PopularDestinations />
        </>
    )
}
