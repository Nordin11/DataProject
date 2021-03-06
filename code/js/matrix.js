// ALL THE JAVASCRIPT THAT HAS TO DO WITH THE MATRIX
// source: https://bl.ocks.org/arpitnarechania/caeba2e6579900ea12cb2a4eb157ce74

// define all the data gathered via python 
var labels_Finance = ['JPM','BAC','WFC','V','C']
var correlationMatrix_Finance = [
		[ 1, 0.81762411, 0.5360019, 0.34711931, 0.37814524],
 		[ 0.81762411, 1, 0.06699282, -0.0593884, -0.00259447],
 		[ 0.5360019, 0.06699282, 1, 0.93764729, 0.87880015],
 		[ 0.34711931, -0.0593884, 0.93764729, 1, 0.91178347],
 		[ 0.37814524, -0.00259447, 0.87880015, 0.91178347, 1]
 		];

var labels_Tech = ['GOOGL','MSFT','FB','T','VZ'];
var correlationMatrix_Tech = [
		[ 1, 0.97606687, 0.97614519, 0.45324442, 0.28575139],
		[ 0.97606687, 1, 0.96912033, 0.45803498, 0.31496301],
		[ 0.97614519, 0.96912033, 1, 0.45731985, 0.28751156],
		[ 0.45324442, 0.45803498, 0.45731985, 1, 0.57584617],
		[ 0.28575139, 0.31496301, 0.28751156, 0.57584617, 1]
		];

var labels_Services = ['AMZN','BABA','WMT','HD','CMCSA'];
var correlationMatrix_Services = [
		[ 1, 0.70287888, 0.89262942, 0.95048717, 0.14832415],
		[ 0.70287888, 1, 0.72022178, 0.71114062, 0.66332237],
		[ 0.89262942, 0.72022178, 1, 0.86734233, 0.25847002],
		[ 0.95048717, 0.71114062, 0.86734233, 1, 0.24237633],
		[ 0.14832415, 0.66332237, 0.25847002, 0.24237633, 1]
		];

var labels_Materials = ['XOM','RDSB','PTR','CVX','BP'];
var correlationMatrix_Materials = [
		[ 1, -0.28240457, 0.2409885, 0.46111994, -0.10275468],
		[-0.28240457, 1, 0.6963437, 0.6210914, 0.94904232],
		[ 0.2409885, 0.6963437, 1, 0.75391586, 0.79412953],
		[ 0.46111994, 0.6210914, 0.75391586, 1, 0.67479176],
		[-0.10275468, 0.94904232, 0.79412953, 0.67479176, 1]
		];

var labels_Goods = ['AAPL','PG','BUD','KO','TM'];
var correlationMatrix_Goods = [
		[ 1, 0.85073395, 0.86739672, 0.84005446, 0.6920721],
		[ 0.85073395, 1,  0.92636245, 0.90913085, 0.86179124],
		[ 0.86739672, 0.92636245, 1, 0.89440036, 0.74545251],
		[ 0.84005446, 0.90913085, 0.89440036, 1, 0.82718561],
		[ 0.6920721, 0.86179124, 0.74545251, 0.82718561, 1],
		];

// call every matrix
Matrix({
   	container : '#finance-matrix-div',
	matrix_title: 'Financial industry',
	data      : correlationMatrix_Finance,
	labels    : labels_Finance,
	start_color: '#ff0000',
	end_color: '#00ff27'});

Matrix({
   	container : '#tech-matrix-div',
	matrix_title: 'Tech Industry',
	data      : correlationMatrix_Tech,
	labels    : labels_Tech,
	start_color: '#ff0000',
	end_color: '#00ff27'});

Matrix({
   	container : '#services-matrix-div',
	matrix_title: 'Services',
	data      : correlationMatrix_Services,
	labels    : labels_Services,
	start_color: '#ff0000',
	end_color: '#00ff27'});

Matrix({
   	container : '#materials-matrix-div',
	matrix_title: 'Basic Materials',
	data      : correlationMatrix_Materials,
	labels    : labels_Materials,
	start_color: '#ff0000',
	end_color: '#00ff27'});

Matrix({
   	container : '#goods-matrix-div',
	matrix_title: 'Consumer Goods',
	data      : correlationMatrix_Goods,
	labels    : labels_Goods,
	start_color: '#ff0000',
	end_color: '#00ff27'});

