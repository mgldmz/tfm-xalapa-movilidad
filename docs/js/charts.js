//Cols
const C = {
    bugambilia: '#C2185B',
    verde:      '#2E7D32',
    naranja:    '#F57C00',
    rojo:       '#D32F2F',
    gris:       '#7A8999',
    texto:      '#1E293B',
    borde:      '#E2E8F0',
    azul:       '#1565C0',
};

const defaultFont = {
    family: 'Inter',
    size: 11,
};

Chart.defaults.font = defaultFont;
Chart.defaults.color = C.gris;
Chart.defaults.plugins.legend.display = false;

// 1
new Chart(document.getElementById('chart-modal'), {
    type: 'doughnut',
    data: {
        labels: ['Autobús', 'Auto privado', 'A pie', 'Taxi', 'Otro'],
        datasets: [{
            data: [32.7, 33.2, 23.4, 7.2, 3.5],
            backgroundColor: [
                C.bugambilia,
                C.rojo,
                C.verde,
                C.naranja,
                C.gris,
            ],
            borderWidth: 0,
            hoverOffset: 6,
        }]
    },
    options: {
        cutout: '65%',
        plugins: {
            legend: {
                display: true,
                position: 'right',
                labels: {
                    font: { size: 10 },
                    boxWidth: 10,
                    padding: 8,
                }
            },
            tooltip: {
                callbacks: {
                    label: ctx => ` ${ctx.label}: ${ctx.parsed}%`
                }
            }
        }
    }
});

//2
new Chart(document.getElementById('chart-cambio'), {
    type: 'bar',
    data: {
        labels: ['2014', '2024'],
        datasets: [{
            label: 'Transporte público',
            data: [41, 32.5],
            backgroundColor: [C.bugambilia, C.gris],
            borderRadius: 4,
        }]
    },
    options: {
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: ctx => ` ${ctx.parsed.y}% de los traslados`
                }
            }
        },
        scales: {
            y: {
                grid: { color: C.borde },
                ticks: { callback: v => v + '%' },
                max: 50,
                min: 0,
            },
            x: { grid: { display: false } }
        }
    }
});

//3
new Chart(document.getElementById('chart-vehicular'), {
    type: 'line',
    data: {
        labels: ['2013', '2020', '2024'],
        datasets: [{
            data: [50000, 87000, 200000],
            borderColor: C.bugambilia,
            backgroundColor: 'rgba(194,24,91,0.08)',
            borderWidth: 2,
            pointBackgroundColor: C.bugambilia,
            pointRadius: 5,
            fill: true,
            tension: 0.3,
        }]
    },
    options: {
        plugins: {
            tooltip: {
                callbacks: {
                    label: ctx => ` ${ctx.parsed.y.toLocaleString()} vehículos`
                }
            }
        },
        scales: {
            y: {
                grid: { color: C.borde },
                ticks: {
                    callback: v => (v / 1000) + 'k'
                }
            },
            x: { grid: { display: false } }
        }
    }
});

//4
new Chart(document.getElementById('chart-accidentes'), {
    type: 'bar',
    data: {
        labels: [
            'Lázaro Cárdenas',
            'Ruiz Cortínez',
            'Ávila Camacho',
            '20 de Noviembre',
            'Cto. Presidentes',
            'Av. Xalapa',
        ],
        datasets: [{
            data: [731, 166, 151, 137, 102, 89],
            backgroundColor: [
                C.rojo,
                C.naranja,
                C.naranja,
                C.naranja,
                C.gris,
                C.gris,
            ],
            borderRadius: 4,
        }]
    },
    options: {
        indexAxis: 'y',
        plugins: {
            tooltip: {
                callbacks: {
                    label: ctx => ` ${ctx.parsed.x} accidentes`
                }
            }
        },
        scales: {
            x: {
                grid: { color: C.borde },
                ticks: { font: { size: 10 } }
            },
            y: {
                grid: { display: false },
                ticks: { font: { size: 10 } }
            }
        }
    }
});

//5
new Chart(document.getElementById('chart-hogares'), {
    type: 'doughnut',
    data: {
        labels: ['Sin automóvil', 'Con automóvil'],
        datasets: [{
            data: [57.6, 42.4],
            backgroundColor: [C.bugambilia, C.borde],
            borderWidth: 0,
            hoverOffset: 6,
        }]
    },
    options: {
        cutout: '70%',
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    font: { size: 10 },
                    boxWidth: 10,
                    padding: 8,
                }
            },
            tooltip: {
                callbacks: {
                    label: ctx => ` ${ctx.label}: ${ctx.parsed}%`
                }
            }
        }
    }
});

//6
const eventos = [
    {
        año: '2008',
        titulo: 'Distribuidor La Galaxia',
        sub: 'Infraestructura vehicular · sin mejora en movilidad',
        color: C.rojo,
    },
    {
        año: '2019',
        titulo: 'Proyecto Tren Ligero',
        sub: 'Primera propuesta de transporte masivo',
        color: C.verde,
    },
    {
        año: '2023',
        titulo: 'Cancelación Tren Ligero',
        sub: 'Se priorizan puentes vehiculares',
        color: C.rojo,
    },
    {
        año: '2024',
        titulo: 'Puentes Las Trancas y Urban Center',
        sub: 'Inducción de demanda, problema persiste',
        color: C.naranja,
    },
    {
        año: '2026',
        titulo: 'Sistema Atenas',
        sub: 'Primera priorización del transporte público',
        color: C.bugambilia,
    },
];

const container = document.getElementById('chart-timeline');
eventos.forEach(e => {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.innerHTML = `
        <span class="timeline-year">${e.año}</span>
        <div class="timeline-dot" style="background:${e.color}"></div>
        <div class="timeline-content">
            <div class="t-title">${e.titulo}</div>
            <div class="t-sub">${e.sub}</div>
        </div>
    `;
    container.appendChild(item);
});