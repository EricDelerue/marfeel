// IIFE. Tell the parser to parse our JavaScript as a function expression.
// Why? Privacy. In JavaScript, variables are scoped to their containing function.
// Creating a named function pollutes the global name space. It also means the named function is hanging around.
// With the function hanging out, it could accidentally be invoked again.
// Our IIFE isn’t named and therefor can’t accidentally be called later — avoiding any potential security implications.
(function(d3) {
  const from_urls = {
    files: {
      revenue: 'http://127.0.0.1/marfeel/database/revenue.json',
      impresions: 'http://127.0.0.1/marfeel/database/impresions.json',
      visits: 'http://127.0.0.1/marfeel/database/visits.json',
    },
    database: {
      revenue: 'http://127.0.0.1:3000/backend/revenue',
      impresions: 'http://127.0.0.1:3000/backend/revenue',
      visits: 'http://127.0.0.1:3000/backend/revenue',
    },
  };

  const source = 'files'; // or "database"

  const revenueOptions = {
    title: 'Revenue',
    element: document.querySelector('#revenue'),
    endpoint: from_urls[source].revenue,
    domain: ['tablet', 'smartphone'],
    range: ['lightgreen', 'darkgreen'],
  };

  const impresionsOptions = {
    title: 'Impresions',
    element: document.querySelector('#impresions'),
    endpoint: from_urls[source].impresions,
    domain: ['tablet', 'smartphone'],
    range: ['lightblue', 'darkblue'],
  };

  const visitsOptions = {
    title: 'Visits',
    element: document.querySelector('#visits'),
    endpoint: from_urls[source].visits,
    domain: ['tablet', 'smartphone'],
    range: ['#ffbf00', '#ff8000'],
  };

  // create the svg rings using Ring constructor
  const revenueRing = new Ring(revenueOptions);

  const impresionsRing = new Ring(impresionsOptions);

  const visitsRing = new Ring(visitsOptions);

  // redraw chart on each resize
  d3.select(window).on('resize', () => {
    revenueRing.redraw();
    impresionsRing.redraw();
    visitsRing.redraw();
  });
})(window.d3);
