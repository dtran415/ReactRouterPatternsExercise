import React from "react";
import {useParams} from "react-router-dom";
import DogDetails from "./DogDetails";

function DogSelect({dogs}) {
    const {name} = useParams();

    if (name) {
        const dog = dogs.find(dog=>dog.name.toLowerCase()===name.toLowerCase());

        return <DogDetails dog={dog} />;
    }

    return <h1>Please specify a name.</h1>;
}

export default DogSelect;