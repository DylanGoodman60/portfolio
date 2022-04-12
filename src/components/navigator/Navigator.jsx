import "./navigator.css"
import { FaLinkedinIn } from 'react-icons/fa';

export default function Navigator() {
    return (
        <div className="navigator">
            <div className ="left">
                <ul>
                    <li textDecoration="none">
                        <a href="#Home">HOME</a>
                    </li>
                    <li>
                        <a href="#Portfolio">PORTFOLIO</a>
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
                <FaLinkedinIn />
            </div>
        </div>
    )
}