import "./mainpage.css"
const title = 'Hello! I\'m Dylan.';
const description = 'A third year computer science student \nattending the university of Guelph';
export default function mainpage({screen}) {

    if (screen !== "home") {
        return (null)
    }
    return (
        <div className='mainpage'>
            <div className='hello'>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}