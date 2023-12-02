import travel_card_photo from "../public/images/japan.jpeg"

const TravelCard = () => {
    return (
        <div className="travel-card">
            <img src={travel_card_photo} className="travel-card-photo"/>
        </div>
    )
};

export default TravelCard;
