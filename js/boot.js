// IIFE. Tell the parser to parse our JavaScript as a function expression.
// Why? For privacy. In JavaScript, variables are scoped to their containing function.
// Creating a named function pollutes the global name space. It also means the named function is hanging around.
// With the function hanging out, it could accidentally be invoked again.
// Our IIFE isn’t named and therefor can’t accidentally be called later — avoiding any potential security implications.
(function(d3) {
  const server = 'http://127.0.0.1';
  const from_urls = {
    files: {
      revenue: server + '/marfeel/database/revenue.json',
      impresions: server + '/marfeel/database/impresions.json',
      visits: server + '/marfeel/database/visits.json',
    },
    database: {
      revenue: server + ':3000/backend/revenue',
      impresions: server + ':3000/backend/revenue',
      visits: server + ':3000/backend/revenue',
    },
  };

  const source = 'files'; // or "database" (doesn't work on dev.ericdelerue.com)

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

  /**
   * Mini slider
   *
  
  var marfeel_slider = function(settings) {
    const that = this;

  };
  
  marfeel_slider.prototype.init = function () {
    const that = this;
    
    const graphicsPanel = document.getElementById('rings-container');

  };
  
  marfeel_slider.prototype.setDots = function () {  
    const that = this;
     
    const dots = document.querySelectorAll('.dot');
	  const dotsNumber = dots.length;

	  const dot1 = document.getElementById('dot1');
	  const dot2 = document.getElementById('dot2');
	  const dot3 = document.getElementById('dot3');

	  for (i = 0; i < dotsNumber; i++) {
	    dots[i].classList.remove('selected');
	  }

	  dot1.classList.add('selected');
	  
  };
    
  */

  function addListenerMultiEvents(el, ev, fn) {
    ev.split(' ').forEach(function(e) {
      return el.addEventListener(e, fn, false);
    });
  }

  const dots = document.querySelectorAll('.dot');
  const dotsNumber = dots.length;

  const dot1 = document.getElementById('dot1');
  const dot2 = document.getElementById('dot2');
  const dot3 = document.getElementById('dot3');

  for (i = 0; i < dotsNumber; i++) {
    dots[i].classList.remove('selected');
  }

  dot1.classList.add('selected');

  const graphicsPanel = document.getElementById('rings-container');

  dot1.addEventListener('click', e => {
    e.preventDefault();
    for (i = 0; i < dotsNumber; i++) {
      dots[i].classList.remove('selected');
    }

    dot1.classList.add('selected');

    graphicsPanel.style.transform = 'translateX(0px)';
  });

  dot2.addEventListener('click', e => {
    e.preventDefault();
    for (i = 0; i < dotsNumber; i++) {
      dots[i].classList.remove('selected');
    }

    dot2.classList.add('selected');

    graphicsPanel.style.transform = 'translateX(-350px)';
  });

  dot3.addEventListener('click', e => {
    e.preventDefault();
    for (i = 0; i < dotsNumber; i++) {
      dots[i].classList.remove('selected');
    }

    dot3.classList.add('selected');

    graphicsPanel.style.transform = 'translateX(-700px)';
  });

  /*  
  addListenerMultiEvents(dot1, 'mouseup touchend', e => {
    e.preventDefault();
    for (i = 0; i < dotsNumber; i++) {
      dots[i].classList.remove('selected');
    }

    dot1.classList.add('selected');

    graphicsPanel.style.transform = 'translateX(0px)';
  });
  
  addListenerMultiEvents(dot2, 'mouseup touchend', e => {
    e.preventDefault();
    for (i = 0; i < dotsNumber; i++) {
      dots[i].classList.remove('selected');
    }

    dot2.classList.add('selected');

    graphicsPanel.style.transform = 'translateX(-350px)';
  });
  
  addListenerMultiEvents(dot3, 'mouseup touchend', e => {
    e.preventDefault();
    for (i = 0; i < dotsNumber; i++) {
      dots[i].classList.remove('selected');
    }

    dot3.classList.add('selected');

    graphicsPanel.style.transform = 'translateX(-700px)';
  });
  */
  
})(window.d3);
