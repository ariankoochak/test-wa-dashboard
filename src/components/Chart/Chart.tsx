import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { generateRandomData } from "../../tools/randomData/GenerateRandomData";
import { generateColumnColor } from "../../tools/randomData/GenerateColumnColor";



type Props = {
    title: string;
    subTitle: string;
    criteriaText : string;
};


const Chart: React.FC<Props> = ({ title, subTitle, criteriaText }) => {
    const chartContainerStyle: React.CSSProperties = {
        flex: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray",
        borderRadius: "8px",
        padding: "2rem",
        margin: "1px",
    };
    const number = useSelector((state: RootState) => state.my.myRandomNumber);

    const options: Highcharts.Options = {
        chart: {
            type: "column",
        },
        title: {
            text: title,
        },
        subtitle: {
            text: subTitle,
        },
        xAxis: {
            type: "category",
            labels: {
                autoRotation: [-45, -90],
                style: {
                    fontSize: "13px",
                    fontFamily: "Verdana, sans-serif",
                },
            },
        },
        yAxis: {
            min: 0,
            title: {
                text: criteriaText,
            },
        },
        legend: {
            enabled: false,
        },
        tooltip: {
            pointFormat: `${criteriaText}: <b>{point.y:.1f} millions</b>`,
        },
        series: [
            {
                name: "Population",
                type: "column",
                colorByPoint: true,
                groupPadding: 0,
                colors: generateColumnColor(number),
                data: generateRandomData(number),
                dataLabels: {
                    enabled: true,
                    rotation: -90,
                    color: "#FFFFFF",
                    inside: true,
                    verticalAlign: "top",
                    format: "{point.y:.1f}",
                    y: 10,
                    style: {
                        fontSize: "13px",
                        fontFamily: "Verdana, sans-serif",
                    },
                },
            },
        ],
    };

    if(number > 0)
        return (
            <div className="chart-container" style={chartContainerStyle}>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                    containerProps={{
                        style: { width: "100%", height: "100%" },
                    }}
                />
            </div>
        );
    else
        return (
            <div className="chart-container" style={chartContainerStyle}>
                <h3>enter valid number</h3>
            </div>
        );
};

export default Chart;