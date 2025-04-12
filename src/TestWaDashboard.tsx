import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Chart from "./components/Chart/Chart";
import GetNumber from "./components/GetNumber/GetNumber";

const MyComponent: React.FC = () => {
    return <>
    <Provider store={store}>
        <GetNumber/>
        <Chart/>
    </Provider>
    </>;
};

export default MyComponent;