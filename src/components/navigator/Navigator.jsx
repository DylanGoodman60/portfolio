import "./navigator.css"
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaFilePdf } from 'react-icons/fa';

const resumeUrl = "https://youtube.com";
const linkedinUrl = "https://www.linkedin.com/in/dylan-jr-goodman/";
const githubUrl = "https://github.com/dylangoodman60";

export default function Navigator(props) {

    function openLink(str) {
        window.open(str, '_blank').focus();
    };

    return (
        <div className="navigator">
            <div className ="left">
                <ul>
                    <li textDecoration="none">
                        <button onClick={props.go.home}>HOME</button>
                    </li>
                    <li>
                        <button onClick={props.go.portfolio}>PORTFOLIO</button>
                    </li>
                    <li>
                        <a href="#Portfolio">BOOKSHELF</a>
                    </li>
                    <li>
                        <a href="#Portfolio">ABOUT</a>
                    </li>
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