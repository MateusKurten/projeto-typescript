import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

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

const options = {
    options: {
        responsive: true,
        plugins: {
           title: {
              display: true,
              text: 'Bar Chart'
            }
        }
    }
}

const Dashboard = () => {
    return <div>
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div style={{ width: '300px' }}>
        <Pie data={data} options={{
  plugins: {
    title: {
      display: true,
      text: "Indice d'impact global de la transaction",
      align: "center",
      padding: {
        top: 10,
        bottom: 30,
      },
    },
  },
}} />
      </div>
      <div style={{ width: '300px' }} options={{ options }}>
        <Pie data={data} />
      </div>
      <div style={{ width: '300px' }} options={{ options }}>
        <Pie data={data} />
      </div>
    </div>
  </div>;
}

export default Dashboard;