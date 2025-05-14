function graficas() {
  // Gráfica de líneas - Suscripciones mensuales
  if (document.getElementById('lineChart')) {
    new Chart(document.getElementById('lineChart'), {
      type: 'line',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
        datasets: [{
          label: 'Suscripciones nuevas',
          data: [80, 130, 110, 160, 190],
          borderColor: 'rgba(0, 123, 255, 1)',
          backgroundColor: 'rgba(0, 123, 255, 0.2)',
          fill: true,
          tension: 0.3
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { position: 'top' } }
      }
    });
  }

  // Gráfica de barras - Beneficio neto por región
  if (document.getElementById('barChart')) {
    new Chart(document.getElementById('barChart'), {
      type: 'bar',
      data: {
        labels: ['Norte', 'Sur', 'Este', 'Oeste'],
        datasets: [{
          label: 'Beneficio neto (en miles USD)',
          data: [95, 75, 105, 90],
          backgroundColor: [
            'rgba(40, 167, 69, 0.7)',
            'rgba(255, 193, 7, 0.7)',
            'rgba(23, 162, 184, 0.7)',
            'rgba(220, 53, 69, 0.7)'
          ]
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: true } }
      }
    });
  }

  // Gráfica de área - Tráfico web diario
  if (document.getElementById('areaChart')) {
    new Chart(document.getElementById('areaChart'), {
      type: 'line',
      data: {
        labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        datasets: [{
          label: 'Visitas al sitio web',
          data: [300, 450, 400, 520, 600, 480],
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          fill: true,
          tension: 0.3
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { position: 'top' } }
      }
    });
  }

  // Gráfica de dona - Reparto de productos más vendidos
  if (document.getElementById('doughnutChart')) {
    new Chart(document.getElementById('doughnutChart'), {
      type: 'doughnut',
      data: {
        labels: ['Smartwatch', 'Auriculares', 'Altavoces', 'Power Banks'],
        datasets: [{
          data: [30, 25, 25, 20],
          backgroundColor: [
            'rgba(255, 206, 86, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(255, 99, 132, 0.8)'
          ]
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { position: 'bottom' } }
      }
    });
  }

  // Gráfica de pastel - Origen de clientes
  if (document.getElementById('pieChart')) {
    new Chart(document.getElementById('pieChart'), {
      type: 'pie',
      data: {
        labels: ['Instagram', 'Google Ads', 'Facebook', 'Recomendaciones'],
        datasets: [{
          data: [35, 30, 20, 15],
          backgroundColor: [
            'rgba(255, 159, 64, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(201, 203, 207, 0.8)'
          ]
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { position: 'bottom' } }
      }
    });
  }

  // Gráfica de dispersión - Duración de sesión vs. compras
  if (document.getElementById('scatterChart')) {
    new Chart(document.getElementById('scatterChart'), {
      type: 'scatter',
      data: {
        datasets: [{
          label: 'Minutos vs. Compras',
          data: [
            { x: 1, y: 1 },
            { x: 2, y: 1 },
            { x: 5, y: 2 },
            { x: 7, y: 3 },
            { x: 10, y: 5 },
            { x: 15, y: 6 },
            { x: 20, y: 7 }
          ],
          backgroundColor: 'rgba(153, 102, 255, 1)'
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          x: { type: 'linear', title: { display: true, text: 'Duración de sesión (minutos)' } },
          y: { title: { display: true, text: 'Compras realizadas' } }
        }
      }
    });
  }
}

