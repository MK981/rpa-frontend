import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {faker} from '@faker-js/faker'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Статистика ботов',
      },
    },
  };
  
  const labels = ['19.04.22', '23.04.22', '24.04.22', '03.05.22', '7.05.22'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Кол-во запусков',
        //data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        data: [2, 1, 1, 4, 2],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
      /*{
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },*/
    ],
  };

function LineChart () {
    return (
        <>
            <Line options={options} data={data} />
        </>
    );
}

export default LineChart;