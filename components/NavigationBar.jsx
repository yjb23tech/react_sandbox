
import globe_icon from "../public/images/globe_new.png"

const NavigationBar = () => {
    return (
        <nav className="navigation-bar">
            <img src={globe_icon} />
            <h3>my travel journal.</h3>
        </nav>
    )
}

export default NavigationBar;
