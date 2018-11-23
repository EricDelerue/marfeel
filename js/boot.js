// Put carousel in a IIFE
// Load three different Ring chart
(function() {
  const url = 'http://127.0.0.1/marfeel/';

  // create the svg rings using Ring constructor
  const revenueRing = new Ring({
    title: 'Revenue',
    element: document.querySelector('#revenue'),
    endpoint: url + 'database/revenue.json',
    /* for test purpose only
    dataset: [
      {
        name: 'tablet',
        value: 120000,
      },
      {
        name: 'smartphone',
        value: 80000,
      },
    ],*/
    domain: ['tablet', 'smartphone'],
    range: ['lightgreen', 'darkgreen'],
  });

  const impresionsRing = new Ring({
    title: 'Impresions',
    element: document.querySelector('#impresions'),
    endpoint: url + 'database/impresions.json',
    /* for test purpose only
    dataset: [
      {
        name: 'tablet',
        value: 20000000,
      },
      {
        name: 'smartphone',
        value: 30000000,
      },
    ],*/
    domain: ['tablet', 'smartphone'],
    range: ['lightblue', 'darkblue'],
  });

  const visitsRing = new Ring({
    title: 'Visits',
    element: document.querySelector('#visits'),
    endpoint: url + 'database/visits.json',
    /* for test purpose only
    dataset: [
      {
        name: 'tablet',
        value: 480000000,
      },
      {
        name: 'smartphone',
        value: 120000000,
      },
    ],*/
    domain: ['tablet', 'smartphone'],
    range: ['#ffbf00', '#ff8000'],
  });

  // redraw chart on each resize
  d3.select(window).on('resize', () => {
    revenueRing.redraw();
    impresionsRing.redraw();
    visitsRing.redraw();
  });
})();
