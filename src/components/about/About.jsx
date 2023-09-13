
export default function About({screen}) {

    if (screen !== 'about') {
        return null;
    }
    return (
        <div className="portfolio">
            <div className="company">About me</div>
                <div className="description">My name is Dylan, and I am a fourth year computer science student at the university of Guelph. I am infinitely curious and easily interested in many topics. I have a broad array of technical, athletic, and artistic interests. I am the kind of person who is rarely bored.</div>
            <div className="company">Technical Expertise</div>
                <div className="description">I have been programming in Python, C and Java for many years. I use these languages as a foundation to learn many other languages and frameworks, for the task at hand. I consider myself a generalist, and do not have a "favourite" language. Unique problems require unique solutions, and thereby unique languages and techniques.</div>
            <div className="company">Athletics & hobbies</div>
                <div className="description">Athletics, health and fitness are a big part of my life. I am currently enjoying squash, golf, and disc golf. I also go to the gym and run often, as I consider my physical health wholly intertwined with my mental health.</div>
        </div>
    )
}
