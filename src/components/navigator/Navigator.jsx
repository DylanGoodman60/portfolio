import "./navigator.css"
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaFilePdf } from 'react-icons/fa';

const resumeUrl = "https://youtube.com";
const linkedinUrl = "https://www.linkedin.com/in/dylan-jr-goodman/";
const githubUrl = "https://github.com/dylangoodman60";

export default function Navigator({ screen, setScreens }) {

    function handleChange(theOption) {
        setScreens(theOption);
        console.log(theOption);
    };
    function openLink(str) {
        window.open(str, '_blank').focus();
    };

    const options = [ "home", 'portfolio', 'bookshelf', 'about']

    return (
        <div className="navigator">
            <div className ="left">
                <ul>
                    {options.map((text) => (
                        <li key={text}>
                            <button
                                onClick={() => handleChange(text)}
                                className = {screen === text ? 'selected' : 'null'}
                            >{text.toUpperCase()}</button>
                        </li>
                    ))};
                </ul>
            </div>
            <div className="middle"></div>
            <div className = "right">
                <FaFilePdf onClick={() => openLink(resumeUrl)} className="fa-icon"/>
                <FaLinkedinIn onClick={() => openLink(linkedinUrl)} className="fa-icon"/>
                <FaGithub onClick={() => openLink(githubUrl)} className="fa-icon"/>
            </div>
        </div>
    )
}