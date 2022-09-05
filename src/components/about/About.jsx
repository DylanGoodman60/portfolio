import "./about.css"

export default function About({screen}) {

    if (screen !== 'about') {
        return null;
    }
    return (
        <h1>Under construction</h1>
    )
}