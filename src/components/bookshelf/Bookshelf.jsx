import "./bookshelf.css"

import alchemist from "./images/alchemist.jpg"
import crime from "./images/crime.jpg"
import atomichabits from "./images/atomichabits.jpg"
import deepwork from "./images/deepwork.jpg"
import dm from "./images/digitalminimalism.jpg"
import dune from "./images/dune.jpg"
import kiterunner from "./images/kiterunner.jpg"
import leonardo from "./images/leonardo.jpg"
import sleep from "./images/sleep.jpg"
import race from "./images/soyouwanttotalkaboutrace.jpg"
import stoner from "./images/stoner.jpg"
import surf from "./images/surf.jpg"
import numbers from "./images/numbers.jpg"
import expertise from "./images/expertise.jpeg"


const images = [stoner, crime, surf, dune, deepwork, leonardo, expertise, atomichabits, kiterunner, sleep, race, alchemist, numbers, dm]

export default function main({screen}) {
    if(screen !== 'bookshelf') {
        return null;
    }

    return (
        <div className="portfolio">
            <div className="photos">
                {images.map((x) => <img src={x}/>)}
            </div>
        </div>
    )
}