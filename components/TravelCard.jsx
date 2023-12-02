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
                    <span className="google-maps-link"><a href="https://www.google.com/maps/d/u/0/viewer?mid=1W9AtcwnYAqP1yVHr5YjhwmQa0eM&hl=en&ll=35.36479441415821%2C138.763048&z=14">View on Google Maps</a></span>
                </div>
                <h1 className="location-title">Mount Fuji</h1>
                <p className="location-dates">12 Jan, 2021 - 24 Jan, 2021</p>
                <div className="location-text-box">
                    <p>
                    Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters 
                    (12,380 feet). Mount Fuji is the single most popular tourist 
                    site in Japan, for both Japanese and foreign tourists.
                    </p>
                </div>
            </div>
        </div>
    )
};

export default TravelCard;
