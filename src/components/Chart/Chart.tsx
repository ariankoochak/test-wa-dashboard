import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

const Chart: React.FC = () => {
    const dispatch = useDispatch();
    const number = useSelector((state: RootState) => state.my.myRandomNumber);
    
    return <>
    <div>{number}</div>
    </>
};

export default Chart;