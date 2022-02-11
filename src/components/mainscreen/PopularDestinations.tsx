import { DestinationCard } from "./DestinationCard"

export const PopularDestinations = () => {
    return (
        <div>
            <h1>Popular destinations right now</h1>
            <br />
            <div className="destinationcards-wrapper">
                <DestinationCard />
                <DestinationCard />
                <DestinationCard />
                <DestinationCard />
            </div>
        </div>
    )
}
