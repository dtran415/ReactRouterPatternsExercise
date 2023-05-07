import React from "react";
import {Link, useParams, useHistory} from "react-router-dom";
import "./Color.css";

function Color({colors}) {
    const history = useHistory();
    const {color} = useParams();
    const currentColor = colors.find(c=>c.name===color);

    if (!currentColor) {
        history.push("/colors");
        return;
    }

    return <div className="Color" 
    style={{backgroundColor: currentColor.hex}}>
        <h1 className="Color-header">{currentColor.name}</h1>
        <Link to="/" className="Color-back">Go Home</Link>
    </div>
}

export default Color;