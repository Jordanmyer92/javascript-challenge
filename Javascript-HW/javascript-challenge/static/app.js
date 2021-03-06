// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#datetime");

// Create event handlers 
button.on("click", runEnter);
//form.on("Filter Table", runEnter);

// Complete the event handler function for the form
function runEnter() {
    //console.log("Hello!")
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    //console.log(inputValue);
    //console.log(tableData);
  
    var filteredData = tableData.filter(td => (Date.parse(td.datetime)) == (Date.parse(inputValue))
    );

    var table = d3.select("table");
    table.html("<tbody></tbody>");
    var tableBody = d3.select("tbody");
    filteredData.forEach(ufoData => {
        var trow = tableBody.append("tr")
        Object.values(ufoData).forEach(value => {
            trow.append("td").text(value)
        })
    })

};