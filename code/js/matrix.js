// Nordin Bouchrit //
// 11050608       //
// SOURCE: https://bl.ocks.org/arpitnarechania/caeba2e6579900ea12cb2a4eb157ce74 //


// Finance

var correlationMatrix = [
		[ 1, 0.81762411, 0.5360019, 0.34711931, 0.37814524],
 		[ 0.81762411, 1, 0.06699282, -0.0593884, -0.00259447],
 		[ 0.5360019, 0.06699282, 1, 0.93764729, 0.87880015],
 		[ 0.34711931, -0.0593884, 0.93764729, 1, 0.91178347],
 		[ 0.37814524, -0.00259447, 0.87880015, 0.91178347, 1]
 		];
		
var labels = ['JPM','BAC','WFC','V','C'];

Matrix({
    container : '#correlation-matrix-div',
    data      : correlationMatrix,
    labels    : labels,
    start_color_P : '#ffffff',
    end_color_P: '#3ee061',
    start_color_N: '#ffffff',
    end_color_N: '#f70e0e'

});

function Matrix(options) {
	var margin = {top: 50, right: 100, bottom: 100, left: 100},
	    width = 600,
	    height = 500,
	    data = options.data,
	    container = options.container,
	    labelsData = options.labels,
	    startColorPositive = options.start_color_P,
	    endColorPositive = options.end_color_P,
	    startColorNegative = options.start_color_N,
	    endColorNegative = options.end_color_N;

	if(!data){
		throw new Error('Please pass data');
	}

	if(!Array.isArray(data) || !data.length || !Array.isArray(data[0])){
		throw new Error('It should be a 2-D array');
	}

    var maxValue = d3.max(data, function(layer) { return d3.max(layer, function(d) { return d; }); });
    var minValue = d3.min(data, function(layer) { return d3.min(layer, function(d) { return d; }); });

   	var numrows = data.length;
	var numcols = data[0].length;

	var svg = d3.select(container).append("svg")
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
	   .append("g")
	    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	    
	var x = d3.scale.ordinal()
	    .domain(d3.range(numcols))
	    .rangeBands([0, width]);

	var y = d3.scale.ordinal()
	    .domain(d3.range(numrows))
	    .rangeBands([0, height]);

	var colorMapPositive = d3.scale.linear()
	    .domain([minValue,maxValue])
	    .range([startColorPositive, endColorPositive]);

	var colorMapNegative = d3.scale.linear()
	    .domain([minValue,maxValue])
	    .range([startColorNegative, endColorNegative]);

	var row = svg.selectAll(".row")
	    .data(data)
	  	.enter().append("g")
	    .attr("class", "row")
	    .attr("transform", function(d, i) { return "translate(0," + y(i) + ")"; });

	var cell = row.selectAll(".cell")
	    .data(function(d) { return d; })
			.enter().append("g")
	    .attr("class", "cell")
	    .attr("transform", function(d, i) { return "translate(" + x(i) + ", 0)"; });

	cell.append('rect')
	    .attr("width", x.rangeBand())
	    .attr("height", y.rangeBand())
	    .style("stroke-width", 0);

	 cell.append("text")
	    .attr("dy", ".32em")
	    .attr("x", x.rangeBand() / 2)
	    .attr("y", y.rangeBand() / 2)
	    .attr("text-anchor", "middle")
	    .style("fill", function(d, i) { return d >= maxValue/2 ? 'white' : 'black'; })
	    .text(function(d, i) { return d; });

	row.selectAll(".cell")
	    .data(function(d, i) { return data[i]; })
	    .style("fill", colorMapPositive);

	var labels = svg.append('g')
		.attr('class', "labels");

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

}