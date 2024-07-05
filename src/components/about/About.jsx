
export default function About({screen}) {

    if (screen !== 'about') {
        return null;
    }
    return (
        <div className="portfolio">
            <div className="company">About me</div>
                <div className="description">I am rarely bored! I have a computer science degree from the University of Guelph, and a broad array of technical, athletic, and artistic interests.</div>
        </div>
    )
}
