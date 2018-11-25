	
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

console.log('typeof document.querySelector(test)', document.querySelector('#test') instanceof Element );

const options = {
    title: 'Revenue',
    element: document.querySelector('#test'),
    endpoint: from_urls[source].revenue,
    domain: ['tablet', 'smartphone'],
    range: ['lightgreen', 'darkgreen'],
}

// create the svg rings using Ring constructor
const revenueRing = new Ring(options); 

// redraw chart on each resize        
d3.select(window).on('resize', () => {
  revenueRing.redraw();    
});                                   