function Matrix(options) {
	// define margins
	var margin = {top: 50, right: 100, bottom: 100, left: 100},
	    width = 600,
	    height = 500,
	    // call the variables
	    data = options.data,
	    container = options.container,
	    matrix_title = options.matrix_title,
	    labelsData = options.labels,
	    startColor = options.start_color,
	    endColor = options.end_color;
	 
	// check for errors  
	if(!data){
		throw new Error('Please pass data');
	}

	if(!Array.isArray(data) || !data.length || !Array.isArray(data[0])){
		throw new Error('It should be a 2-D array');
	}

	// define the max and minimum
    var maxValue = d3.max(data, function(layer) { return d3.max(layer, function(d) { return d; }); });
    var minValue = d3.min(data, function(layer) { return d3.min(layer, function(d) { return d; }); });

    // define number of rows and columns
   	var numrows = data.length;
	var numcols = data[0].length;

	// append the canvas
	var svg = d3.select(container).append("svg")
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
	   .append("g")
	    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	 
	// set x and y scales   
	var x = d3.scale.ordinal()
	    .domain(d3.range(numcols))
	    .rangeBands([0, width]);

	var y = d3.scale.ordinal()
	    .domain(d3.range(numrows))
	    .rangeBands([0, height]);

	// define the colormapping that goes from red (-1) to green (1)
	var colorMap = d3.scale.linear()
	    .domain([-1,1])
	    .range([startColor, endColor]);

	// define the row 
	var row = svg.selectAll(".row")
	    .data(data)
	  	.enter().append("g")
	    .attr("class", "row")
	    .attr("transform", function(d, i) { return "translate(0," + y(i) + ")"; });


	// define the cells
	var cell = row.selectAll(".cell")
	    .data(function(d) { return d; })
			.enter().append("g")
	    .attr("class", "cell")
	    // add data to the cells
	    .attr("transform", function(d, i) { return "translate(" + x(i) + ", 0)"; })
	    .style("fill", colorMap)
	    .on("mouseover", function(d) { d3.select(this).style('fill', '#383838')})
	    .on("mouseout", function(d) { d3.select(this).style('fill', colorMap)})
	    .on("click", function(d,i,j) { 
	    					$('#placeholder-linegraph').hide();
	    					$('#linegraph').show();
							$('html, body').animate({ 
							   scrollTop: $(document).height()-$(window).height() - 40}, 
							   1000, 
							);
							// make sure every line is slightly seen but hidden
	    					d3.selectAll(".line").style("opacity", 0.08).attr("stroke", "grey");
	    					// let the lines of the stocks clicked on pop out
	    					d3.select("#line" + labelsData[i] + "").style("opacity", 1).attr("stroke", "red");
	    					d3.select("#line" + labelsData[j] + "").style("opacity", 1).attr("stroke", "blue");
	    					// make sure that the stocks that are clicked on are the title
	    					d3.select("#stockvstock").text("" + labelsData[i] + " vs. " + labelsData[j] + "");

	    				});  	

	// append the rect to the cells
	cell.append('rect')
	    .attr("width", x.rangeBand())
	    .attr("height", y.rangeBand())
	    .style("stroke-width", 0);

	// append text to the cells
	cell.append("text")
	    .attr("dy", ".32em")
	    .attr("x", x.rangeBand() / 2)
	    .attr("y", y.rangeBand() / 2)
	    .attr("text-anchor", "middle")
	    .attr("class", "correlation-matrix-text")
	    .style("fill", colorMap)
	    .style("opacity", 1)
	    .text(function(d, i) { return d; });

	// append a title to the matrix
	svg.append("text")
	    .attr("dy", ".32em")
	    .attr("x", 300)
	    .attr("y", -30)
	    .attr("text-anchor", "middle")
	    .attr('class', 'matrix-title')
	    .text(matrix_title);

	// append close button
	var close = svg.append("a")
		.attr("xlink:href", "javascript:hideMatrix();")
	    .append("rect")  
	   	.attr("x", 550)
	    .attr("y", -38)
	    .attr("height", 20)
    	.attr("width", 20)
    	.style("fill", "white")
    	.attr("rx", 10)
    	.attr("ry", 10)
	    .attr('class', 'closeBtn');

	// append X to the close button
	svg.append("text")
	    .attr("x", 559.8)
	    .attr("y", -27)
	    .style("fill", "black")
	    .style("font-size", "18px")
	    .attr("dy", ".35em")
	    .attr("text-anchor", "middle")
	    .style("pointer-events", "none")
	    .text("X");

	// call labels
	var labels = svg.append('g')
		.attr('class', "labels");

	// append x axis labels
	var columnLabels = labels.selectAll(".column-label")
	    .data(labelsData)
	    .enter().append("g")
	    .attr("class", "column-label")
	    .attr("transform", function(d, i) { return "translate(" + x(i) + "," + height + ")"; });

	columnLabels.append("line")
		.style("stroke", "black")
	    .style("stroke-width", "1px")
	    .attr("x1", x.rangeBand() / 2)
	    .attr("x2", x.rangeBand() / 2)
	    .attr("y1", 0)
	    .attr("y2", 5);

	columnLabels.append("text")
	    .attr("x", 0)
	    .attr("y", y.rangeBand() / 2)
	    .attr("dy", ".82em")
	    .attr("text-anchor", "end")
	    .attr("transform", "rotate(-60)")
	    .text(function(d, i) { return d; });

	// append y axis labels
	var rowLabels = labels.selectAll(".row-label")
	    .data(labelsData)
	   .enter().append("g")
	    .attr("class", "row-label")
	    .attr("transform", function(d, i) { return "translate(" + 0 + "," + y(i) + ")"; });

	rowLabels.append("line")
		.style("stroke", "black")
	    .style("stroke-width", "1px")
	    .attr("x1", 0)
	    .attr("x2", -5)
	    .attr("y1", y.rangeBand() / 2)
	    .attr("y2", y.rangeBand() / 2);

	rowLabels.append("text")
	    .attr("x", -8)
	    .attr("y", y.rangeBand() / 2)
	    .attr("dy", ".32em")
	    .attr("text-anchor", "end")
	    .text(function(d, i) { return d; });

};