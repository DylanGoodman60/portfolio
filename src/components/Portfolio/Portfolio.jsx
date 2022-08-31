import {useRef} from 'react';

import "./Portfolio.css"
import Maffle from "./Maffle/Maffle"
import Sonova from "./Sonova/Sonova"
import Guelph from './Guelph/Guelph';

export default function Portfolio({screen}) {
    const ref = useRef(null);

    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };

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