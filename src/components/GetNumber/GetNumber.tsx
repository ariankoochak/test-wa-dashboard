import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setRandomNumber } from "../../store/myRandomNumberSlice";

import {isNumeric} from 'valiend';

const GetNumber: React.FC = () => {
    const [count, setCount] = useState<number>(0); 
    const dispatch = useDispatch();

    const handleChangeCount = (e : any)=>{
        const newValue = e.target.value;
        if (isNumeric(newValue)) 
            setCount(e.target.value);
    }

    const handleClickSubmit = ()=>{
        dispatch(setRandomNumber(count));
    }

    return <div className="input-container">
        <input type="text" value={count} onChange={handleChangeCount}/>
        <button onClick={handleClickSubmit}>Submit</button>
    </div>;
};

export default GetNumber;