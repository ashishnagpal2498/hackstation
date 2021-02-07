import React from 'react';
import LineChart from './LineChart';
import PieChart from './PieChart';

function Charts() {

    const dailyActivityData = {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
        datasets: [{
            label: "Number of Hours Code",
            data: [5, 2, 3, 5, 7, 6, 10]
        }]
    };

    const programmingLanguagesData = {
        labels: ["HTML", "CSS", "JS", "Java", "C++"],
        datasets: [{
            label: "Number of Problems",
            data: [5, 2, 3, 5, 7]
        }]
    };

    return (
        <div className="chart">
            <LineChart
                title="Daily Activity"
                data={dailyActivityData}
            />
            <PieChart
                title="Programming Languages"
                data={programmingLanguagesData}
            />
        </div>
    )
}

export default Charts;
