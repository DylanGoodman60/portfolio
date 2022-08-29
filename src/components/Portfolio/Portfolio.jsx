import "./Portfolio.css"
import Maffle from "./Maffle/Maffle.jsx"

export default function Portfolio({screen}) {

    if (screen !== 'portfolio') {
        return null;
    }
    return (
        <div className="portfolio">
            <Maffle />
        </div>
    )
}