'use strict';

//defines - helps make code more readable

///the stores open at 6 am
const openingHour = 6;
///the stores close at 7 pm, or 19th hour without am/pm
const closingHour = 19;

//misc helpers

///takes a military time number, returns a standard time as a string.
function formatTime (hour) {
  let meridiem = 'am';
  if(hour > 12) {
    hour -= 12; //13 o'clock > 1 o'clock
    meridiem = 'pm';
  }
  return `${hour}:00${meridiem}`; //"1:00pm"
}

///returns an empty array with each index as an hour in the day set to zero.
function cleanTotalsArray() {
  let newTotalsArray = [];
  for(let hourIndex = openingHour; hourIndex <= closingHour; hourIndex++) {
    newTotalsArray.push(0);
  }
  return newTotalsArray;
}

///global list of all storelocations
const stores = [];
///global list of how many cookies earned at a certain hour, in the future this will need to be flushed again when re-simulation happens.
const totalsEachHour = cleanTotalsArray();
///and how many we make in a single day
let totalsEachDay = 0;

function StoreLocation(name, min, max, avg) {
  /// Name of the store
  this.name = name;
  /// Minimum customers that can visit in an hour
  this.min = min;
  /// Maximum customers that can visit in an hour
  this.max = max;
  /// Average cookies a single customer will buy.
  this.avg = avg;
  this.simulate = function() {
    let simulatedDay = [];
    let total = 0;
    for(let hour = openingHour; hour <= closingHour; hour++) {
      let customersThisHour = Math.ceil(Math.random() * (this.max - this.min + 1) + this.min);
      //don't forget ceil, avgCookiesPerSale has decimals and you can't buy half a cookie so we assume 0.5 equals an extra cookie
      let salesThisHour = Math.ceil(customersThisHour * this.avg);
      total += salesThisHour;
      // console.log(totalsEachHour[hour-o])
      totalsEachHour[hour - openingHour] += salesThisHour;
      simulatedDay.push(salesThisHour);
    }
    this.simulatedResults = simulatedDay;
    this.total = total;
    totalsEachDay += total;
  };
  this.render = function() {
    let locationTableBody = document.querySelector('tbody');
    //new row
    let locationRow = locationTableBody.appendChild(document.createElement('tr'));

    //first item: the name
    let thName = locationRow.appendChild(document.createElement('th'));
    thName.textContent = this.name;
    // tdName.classList.add(this.name.toLowerCase());

    //the next items: the cookie stats minus total
    for(let hourIndex = openingHour; hourIndex <= closingHour; hourIndex++) {
      let td = locationRow.appendChild(document.createElement('td'));
      td.textContent = this.simulatedResults[hourIndex - openingHour];
      td.classList.add(this.name.toLowerCase());
    }

    //the last item: the total cookies at this location
    let tdTotal = locationRow.appendChild(document.createElement('td'));
    tdTotal.textContent = this.total;
    tdTotal.classList.add(this.name.toLowerCase());
  };
  //there really isn't a reason you'd want an unsimulated StoreLocation, so we just go ahead and do that on init
  this.simulate();
  //and finally add ourselves to the global list of all stores
  stores.push(this);
}

//instantiate our objects

new StoreLocation('Seattle', 23, 65, 6.3);
new StoreLocation('Tokyo', 3, 24, 1.2);
new StoreLocation('Dubai', 11, 38, 3.7);
new StoreLocation('Paris', 20, 38, 2.3);
new StoreLocation('Lima', 1, 16, 4.6);

///document modification - data has been prepared by this point, we just need to add it in.

///Sets up the location data table's header section.
function renderTable() {
  let table = document.querySelector('table');
  let thead = table.appendChild(document.createElement('thead'));
  let theadRow = thead.appendChild(document.createElement('tr'));
  //empty spot as the top left corner.
  theadRow.appendChild(document.createElement('th'));
  //now all the formatted hous
  for(let hour = openingHour; hour <= closingHour; hour++) {
    let th = theadRow.appendChild(document.createElement('th'));
    th.textContent = formatTime(hour);
  }
  //now one for total
  let thTotal = theadRow.appendChild(document.createElement('th'));
  thTotal.textContent = 'Daily Location Total';
}

///Must be called after rendering each StoreLocation
function renderHourlyTotalsRow() {
  let tbody = document.querySelector('tbody');
  let tr = tbody.appendChild(document.createElement('tr'));
  //name of this row
  let th = tr.appendChild(document.createElement('th'));
  th.textContent = 'Totals';
  //totals for each hour
  for(let hourIndex = openingHour; hourIndex <= closingHour; hourIndex++) {
    let td = tr.appendChild(document.createElement('td'));
    td.textContent = totalsEachHour[hourIndex - openingHour];
    td.classList.add('totals');
  }
  //total of all totals
  let td = tr.appendChild(document.createElement('td'));
  td.textContent = totalsEachDay;
  td.classList.add('totals');
}

renderTable();
for(let storeIndex = 0; storeIndex < stores.length; storeIndex++) {
  stores[storeIndex].render();
}
renderHourlyTotalsRow();
