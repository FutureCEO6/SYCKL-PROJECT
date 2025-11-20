import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="logo">SYCKL</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/crisis-guide">Crisis Guide</Link></li>
                <li><Link to="/affirmations">Affirmations</Link></li>
                <li><Link to="/self-care">Self Care</Link></li>
                <li><Link to="/stories">Stories</Link></li>
            </ul> 
        </nav>
    );
}