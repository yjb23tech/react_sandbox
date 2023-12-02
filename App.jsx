import { createRoot } from "react-dom/client"
import NavigationBar from "./components/NavigationBar";
import TravelCard from "./components/TravelCard";

const App = () => {
    return (
        <div>
            <NavigationBar />
            <TravelCard country_name="JAPAN" attraction_name="Mount Fuji" travel_dates="12 Jan, 2021 - 24 Jan, 2021"/>
            <TravelCard country_name="AUSTRALIA" attraction_name="Sydney Opera House" travel_dates="27 May, 2021 - 8 Jun, 2021"/>
            <TravelCard country_name="NORWAY" attraction_name="Geirangerfjord" travel_dates="01 Oct, 2021 - 18 Nov, 2021" />
        </div>
    )
};

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)

