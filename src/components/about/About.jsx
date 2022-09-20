
export default function About({screen}) {

    if (screen !== 'about') {
        return null;
    }
    return (
        <div className="portfolio">
            <div className="company">About me</div>
                <div className="description">My name is Dylan, and I am a fourth year computer science student at the university of Guelph. At my core, I am a curious and easily obsessed person. I have a broad array of technical, athletic, and artistic interests. I rarely feel bored, and prefer to fill my schedule with fun and meaningful activities!</div>
            <div className="company">Technical Expertise</div>
                <div className="description">I have been programming mainly in Python, Java and C for many years. I have used a variety of other languages, and use the foundations of programming often to learn new frameworks and libraries. I consider myself a generalist, and don't have a "favourite" language. Unique problems require unique solutions, and thereby unique languages.</div>
            <div className="company">Athletics & hobbies</div>
                <div className="description">Athletics, health and fitness are a big part of my life. I've played many sports throughout my life, but am currently enjoying squash, golf, disc golf and badminton. I also go to the gym and run occasionally, as I consider my physical health wholly intertwined with my mental health. I am an avid listener of the Barbell Medicine Podcast, and consider barbell training the fundamental of my training.</div>
                <div className="description">I have always enjoyed picking up new hobbies and improving at them. I usually have a few working obsessions, that come and go with time. As a younger kid, I enjoyed cup stacking and rubrik's cubing, attending competitive events for both. More recently, I have been interested in drawing, watercolour painting, video editing, gaming and reading.</div>
        </div>
    )
}