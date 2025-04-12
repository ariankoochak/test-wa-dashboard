import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setRandomNumber } from "../../store/myRandomNumberSlice";

import {isNumeric} from 'valiend';

const GetNumber: React.FC = () => {
    const inputContainerStyle: React.CSSProperties = {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        backgroundColor: "gray",
        borderRadius: "8px",
        padding: "2rem",
        margin: "1px",
    };
    const inputStyle: React.CSSProperties = {
        backgroundColor: "#1e1e1e",
        color: "#ffffff",
        border: "1px solid #444",
        padding: "0.6rem 1rem",
        fontSize: "1rem",
        borderRadius: "6px",
        outline: "none",
        transition: "border 0.2s ease",
        width: "100%",
        maxWidth: "300px",
    };
    const buttonStyle: React.CSSProperties = {
        backgroundColor: "#00f194",
        color: "#000000",
        border: "none",
        padding: "0.6rem 1.2rem",
        fontSize: "1rem",
        fontWeight: 500,
        borderRadius: "6px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
    };

    const [count, setCount] = useState<number>(0); 
    const dispatch = useDispatch();

    const handleChangeCount = (e : any)=>{
        const newValue = e.target.value;
        if (isNumeric(newValue)) 
            setCount(e.target.value);
    }

    const handleClickSubmit = (e : any)=>{
        e.preventDefault();
        dispatch(setRandomNumber(count));
    }

    return (
        <div className="input-container" style={inputContainerStyle}>
            <form onSubmit={handleClickSubmit}>
                <input
                    type="text"
                    value={count}
                    onChange={handleChangeCount}
                    style={inputStyle}
                />
                <button type="submit" style={buttonStyle}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default GetNumber;