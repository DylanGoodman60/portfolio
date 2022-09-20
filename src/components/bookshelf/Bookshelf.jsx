import "./bookshelf.css"

import testImage from "./images/kv260.jpg"

export default function main({screen}) {
    if(screen !== 'bookshelf') {
        return null;
    }

    return (
        <div className="container">
            <div className="photos">
                <img src={testImage} alt="KV260"/>  
            </div>
        </div>
    )
}