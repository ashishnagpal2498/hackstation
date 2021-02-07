import React from 'react';
import '../styles/Charts.css';
import {Pie} from 'react-chartjs-2';

function PieChart({title, data}) {

    data.datasets.map(object => {
        object.backgroundColor = randomColorArray(data.labels.length, 0.3);
        object.borderColor = 'white';
        object.borderWidth = 1;
        return object;
    });

    function randomColorArray(size, alpha) {
        let colors = [];
        for(let i=0; i<size; i=i+1) {
            let red = Math.round(Math.random()*255);
            let green = Math.round(Math.random()*255);
            let blue = Math.round(Math.random()*255);

            colors.push(`rgba(${red}, ${green}, ${blue}, ${alpha})`);
        }
        return colors;
    }

    return (
        <div className="pie-chart">
            <div className="chart-title">{title}</div>
            <div className="chart-container">
                <Pie
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

export default PieChart;
