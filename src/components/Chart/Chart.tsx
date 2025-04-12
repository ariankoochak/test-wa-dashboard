import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { generateRandomData } from "../../tools/randomData/GenerateRandomData";



type Props = {
    title: string;
    subTitle: string;
    criteriaText : string;
};


const Chart: React.FC<Props> = ({ title, subTitle, criteriaText }) => {
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
                colors: [
                    "#9b20d9",
                    "#9215ac",
                    "#861ec9",
                    "#7a17e6",
                    "#7010f9",
                    "#691af3",
                    "#6225ed",
                    "#5b30e7",
                    "#533be1",
                    "#4c46db",
                    "#4551d5",
                    "#3e5ccf",
                    "#3667c9",
                    "#2f72c3",
                    "#277dbd",
                    "#1f88b7",
                    "#1693b1",
                    "#0a9eaa",
                    "#03c69b",
                    "#00f194",
                ],
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

    useEffect(()=>{

    },[number])

    return (
        <>
            <div className="chart-container">
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
        </>
    );
};

export default Chart;