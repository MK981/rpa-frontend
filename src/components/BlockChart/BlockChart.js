import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
//import {faker} from 'faker'
import {faker} from '@faker-js/faker'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
      text: 'Обращения',
    },
  },
};

const labels = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Кол-во обращений',
      //data: labels.map(() => faker.datatype.number({ min: 0, max: 15 })),
      data: [0,0,0,2,1,0,0],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Решенные обращения',
      //data: labels.map(() => faker.datatype.number({ min: 0, max: 15 })),
      data: [0,0,0,2,1,0,0],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

function BlockChart () {
    return (
        <>
            <Bar options={options} data={data} />
        </>
    );
}

export default BlockChart;