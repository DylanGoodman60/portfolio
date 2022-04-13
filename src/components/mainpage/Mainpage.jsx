import "./mainpage.css"
const title = 'Hello! I\'m Dylan.';
const description = 'A third year computer science student \nattending the university of Guelph';
export default function mainpage() {
    return (
        <div className='mainpage'>
            <div className='hello'>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}