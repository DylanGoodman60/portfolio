import "./Portfolio.css"

export default function Portfolio(props) {

    if (props.lever !== 'portfolio') {
        return null;
    }
    return (
        <div className="portfolio">
            <div className="textBox">
                <p>gabagool</p>
            </div>
        </div>
    )
}