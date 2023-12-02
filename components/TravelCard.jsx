import travel_card_photo from "../public/images/japan.jpeg"
import travel_pin_icon from "../public/images/location_icon.png"

const TravelCard = () => {
    return (
        <div className="travel-card">
            <img src={travel_card_photo} className="travel-card-photo"/>
            <div className="travel-card-content">
                <div className="location-details">
                    <img src={travel_pin_icon} />
                    <span>JAPAN</span>
                    <span>View on Google Maps</span>
                </div>
            </div>
        </div>
    )
};

export default TravelCard;
