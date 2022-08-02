import me from "./me.jpeg"

export default function Portfolio() {
    return (
        <div className="portfolio">
            <div className="company">MAFFLE</div>
            <div className="description">blah blah blah</div>
            <img src={me} alt="Maffle"/>            
        </div>
    )
}