import React, {useState} from "react";
import {v4 as uuid} from "uuid";
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";

function NewColorForm({addColor}) {
    const history = useHistory();
    const initialState = {
        name: "",
        hex: ""
    }

    const [formData, setFormData] = useState(initialState);
    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData( formData => ({
            ...formData,
            [name]: value
        }));
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        if (!formData.name || !formData.hex) {
            alert("Please input values");
            return;
        }

        addColor({...formData, id:uuid()});
        setFormData(initialState);
        history.goBack();
    }

    return (
        <div className="NewColorForm">
            <form onSubmit={handleSubmit}>
                <div className="NewColorForm-input">
                    <label htmlFor="name">Name</label>
                    <input 
                        id="name" 
                        onChange={handleChange} 
                        name="name" 
                        value={formData.name} />
                </div>
                <div className="NewColorForm-input">
                    <label htmlFor="hex">Color</label>
                    <input 
                        id="hex" 
                        onChange={handleChange} 
                        name="hex" 
                        type="color"
                        value={formData.hex} />
                </div>
                <button>Add a Color</button>
            </form>
            <Link to="/colors">Go back</Link>
        </div>
    )
}

export default NewColorForm;