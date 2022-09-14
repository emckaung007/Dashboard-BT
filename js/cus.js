let asideBtn = document.querySelector('.aside-btn');
let aside = document.querySelector('.aside');
let backdrop = document.querySelector('.__backdrop');

asideBtn.addEventListener('click',() =>{
    aside.classList.add('show');
    backdrop.classList.add('offcanvas-backdrop');
    backdrop.classList.add('show');
});

backdrop.addEventListener('click',() =>{
    aside.classList.remove('show');
    backdrop.classList.remove('offcanvas-backdrop');
    backdrop.classList.remove('show');
});

//Chart js

const labels = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        borderRadius: 6,
        data: [0, 10, 5, 2, 20, 30, 50, 24, 42, 10, 10, 45, 11, 14, , 32, 1, 21, 15, 24, 49, 13],
    },
        {
            label: 'My Second dataset',
            backgroundColor: 'rgb(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132, 0.2)',
            borderRadius: 6,
            data: [0, 10, 5, 2, 20, 30, 50, 24, 42, 10, 10, 45, 11, 14, , 32, 1, 21, 15, 24, 49, 13],
        }
    ]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        maintainAspectRatio: false,
        scales:{
            x: {
                grid: {
                    display: false,
                }
            },
            y: {
                grid: {
                    borderDash: [3],
                    borderColor: 'transparent'
                },
                ticks: {
                    // forces step size to be 50 units
                    stepSize: 20
                }
            }
        },
        plugins: {
            legend: {
                position: "bottom",
                align: 'start',
                labels: {
                    usePointStyle: true,
                }
            }
        }
    }
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);


//Data Table
$(document).ready(function () {
    $('#tt').DataTable({
        pageLength: 5,
    });
});



//Visitor

const vLabels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];
const vData = {
    labels: vLabels,
    datasets: [{
        label: 'iPhone',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [2, 10, 5, 2, 20, 30, 45],
        borderRadius: 6,
    },
        {
            label: 'Android',
            backgroundColor: 'rgba(25,182,229,0.2)',
            borderColor: 'rgba(25,182,229,0.2)',
            data: [3, 15, 6, 12, 24, 32, 47],
            borderRadius: 6,
        }
    ]
};

const vConfig = {
    type: 'bar',
    data: vData,
    options: {
        maintainAspectRatio: false,
        scales:{
            x: {
                grid: {
                    display: false,
                }
            },
            y: {
                grid: {
                    borderDash: [3],
                    borderColor: 'transparent'
                },
                ticks: {
                    // forces step size to be 50 units
                    stepSize: 20
                }
            }
        },
        plugins: {
            legend: {
                position: "bottom",
                align: 'start',
                labels: {
                    usePointStyle: true,
                }
            }
        }
    }
};

const myVisitor = new Chart(
    document.getElementById('myVisitor'),
    vConfig
);