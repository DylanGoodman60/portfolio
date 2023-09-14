import "./Portfolio.css"
import Maffle from "./Maffle/Maffle"
import Sonova from "./Sonova/Sonova"
import Guelph from './Guelph/Guelph';
import SAP from './SAP/SAP';


export default function Portfolio({screen}) {

    if (screen !== 'portfolio') {
        return null;
    }
    return (
        <div className="portfolio">
            <SAP />
            <Guelph />
            <Sonova />
            <Maffle />
        </div>
    )
}