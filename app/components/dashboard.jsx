import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, LinearScale, CategoryScale, BarElement } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json())

ChartJS.register(ArcElement, Tooltip, Legend, Title, LinearScale, CategoryScale, BarElement);

export const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
};

const Dashboard = () => {
  const { data: barData } = useSWR("http://localhost:8080/dashboard/teste", fetcher);
  
  return <div style={{ margin: '0px 20px' }} options={{ responsive: true }}>
    <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 24, margin: '20px auto'}}>Donations by country</h1>
    {barData ? <Bar data={barData} options={options}/> : 'Nada para carregar'}
  </div>;
}

export default Dashboard;