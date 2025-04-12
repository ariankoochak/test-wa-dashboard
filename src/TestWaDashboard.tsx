import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Chart from "./components/Chart/Chart";
import GetNumber from "./components/GetNumber/GetNumber";

type Props = {
    chartTitle: string;
    chartSubtitle: string;
    chartCriteriaText : string;
};


const MyComponent: React.FC<Props> = ({
    chartTitle,
    chartSubtitle,
    chartCriteriaText,
}) => {
    return (
        <>
            <Provider store={store}>
                <GetNumber />
                <Chart
                    title={chartTitle}
                    subTitle={chartSubtitle}
                    criteriaText={chartCriteriaText}
                />
            </Provider>
        </>
    );
};

export default MyComponent;