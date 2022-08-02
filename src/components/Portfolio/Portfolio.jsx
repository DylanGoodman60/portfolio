import "./Portfolio.css"
import Maffle from "./jobs/Maffle.jsx"

export default function Portfolio({screen}) {

    if (screen !== 'portfolio') {
        return null;
    }
    return (
        <Maffle />
    )
}