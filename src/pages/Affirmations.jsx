import { useState } from "react";
import affirmations from "../data/affirmations";

export default function Affirmations() {
    const [text, setText] = useState("");

    const generate = () => {
        const random = affirmations[Math.floor(Math.random() * affirmations.length)];
        setText(random);
    };

    return (
        <div className="card">
            <h2>Daily Affirmations</h2>
            <button onClick={generate}>Generate Affirmation</button>

            {text && <p className="affirmation">{text}</p>}
        </div>
    );
}