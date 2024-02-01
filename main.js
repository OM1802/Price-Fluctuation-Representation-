document.addEventListener("DOMContentLoaded", function () {
    var barData = [
        { "date": "2024-01-01", "price": 120 },
        { "date": "2024-01-02", "price": 45 },
        { "date": "2024-01-03", "price": 180 },
        { "date": "2024-01-04", "price": 600 },
        { "date": "2024-01-05", "price": 30 },
    ];

    var margin = { top: 40, right: 20, bottom: 60, left: 60 };
    var width = 800 - margin.left - margin.right;
    var height = 400 - margin.top - margin.bottom;

    var parseDate = d3.timeParse("%Y-%m-%d");

    barData.forEach(function (d) {
        d.date = parseDate(d.date);
    });

    var xScale = d3.scaleTime()
        .domain(d3.extent(barData, function (d) { return d.date; }))
        .range([0, width]);

    var yScale = d3.scaleLinear()
        .domain([0, d3.max(barData, function (d) { return d.price; })])
        .range([height, 0]);

    var svgContainer = d3.select("#priceDateGraph")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Bars
    svgContainer.selectAll(".bar")
        .data(barData)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function (d) { return xScale(d.date) - 15; })
        .attr("y", function (d) { return yScale(d.price); })
        .attr("width", 30)
        .attr("height", function (d) { return height - yScale(d.price); });

    // Bar Values
    svgContainer.selectAll(".bar-value")
        .data(barData)
        .enter().append("text")
        .attr("class", "bar-value")
        .attr("x", function (d) { return xScale(d.date); })
        .attr("y", function (d) { return yScale(d.price) - 5; })
        .attr("text-anchor", "middle")
        .text(function (d) { return d.price; });

    // X Axis
    svgContainer.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xScale))
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-0.8em")
        .attr("dy", "0.15em")
        .attr("transform", "rotate(-45)");

    // Y Axis
    svgContainer.append("g")
        .call(d3.axisLeft(yScale))
        .selectAll("text")
        .style("font-weight", "bold")
        .style("color", "blue");
});
