import { createRoot } from "react-dom/client"
import NavigationBar from "./components/NavigationBar";

const App = () => {
    return (
        <div>
            <NavigationBar />
            <h1>Above It All</h1>
        </div>
    )
};

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)

