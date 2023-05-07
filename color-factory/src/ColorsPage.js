import React from "react";
import { Link } from "react-router-dom";

function ColorsPage({colors}) {
    return (
        <div>
            <div>
                <h1>Welcome to the color factory.</h1>
                <Link to="/colors/new">Add Color</Link>
            </div>
            <div>
                <div>Please select a color.</div>
                {colors.map(color => (
                    <div><Link to={`/colors/${color.name}`}>{color.name}</Link></div>
                ))}
            </div>
        </div>

    )
}

export default ColorsPage;