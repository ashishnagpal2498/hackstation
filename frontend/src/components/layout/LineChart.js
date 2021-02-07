import React from 'react';
import '../styles/Charts.css';
import {Line} from 'react-chartjs-2';

function LineChart({title, data}) {

    data.datasets.map(object => {
        object.backgroundColor = 'rgba(54, 162, 235, 0.2)';
        object.borderColor = 'rgba(54, 162, 235, 1)';
        object.borderWidth = 1;
        return object;
    });

    return (
        <div className="line-chart">
            <div className="chart-title">{title}</div>
            <div className="chart-container">
                <Line
                    data={{
                        labels: data.labels,
                        datasets: data.datasets
                    }}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true,
                                    },
                                },
                            ],
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default LineChart;
