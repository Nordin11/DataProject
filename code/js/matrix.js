

// Finance
(function ($) {
	
	$(document).ready(function (){

	    $('.finance-matrix').hide();
	    $('.tech-matrix').hide();
	    $('.services-matrix').hide();
	    $('.materials-matrix').hide();
	    $('.goods-matrix').hide();
	    
	    var finance = 1;
	    var tech = 1;
	    var services = 1;
	    var materials = 1;
	    var goods = 1;

	    // show when clicked  
	    while (finance == 1) {
	        $('.financeTrigger').click(function(){
	        	
	        	$('.tech-matrix').hide();
	    		$('.services-matrix').hide();
	    		$('.materials-matrix').hide();
	   			$('.goods-matrix').hide();

	            $(".finance-matrix").show();
	            finance = finance * -1;


	        });
	    }
	    while (finance == -1) {
	    	$('.financeTrigger').click(function(){
	            $(".finance-matrix").hide();
	            finance = finance * -1;
	            console.log(finance)  
	        });
	    }
	    while (tech == 1) {
	       	$('.techTrigger').click(function(){
	            
	            $('.finance-matrix').hide();
	    		$('.services-matrix').hide();
	    		$('.materials-matrix').hide();
	    		$('.goods-matrix').hide();

	            $(".tech-matrix").show();
	            tech = tech * -1;

	            $('.techTrigger').click(function(){
	            	$(".tech-matrix").hide();

	            	tech = tech *-1;
	        	}); 
	        });
	    }

	    if (services == 1) {
	       	$('.servicesTrigger').click(function(){
	            
	            $('.finance-matrix').hide();
	    		$('.tech-matrix').hide();
	    		$('.materials-matrix').hide();
	    		$('.goods-matrix').hide();

	            $(".services-matrix").show();
	            services = services * -1;

	            $('.servicesTrigger').click(function(){
	            	$(".services-matrix").hide();
	            	services = services * -1; 
	        	});
	        });
	    }

	    if (materials == 1) {
	       	$('.materialsTrigger').click(function(){
	            
	            $('.finance-matrix').hide();
	    		$('.tech-matrix').hide();
	    		$('.services-matrix').hide();
	    		$('.goods-matrix').hide();

	            $(".materials-matrix").show();
	            materials = materials * -1;

	            $('.materialsTrigger').click(function(){
	            	$(".materials-matrix").hide();
	            	materials = materials * -1; 
	        	});
	        });
	    }

	    if (goods == 1) {
	    	$('.goodsTrigger').click(function(){
	            
	            $('.finance-matrix').hide();
	    		$('.tech-matrix').hide();
	    		$('.services-matrix').hide();
	    		$('.materials-matrix').hide();

	            $(".goods-matrix").show();
	            goods = goods * -1;

	            $('.goodsTrigger').click(function(){
	            	$(".goods-matrix").hide();
	            	goods = goods * -1; 
	        	});
	        });
	    }

	    
       
	}());
}(jQuery));

var labels_Finance = ['JPM','BAC','WFC','V','C'];
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

var labels_Materials = ['XOM','RDS-B','PTR','CVX','BP']
var correlationMatrix_Materials = [
		[ 1, -0.28240457, 0.2409885, 0.46111994, -0.10275468],
		[-0.28240457, 1, 0.6963437, 0.6210914, 0.94904232],
		[ 0.2409885, 0.6963437, 1, 0.75391586, 0.79412953],
		[ 0.46111994, 0.6210914, 0.75391586, 1, 0.67479176],
		[-0.10275468, 0.94904232, 0.79412953, 0.67479176, 1]
		];

labels_Goods = ['AAPL','PG','BUD','KO','TM'];
var correlationMatrix_Goods = [
		[ 1, 0.85073395, 0.86739672, 0.84005446, 0.6920721],
		[ 0.85073395, 1,  0.92636245, 0.90913085, 0.86179124],
		[ 0.86739672, 0.92636245, 1, 0.89440036, 0.74545251],
		[ 0.84005446, 0.90913085, 0.89440036, 1, 0.82718561],
		[ 0.6920721, 0.86179124, 0.74545251, 0.82718561, 1],
		];

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
	var margin = {top: 50, right: 100, bottom: 100, left: 100},
	    width = 600,
	    height = 500,
	    data = options.data,
	    container = options.container,
	    matrix_title = options.matrix_title,
	    labelsData = options.labels,
	    startColor = options.start_color,
	    endColor = options.end_color;
	   
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

	var colorMap = d3.scale.linear()
	    .domain([-1,1])
	    .range([startColor, endColor]);

	var row = svg.selectAll(".row")
	    .data(data)
	  	.enter().append("g")
	    .attr("class", "row")
	    .attr("transform", function(d, i) { return "translate(0," + y(i) + ")"; });

	var cell = row.selectAll(".cell")
	    .data(function(d) { return d; })
			.enter().append("g")
	    .attr("class", "cell")
	    .attr("transform", function(d, i) { return "translate(" + x(i) + ", 0)"; })
	    .style("fill", colorMap)
	    .on("mouseover", function(d) { d3.select(this).style('fill', '#383838')})
	    .on("mouseout", function(d) { d3.select(this).style('fill', colorMap)});

	cell.append('rect')
	    .attr("width", x.rangeBand())
	    .attr("height", y.rangeBand())
	    .style("stroke-width", 0);

	 cell.append("text")
	    .attr("dy", ".32em")
	    .attr("x", x.rangeBand() / 2)
	    .attr("y", y.rangeBand() / 2)
	    .attr("text-anchor", "middle")
	    .attr("class", "correlation-matrix-text")
	    .style("fill", colorMap)
	    .style("opacity", 1)
	    .text(function(d, i) { return d; });

	svg.append("text")
	    .attr("dy", ".32em")
	    .attr("x", 300)
	    .attr("y", -30)
	    .attr("text-anchor", "middle")
	    .attr('class', 'matrix-title')
	    .text(matrix_title);
	
	var close = svg.append("text")
	    .attr("dy", ".32em")
	   	.attr("x", 550)
	    .attr("y", -30)
	    .attr("text-anchor", "middle")
	    .attr('class', 'btn')
	    .text('X');

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



};