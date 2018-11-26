/**
 * class Ring
 *
 * @params options object
 */

class Ring {
  constructor(options) {
    // options default values ??

    // load in arguments from options object
    this.title = options.title;
    this.element = options.element;
    this.endpoint = options.endpoint;

    /* for test purpose only
      this.setData(options.dataset);  
      logger.info('this.dataset',this.dataset);               
      //end test purpose only */

    // ordinal scale
    this.domain = options.domain; // ['tablet', 'smartphone']
    this.range = options.range; // ['lightgreen', 'darkgreen']

    this.fetchData();
  }

  init() {
    // define width, height, radius and margins
    this.width = this.element.offsetWidth;
    this.height = this.element.offsetHeight;
    this.radius = this.width / 3.5; // 3.5;
    this.thickness = 10;

    this.margin = {
      top: (this.height - this.radius) / 2,
      right: (this.width - this.radius) / 2,
      bottom: (this.height - this.radius) / 2,
      left: (this.width - this.radius) / 2,
    };

    this.center = { x: (this.width / 2), y: (this.height / 2) + 15 };

    // reset parent element and SVG
    this.element.innerHTML = '';

    // set total
    this.total = this.dataset.reduce((acc, currValue) => {
      return acc + currValue.value;
    }, 0);

    this.domain = this.dataset.map(d => d.name);

    // create the ring
    this.draw();
  }

  draw() {
    this.svgViewport = d3
      .select(this.element)
      .append('svg')
      .attr('width', this.width) //  - (this.margin.left + this.margin.right)
      .attr('height', this.height); //  - (this.margin.top + this.margin.bottom)

    const graph = this.svgViewport
      .append('g')
      .attr('transform', `translate(${this.center.x},${this.center.y})`);

    const ring = d3
      .pie()
      .sort(null)
      .value(d => d.value); // It is a comparative ring graph

    const arcPath = d3
      .arc()
      .outerRadius(this.radius) // width / 2: 150 from the center
      .innerRadius(this.radius - this.thickness);

    const colour = d3.scaleOrdinal(this.range);
    colour.domain = this.domain;

    const paths = graph.selectAll('path').data(ring(this.dataset));

    paths
      .enter()
      .append('path')
      .attr('class', 'arc')
      .attr('d', arcPath) // d => arcPath(d)
      .attr('stroke', '#fff') // border color
      .attr('stroke-width', 1) // border width
      .attr('fill', d => colour(d.data.name));

    this.setLegend();
  }

  setLegend() {
    const circle = this.svgViewport
      .append('g')
      //.attr("transform", `translate(${this.center.x},${this.center.y})`)
      .attr('class', 'circle');

    circle
      .append('circle')
      .attr('transform', `translate(${this.center.x},${this.center.y})`)
      .attr('r', this.radius - this.thickness - 3)
      .attr('class', 'circle-center');

    circle
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('x', this.center.x)
      .attr('y', this.center.y - 15)
      .attr('class', 'circle-label')
      .text(this.title.toUpperCase());

    circle
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('x', this.center.x)
      .attr('y', this.center.y + 15)
      .attr('class', 'circle-value')
      .text(() => {
        let string = this.formatThousands(this.total, 'de');
        return this.title == 'Revenue' ? (string += '€') : string;
      });

    const rectangle = this.svgViewport.append('g').attr('class', 'rect');

    rectangle
      .append('rect')
      .attr('x', 0)
      .attr('y', 260)
      .attr('width', '320')
      .attr('height', '60')
      .attr('fill', 'none')
      .attr('class', 'circle-title');
    // Labels
    rectangle
      .append('text')
      .attr('text-anchor', 'start')
      .attr('x', 0)
      .attr('y', 275)
      .attr('class', 'details-label')
      .attr('fill', this.range[0])
      .text(this.capitalizeFirstLetter(this.domain[0]));

    rectangle
      .append('text')
      .attr('text-anchor', 'end')
      .attr('x', 290)
      .attr('y', 275)
      .attr('class', 'details-label')
      .attr('fill', this.range[1])
      .text(this.capitalizeFirstLetter(this.domain[1]));

    // Left Values

    rectangle
      .append('text')
      .attr('text-anchor', 'start')
      .attr('x', 0)
      .attr('y', 305)
      .attr('class', 'details-percent')
      .text(this.percent(this.dataset[0].value) + '%');

    rectangle
      .append('text')
      .attr('text-anchor', 'end')
      .attr('x', 140)
      .attr('y', 305)
      .attr('class', 'details-value')
      .text(() => {
        let string = this.formatThousands(this.dataset[0].value);
        return this.title == 'Revenue' ? (string += '€') : string;
      });

    // Right Values

    rectangle
      .append('text')
      .attr('text-anchor', 'start')
      .attr('x', 150)
      .attr('y', 305)
      .attr('class', 'details-percent')
      .text(this.percent(this.dataset[1].value) + '%');

    rectangle
      .append('text')
      .attr('text-anchor', 'end')
      .attr('x', 290)
      .attr('y', 305)
      .attr('class', 'details-value')
      .text(() => {
        let string = this.formatThousands(this.dataset[1].value);
        return this.title == 'Revenue' ? (string += '€') : string;
      });
  }

  fetchData() {
    const parameters = { method: 'GET' };

    // fetch data from api endpoint
    fetch(this.endpoint, { method: 'GET', mode: 'cors' })
      .then(response => response.json())
      //.then(response => logger.info('response.text', response.text()))
      .then(data => this.setData(data))
      .catch(error => logger.error(error));
  }

  setData(data) {
    this.dataset = data;
    this.init();
  }

  getData() {
    return this.dataset;
  }

  redraw() {
    // full redraw needed
    this.init();
  }

  percent(value) {
    if (typeof value == undefined) return;
    return (value / this.total) * 100;
  }

  formatThousands(value, lang) {
    if (typeof value == undefined) return;
    return value.toLocaleString(lang);
  }

  capitalizeFirstLetter(value) {
    if (typeof value == undefined) return;
    let firstLetter = value[0] || value.charAt(0);
    return firstLetter ? firstLetter.toUpperCase() + value.slice(1) : '';
  }
}
