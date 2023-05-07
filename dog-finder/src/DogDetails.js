import React from "react";
import {v4 as uuid} from "uuid";

function DogDetails({dog}) {
    const {name, age, src, facts} = dog;
    return (<div>
        <h1>{name}</h1>
        <p>Age: {age}</p>
        <img src={src} alt={name}/>
        <h2>Facts</h2>
        <ul>
            {facts.map(fact => (
                    <li key={uuid()} >{fact}</li>
                ))}
        </ul>
    </div>)
}

export default DogDetails;