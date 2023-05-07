import React from "react";
import {NavLink} from "react-router-dom";
import "./DogList.css";
import {v4 as uuid} from "uuid";

function DogList({dogs}) {
    return (
        <div className="DogList">
            {
                dogs.map(dog => (
                    <NavLink to={`/dogs/${dog.name}`} key={uuid()} >{dog.name}</NavLink>
                ))
            }
        </div>
    )
}

export default DogList;