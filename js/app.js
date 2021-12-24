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
  return `${hour}${meridiem}`; //"1pm"
}

//data

const seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avgCookiesPerSale: 6.3,
  simulatedResults: [],
  simulatedTotal: 0,
  getRandomCustomerAmt: function() {
    return Math.ceil(Math.random() * (this.max - this.min + 1) + this.min);
  },
  //processes one "day", setting the simulatedResults and simulatedTotal
  simulate: function() {
    ///final product, we replace simulatedResults with this for the location
    let simulatedDay = [];
    ///total amount generated
    let total = 0;
    for(let hourIndex = openingHour; hourIndex <= closingHour; hourIndex++) {
      let customersThisHour = this.getRandomCustomerAmt();
      //don't forget ceil, avgCookiesPerSale has decimals and you can't buy half a cookie so we assume 0.5 equals an extra cookie
      let salesThisHour = Math.ceil(customersThisHour * this.avgCookiesPerSale);
      total += salesThisHour;
      simulatedDay.push(salesThisHour);
    }
    this.simulatedResults = simulatedDay;
    this.simulatedTotal = total;
  },
  render: function() {
    this.simulate();
    ///place in the document ALL location data sits
    let locationStatsElement = document.getElementById('location_stats');
    ///section we put all THIS SPECIFIC location's data inside
    let section = locationStatsElement.appendChild(document.createElement('section'));
    section.id = this.name.toLowerCase();
    //title this section
    let h3 = section.appendChild(document.createElement('h3'));
    h3.textContent = this.name;
    //make a new list and append
    let ul = section.appendChild(document.createElement('ul'));
    for(let hour = openingHour; hour <= closingHour; hour++) {
      let li = ul.appendChild(document.createElement('li'));
      li.textContent = `${formatTime(hour)}: ${this.simulatedResults[hour - openingHour]}`;
    }
    //finally add the total
    let li = ul.appendChild(document.createElement('li'));
    li.textContent = `Total: ${this.simulatedTotal}`;
  }
};

const tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avgCookiesPerSale: 1.2,
  simulatedResults: [],
  simulatedTotal: 0,
  getRandomCustomerAmt: function() {
    return Math.ceil(Math.random() * (this.max - this.min + 1) + this.min);
  },
  //processes one "day", setting the simulatedResults and simulatedTotal
  simulate: function() {
    ///final product, we replace simulatedResults with this for the location
    let simulatedDay = [];
    ///total amount generated
    let total = 0;
    for(let hourIndex = openingHour; hourIndex <= closingHour; hourIndex++) {
      let customersThisHour = this.getRandomCustomerAmt();
      //don't forget ceil, avgCookiesPerSale has decimals and you can't buy half a cookie so we assume 0.5 equals an extra cookie
      let salesThisHour = Math.ceil(customersThisHour * this.avgCookiesPerSale);
      total += salesThisHour;
      simulatedDay.push(salesThisHour);
    }
    this.simulatedResults = simulatedDay;
    this.simulatedTotal = total;
  },
  render: function() {
    this.simulate();
    ///place in the document ALL location data sits
    let locationStatsElement = document.getElementById('location_stats');
    ///section we put all THIS SPECIFIC location's data inside
    let section = locationStatsElement.appendChild(document.createElement('section'));
    section.id = this.name.toLowerCase();
    //title this section
    let h3 = section.appendChild(document.createElement('h3'));
    h3.textContent = this.name;
    //make a new list and append
    let ul = section.appendChild(document.createElement('ul'));
    for(let hour = openingHour; hour <= closingHour; hour++) {
      let li = ul.appendChild(document.createElement('li'));
      li.textContent = `${formatTime(hour)}: ${this.simulatedResults[hour - openingHour]}`;
    }
    //finally add the total
    let li = ul.appendChild(document.createElement('li'));
    li.textContent = `Total: ${this.simulatedTotal}`;
  }
};

const dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avgCookiesPerSale: 3.7,
  simulatedResults: [],
  simulatedTotal: 0,
  getRandomCustomerAmt: function() {
    return Math.ceil(Math.random() * (this.max - this.min + 1) + this.min);
  },
  //processes one "day", setting the simulatedResults and simulatedTotal
  simulate: function() {
    ///final product, we replace simulatedResults with this for the location
    let simulatedDay = [];
    ///total amount generated
    let total = 0;
    for(let hourIndex = openingHour; hourIndex <= closingHour; hourIndex++) {
      let customersThisHour = this.getRandomCustomerAmt();
      //don't forget ceil, avgCookiesPerSale has decimals and you can't buy half a cookie so we assume 0.5 equals an extra cookie
      let salesThisHour = Math.ceil(customersThisHour * this.avgCookiesPerSale);
      total += salesThisHour;
      simulatedDay.push(salesThisHour);
    }
    this.simulatedResults = simulatedDay;
    this.simulatedTotal = total;
  },
  render: function() {
    this.simulate();
    ///place in the document ALL location data sits
    let locationStatsElement = document.getElementById('location_stats');
    ///section we put all THIS SPECIFIC location's data inside
    let section = locationStatsElement.appendChild(document.createElement('section'));
    section.id = this.name.toLowerCase();
    //title this section
    let h3 = section.appendChild(document.createElement('h3'));
    h3.textContent = this.name;
    //make a new list and append
    let ul = section.appendChild(document.createElement('ul'));
    for(let hour = openingHour; hour <= closingHour; hour++) {
      let li = ul.appendChild(document.createElement('li'));
      li.textContent = `${formatTime(hour)}: ${this.simulatedResults[hour - openingHour]}`;
    }
    //finally add the total
    let li = ul.appendChild(document.createElement('li'));
    li.textContent = `Total: ${this.simulatedTotal}`;
  }
};

const paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avgCookiesPerSale: 2.3,
  simulatedResults: [],
  simulatedTotal: 0,
  getRandomCustomerAmt: function() {
    return Math.ceil(Math.random() * (this.max - this.min + 1) + this.min);
  },
  //processes one "day", setting the simulatedResults and simulatedTotal
  simulate: function() {
    ///final product, we replace simulatedResults with this for the location
    let simulatedDay = [];
    ///total amount generated
    let total = 0;
    for(let hourIndex = openingHour; hourIndex <= closingHour; hourIndex++) {
      let customersThisHour = this.getRandomCustomerAmt();
      //don't forget ceil, avgCookiesPerSale has decimals and you can't buy half a cookie so we assume 0.5 equals an extra cookie
      let salesThisHour = Math.ceil(customersThisHour * this.avgCookiesPerSale);
      total += salesThisHour;
      simulatedDay.push(salesThisHour);
    }
    this.simulatedResults = simulatedDay;
    this.simulatedTotal = total;
  },
  render: function() {
    this.simulate();
    ///place in the document ALL location data sits
    let locationStatsElement = document.getElementById('location_stats');
    ///section we put all THIS SPECIFIC location's data inside
    let section = locationStatsElement.appendChild(document.createElement('section'));
    section.id = this.name.toLowerCase();
    //title this section
    let h3 = section.appendChild(document.createElement('h3'));
    h3.textContent = this.name;
    //make a new list and append
    let ul = section.appendChild(document.createElement('ul'));
    for(let hour = openingHour; hour <= closingHour; hour++) {
      let li = ul.appendChild(document.createElement('li'));
      li.textContent = `${formatTime(hour)}: ${this.simulatedResults[hour - openingHour]}`;
    }
    //finally add the total
    let li = ul.appendChild(document.createElement('li'));
    li.textContent = `Total: ${this.simulatedTotal}`;
  }
};

const lima = {
  name: 'Lima',
  min: 1,
  max: 16,
  avgCookiesPerSale: 4.6,
  simulatedResults: [],
  simulatedTotal: 0,
  //returns a random amount of customers that could visit in an hour
  getRandomCustomerAmt: function() {
    return Math.ceil(Math.random() * (this.max - this.min + 1) + this.min);
  },
  //processes one "day", setting the simulatedResults and simulatedTotal
  simulate: function() {
    ///final product, we replace simulatedResults with this for the location
    let simulatedDay = [];
    ///total amount generated
    let total = 0;
    for(let hourIndex = openingHour; hourIndex <= closingHour; hourIndex++) {
      let customersThisHour = this.getRandomCustomerAmt();
      //don't forget ceil, avgCookiesPerSale has decimals and you can't buy half a cookie so we assume 0.5 equals an extra cookie
      let salesThisHour = Math.ceil(customersThisHour * this.avgCookiesPerSale);
      total += salesThisHour;
      simulatedDay.push(salesThisHour);
    }
    this.simulatedResults = simulatedDay;
    this.simulatedTotal = total;
  },
  render: function() {
    this.simulate();
    ///place in the document ALL location data sits
    let locationStatsElement = document.getElementById('location_stats');
    ///section we put all THIS SPECIFIC location's data inside
    let section = locationStatsElement.appendChild(document.createElement('section'));
    section.id = this.name.toLowerCase();
    //title this section
    let h3 = section.appendChild(document.createElement('h3'));
    h3.textContent = this.name;
    //make a new list and append
    let ul = section.appendChild(document.createElement('ul'));
    for(let hour = openingHour; hour <= closingHour; hour++) {
      let li = ul.appendChild(document.createElement('li'));
      li.textContent = `${formatTime(hour)}: ${this.simulatedResults[hour - openingHour]}`;
    }
    //finally add the total
    let li = ul.appendChild(document.createElement('li'));
    li.textContent = `Total: ${this.simulatedTotal}`;
  }
};

///document modification - data has been prepared by this point, we just need to add it in.

///creates the document results for one location as an unordered list

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

//possible improvements:
//remove copy pasting the same function for each object
//make a list of each location object and iterate through that for simulating results and adding each location to the document
