import React from 'react';
import { Bar } from 'react-chartjs-2';


const data = {
  labels: ['FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
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
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const VerticalBar = () => (
  <>
    <div className="bg-transparent h-100 w-100">
    <div className="d-flex justify-content-center align-items-center">
      <h6>Showing BNB Price for</h6>
      <div class="dropdown">
        <button class="btn btn-secondary mb-1 fw-bold bg-transparent text-dark border-0 btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{outline:'none !important'}}>
         Last 6 month
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="#">last week </a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
      </div>
      <Bar data={data} options={options} />
    </div>
  </>
);

export default VerticalBar;