import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, LinearScale, CategoryScale, BarElement } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json())

ChartJS.register(ArcElement, Tooltip, Legend, Title, LinearScale, CategoryScale, BarElement);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 50, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const barData = {
  labels,
  datasets: [
    {
      label: 'Donations ($)',
      data: [20000, 10000, 5000, 15000, 50000, 25000, 2000],
      backgroundColor: 'green'
    }
  ]
}

const Dashboard = () => {
  return <div style={{display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
    <div style={{ minWidth: '50%', display: 'inline-block', margin: '20px' }} options={{ responsive: true }}>
      <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 24, margin: '20px auto'}}>Donations by time</h1>
      <Bar data={barData} />
    </div>
    <div style={{ maxWidth: '300px', margin: '20px' }} options={{ responsive: true }}>
      <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 24, margin: '20px auto'}}>Donations by country</h1>
      <Pie data={data}/>
    </div>
  </div>;
}


export default Dashboard;