import React from 'react';
import '../styles/Charts.css';
import {Line, Pie} from 'react-chartjs-2';

function Charts() {

    const dailyActivityData = {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
        datasets: [{
            label: "Number of Hours Code",
            data: [5, 2, 3, 5, 7, 6, 10],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    };

    const programmingLanguagesData = {
        labels: ["HTML", "CSS", "JS", "Java", "C++"],
        datasets: [{
            label: "Number of Problems",
            data: [5, 2, 3, 5, 7],
            backgroundColor: randomColorArray(5, 0.3),
            borderColor: 'white',
            borderWidth: 1
        }]
    };

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
        <div className="charts">
            <div className="line-chart">
                <div className="chart-title">Daily Activity</div>
                <div className="chart-container">
                    <div className="chart">
                        <Line
                            data={{
                                labels: dailyActivityData.labels,
                                datasets: dailyActivityData.datasets
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
                    <div className="chart-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ratione autem aspernatur ut, architecto neque saepe aliquid repellat quibusdam ducimus quae nulla commodi iure fugit.
                    </div>
                </div>
            </div>
            <div className="pie-chart">
                <div className="chart-title">Programming Languages</div>
                <div className="chart-container">
                    <div className="chart">
                        <Pie
                            data={{
                                labels: programmingLanguagesData.labels,
                                datasets: programmingLanguagesData.datasets
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
                    <div className="chart-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, harum rem fugit magni expedita, nemo ratione, vero dolorum amet natus reiciendis quia aspernatur magnam libero?
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Charts;
