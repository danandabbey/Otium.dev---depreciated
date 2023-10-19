/**********************************************************************

A simple line chart for displaying the change in data over time.
Currently displays 12 hours of data.

things to do:
    
    *possibly add more data options

    *optimize its appearance for mobile use

**********************************************************************/

import { useState, useEffect, useContext} from 'react'
import { Line } from 'react-chartjs-2';
import { dataContext } from '../weather_app';
import { styleContext } from '../../../components/Context'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

/**********************************************************************

Buttons that control the chart view

**********************************************************************/
    
const ChartButtons = ((props: any) => {
    const style: any = useContext(styleContext);
    return (
        <div style={style.chartBtnCon}>
            <h6 style={style.chartBtn} onClick={props.temperature}>Temperature</h6>
            <h6 style={style.chartBtn} onClick={props.precipitation}>Precipitation</h6 >
            <h6 style={style.chartBtn} onClick={props.humidity}>Humidity</h6>
        </div>
    );
});

/**********************************************************************/

const LineChart = ((props: any) => {
    const style: any = useContext(styleContext);
    let titleSize: number = 40;
    let fontSize: number = 20;
    const options = {
        responsive: true,
        layout: {
            autoPadding: true
        },
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: props.title,
                font: {
                    size: titleSize
                },
                padding: 20,
                color: style.chart.color
            }
        },
        scales: {
            x: {
                grid: {
                    color: style.chart.color,
                    font: {
                        size: fontSize
                    }
                },
                ticks: {
                    color: style.chart.color,
                    font: {
                        size: fontSize
                    }
                },
            },
            y: {
                grid: {
                    color: style.chart.color,
                    font: {
                        size: fontSize
                    }
                },
                ticks: {
                    color: style.chart.color,
                    font: {
                        size: fontSize
                    }
                },
            },
        },
        elements: {
            point: {
                backgroundColor: style.chart.color,
            },
            line: {
                borderColor: style.chart.color,
            },
        },
    };
    const data = {
        labels: props.time,
        datasets: [{
            label: 'Time',
            data: props.data,
            borderColor: style.chart.color,
            tension: .5
        }]
    };
    return (
        <Line style={style.chart} data={data} options={options} />
    )
});

/**********************************************************************/

const Chart = (() => {
    const style: any = useContext(styleContext);
    const data: any = useContext(dataContext);
    const [currentChart, setCurrentData]: any = useState({});
    const time: any = data.chart.time;
    const chart: any = data.chart.chart;

    interface chart {
        id: number,
        title: string,
        data: any
    };

    const find = ((key: any) => {
        const charts: chart[] = [
            { id: 1, title: 'Temperature', data: chart.temp },
            { id: 2, title: 'Chance of Precipitation', data: chart.precipitation },
            { id: 3, title: 'Humidity', data: chart.humidity }
        ];
        let object: any = charts.find((obj) => obj.id === key)
        return object.data;
    });

    const temperature: any = (() => setCurrentData(find(1)));
    const precipitation: any = (() => setCurrentData(find(2)));
    const humidity: any = (() => setCurrentData(find(3)));

    useEffect(() => {
        temperature();
    }, [data.chart]);

    return (
        <div style={style.chartCon}>
            <div style={style.chart_and_buttons}>
                < LineChart time={time} title={currentChart.title} data={currentChart.data} />
                <ChartButtons temperature={temperature} precipitation={precipitation} humidity={humidity} />
            </div>
        </div>
    );
});

export default Chart;

