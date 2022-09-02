import "./Portfolio.css"
import Maffle from "./Maffle/Maffle"
import Sonova from "./Sonova/Sonova"
import Guelph from './Guelph/Guelph';

export default function Portfolio({screen}) {

    if (screen !== 'portfolio') {
        return null;
    }
    return (
        <div className="portfolio">
            <Guelph />
            <Sonova />
            <Maffle />
        </div>
    )
}