import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Chart from "./components/Chart/Chart";
import GetNumber from "./components/GetNumber/GetNumber";

type Props = {
    chartTitle: string;
    chartSubtitle: string;
    chartCriteriaText: string;
    height : number;
    width: number;
};


const TestWaDashboard: React.FC<Props> = ({
    chartTitle,
    chartSubtitle,
    chartCriteriaText,
    height,
    width,
}) => {
    return (
        <>
            <Provider store={store}>
                <div className="main-container" style={{height:height < 460 ? 460 : height,width:width < 500 ? 500 : width}}>
                    <GetNumber />
                    <Chart
                        title={chartTitle}
                        subTitle={chartSubtitle}
                        criteriaText={chartCriteriaText}
                        />
                </div>
            </Provider>
        </>
    );
};

export default TestWaDashboard;