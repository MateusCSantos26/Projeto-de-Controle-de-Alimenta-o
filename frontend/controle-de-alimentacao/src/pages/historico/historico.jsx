import React from 'react';
import Chart from 'react-google-charts'

import './historico.css';

// Lista de 30 dias, separando com 7 ultimos dias, 3 ultimos dias e dia atual. pop no índice 0 e push a cada novo dia;

const Historico = () => {
    return (
        <main>
            <Chart
            width={400}
            height={300}
            chartType="ColumnChart"
            loader={<div>Loading Chart</div>}
            data={[
            ['City', '2010 Population', '2000 Population'],
            ['New York City, NY', 8175000, 8008000],
            ['Los Angeles, CA', 3792000, 3694000],
            ['Chicago, IL', 2695000, 2896000],
            ['Houston, TX', 2099000, 1953000],
            ['Philadelphia, PA', 1526000, 1517000],
            ]}
            options={{
            title: 'Population of Largest U.S. Cities',
            chartArea: { width: '30%' },
            hAxis: {
                title: 'Total Population',
                minValue: 0,
            },
            vAxis: {
                title: 'City',
            },
            }}
            legendToggle
            />
        </main>
    );
}

export default Historico;