// Nordin Bouchrit //
// 11050608       //
// SOURCE: https://bl.ocks.org/d3noob/4db972df5d7efc7d611255d1cc6f3c4f //

function load() {

	// define margins 
	var margin = { top: 40, right: 37, bottom: 40, left: 60  },
		width = 1200 - margin.right - margin.left,
		height = 600 - margin.top - margin.bottom;

	// call the canvas 
	var svg = d3.select("#price-chart-div")
		.append("svg")
		.attr("width", width + margin.right + margin.left)
		.attr("height", height + margin.top + margin.bottom)	
	   .append("g")
		.attr("transform", 
			  "translate(" + margin.left + ',' + margin.right + ')');

	// define function to put date in to proper format
	function customDate(str) {
		var y = str.substr(0,4)
		var m = str.substr(5,2)
		var d = str.substr(8,2)
		return new Date(y,m,d)
	}

	// define the x y scales
	var x = d3.time.scale()
		.range([0, width - margin.right * 2.5]);
		
	var y = d3.scale.linear()
		// make sure the height goes upwards in stead of top to bottom
		.range([height, 0]);

	//import the data
	d3.csv("data/price_relative_gain.csv", function(error, data){
		// check for errors
		if(error) console.log("Error: data not loaded")
		
		// convert data in proper format
		data.forEach(function(d) {
			d.DATE = customDate(d.DATE);
			d.AAPL = +d.AAPL;
			d.AMZN = +d.AMZN;
			d.BABA = +d.BABA;
			d.BAC = +d.BAC;
			d.BP = +d.BP;
			d.BUD = +d.BUD;
			d.C = +d.C;
			d.CMCSA = +d.CMCSA;
			d.CVX = +d.CVX;
			d.FB = +d.FB;
			d.GOOGL = +d.GOOGL;
			d.HD = +d.HD;
			d.JPM = +d.JPM;
			d.KO = +d.KO;
			d.MSFT = +d.MSFT;
			d.PG = +d.PG;
			d.PTR = +d.PTR;
			d.RDSB = +d.RDSB;
			d.T = +d.T;
			d.TM = +d.TM;
			d.V = +d.V;
			d.VZ = +d.VZ;
			d.WFC = +d.WFC;
			d.WMT = +d.WMT;
			d.XOM = +d.XOM;
		});

		// define line of every stock
		var lineAAPL = d3.svg.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.AAPL); });

		var lineAMZN = d3.svg.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.AMZN); });

		var lineBABA = d3.svg.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.BABA); });

		var lineBAC = d3.svg.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.BAC); });

		var lineBP = d3.svg.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.BP); });

		var lineBUD = d3.svg.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.BUD); });

		var lineC = d3.svg.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.C); });

		var lineCMCSA = d3.svg.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.CMCSA); });

		var lineCVX = d3.svg.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.CVX); });

		var lineFB = d3.svg.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.FB); });

		var lineGOOGL = d3.svg.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.GOOGL); });

		var lineHD = d3.svg.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.HD); });

		var lineJPM = d3.svg.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.JPM); });

		var lineKO = d3.svg.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.KO); });

		var lineMSFT = d3.svg.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.MSFT); });

		var linePG = d3.svg.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.PG); });

		var linePTR = d3.svg.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.PTR); });

		var lineRDSB = d3.svg.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.RDSB); });

		var lineT = d3.svg.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.T); });

		var lineTM = d3.svg.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.TM); });

		var lineV = d3.svg.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.V); });

		var lineVZ = d3.svg.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.VZ); });

		var lineWFC = d3.svg.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.WFC); });

		var lineWMT = d3.svg.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.WMT); });

		var lineXOM = d3.svg.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.XOM); });


		// specify the domains of xscale yscale
		x.domain(d3.extent(data, function(d) { return d.DATE; }) );
		y.domain([0, d3.max(data, function(d) {
			return Math.max(d.AAPL, d.AMZN, d.BABA, d.BAC, d.BP, d.BUD, d.C, d.CMCSA, d.CVX, d.FB, d.GOOGL, d.HD, d.JPM, d.KO, d.MSFT, d.PG, d.PTR, d.RDSB, d.T, d.TM, d.V, d.VZ, d.WFC, d.WMT, d.XOM) })]);


		// Add the valueline path for every stock
		svg.append("path")
		    .data([data])
		    .attr("class", "line")
		    .attr("id", "lineAAPL")
		    .style("opacity", 0)
		    .attr("d", lineAAPL);

		svg.append("path")
		    .data([data])
		    .attr("class", "line")
		    .attr("id", "lineAMZN")
		    .style("opacity", 0)
		    .attr("d", lineAMZN);

		svg.append("path")
		    .data([data])
		    .attr("class", "line")
		    .attr("id", "lineBABA")
		    .style("opacity", 0)
		    .attr("d", lineBABA);

		svg.append("path")
		    .data([data])
		    .attr("class", "line")
		    .attr("id", "lineBAC")
		    .style("opacity", 0)
		    .attr("d", lineBAC);

		svg.append("path")
		    .data([data])
		    .attr("class", "line")
		    .attr("id", "lineBP")
		    .style("opacity", 0)
		    .attr("d", lineBP);

		svg.append("path")
		    .data([data])
		    .attr("class", "line")
		    .attr("id", "lineBUD")
		    .style("opacity", 0)
		    .attr("d", lineBUD);

		svg.append("path")
		    .data([data])
		    .attr("class", "line")
		    .attr("id", "lineC")
		    .style("opacity", 0)
		    .attr("d", lineC);

		svg.append("path")
		    .data([data])
		    .attr("class", "line")
		    .attr("id", "lineCMCSA")
		    .style("opacity", 0)
		    .attr("d", lineCMCSA);

		svg.append("path")
		    .data([data])
		    .attr("class", "line")
		    .attr("id", "lineCVX")
		    .style("opacity", 0)
		    .attr("d", lineCVX);

		svg.append("path")
		    .data([data])
		    .attr("class", "line")
		    .attr("id", "lineFB")
		    .style("opacity", 0)
		    .attr("d", lineFB);	 

		svg.append("path")
		    .data([data])
		    .attr("class", "line")
		    .attr("id", "lineGOOGL")
		    .style("opacity", 0)
		    .attr("d", lineGOOGL);	

		svg.append("path")
		    .data([data])
		    .attr("class", "line")
		    .attr("id", "lineHD")
		    .style("opacity", 0)
		    .attr("d", lineHD);

		svg.append("path")
		    .data([data])
		    .attr("class", "line")
		    .attr("id", "lineJPM")
		    .style("opacity", 0)
		    .attr("d", lineJPM);

		svg.append("path")
		    .data([data])
		    .attr("class", "line")
		    .attr("id", "lineKO")
		    .style("opacity", 0)
		    .attr("d", lineKO);

		svg.append("path")
		    .data([data])
		    .attr("class", "line")
		    .attr("id", "lineMSFT")
		    .style("opacity", 0)
		    .attr("d", lineMSFT);

		svg.append("path")
		    .data([data])
		    .attr("class", "line")
		    .attr("id", "linePG")
		    .style("opacity", 0)
		    .attr("d", linePG);

		svg.append("path")
		    .data([data])
		    .attr("class", "line")
		    .attr("id", "linePTR")
		    .style("opacity", 0)
		    .attr("d", linePTR);

		svg.append("path")
		    .data([data])
		    .attr("class", "line")
		    .attr("id", "lineRDSB")
		    .style("opacity", 0)
		    .attr("d", lineRDSB);

		svg.append("path")
		    .data([data])
		    .attr("class", "line")
		    .attr("id", "lineT")
		    .style("opacity", 0)
		    .attr("d", lineT);

		svg.append("path")
		    .data([data])
		    .attr("class", "line")
		    .attr("id", "lineTM")
		    .style("opacity", 0)
		    .attr("d", lineTM);

		svg.append("path")
		    .data([data])
		    .attr("class", "line")
		    .attr("id", "lineV")
		    .style("opacity", 0)
		    .attr("d", lineV);

		svg.append("path")
		    .data([data])
		    .attr("class", "line")
		    .attr("id", "lineVZ")
		    .style("opacity", 0)
		    .attr("d", lineVZ);

		svg.append("path")
		    .data([data])
		    .attr("class", "line")
		    .attr("id", "lineWFC")
		    .style("opacity", 0)
		    .attr("d", lineWFC);
		
		svg.append("path")
		    .data([data])
		    .attr("class", "line")
		    .attr("id", "lineWMT")
		    .style("opacity", 0)
		    .attr("d", lineWMT);	

		svg.append("path")
		    .data([data])
		    .attr("class", "line")
		    .attr("id", "lineXOM")
		    .style("opacity", 0)
		    .attr("d", lineXOM);   
		
		// Define the axes
		var xAxis = d3.svg.axis().scale(x)
    		.orient("bottom");

		var yAxis = d3.svg.axis().scale(y)
    		.orient("left");
    		      
		// Add xAxis to svg       
    	svg.append("g")
	    	.attr("class", "x axis")
	        .attr("transform", "translate(0," + height + ")") 
	        .call(xAxis)
	        .style("font-size", "11px");
		
		// Add yAxis to svg 
		svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .style("font-size", "11px")
 		
 		// call the y axis title
		svg.append("text")
			.attr("class", "y-ax-title")
		    .attr("x", -30)
		    .attr("y", -45)
		    .attr("dy", ".32em")
		    .attr("text-anchor", "end")
		    .text("Average price change");

		// append space for the titles
		svg.append("text")
	    	.attr("dy", ".32em")
	    	.attr("x", 495)
	    	.attr("y", -20)
	    	.attr("text-anchor", "middle")
	    	.attr("class", "chart-title")
	    	.attr("id", "stockvstock" )
	    	.style("opacity", 1)
	    	.text("Stock vs Stock");

	    // append close button
		svg.append("a")
			.attr("xlink:href", "javascript:hideChart();")
		    .append("rect")  
		   	.attr("x", 990)
		    .attr("y", -32)
		    .attr("height", 20)
	    	.attr("width", 20)
	    	.style("fill", "white")
	    	.attr("rx", 10)
	    	.attr("ry", 10)
		    .attr('class', 'closeBtn');

		// append legenda
		svg.append("rect")
			.attr("x", 625)
		    .attr("y", -32)
		    .attr("height", 20)
	    	.attr("width", 20)
	    	.style("fill", "blue")
	    	.attr("rx", 10)
	    	.attr("ry", 10);

		svg.append("rect")
			.attr("x", 345)
		    .attr("y", -32)
		    .attr("height", 20)
	    	.attr("width", 20)
	    	.style("fill", "red")
	    	.attr("rx", 10)
	    	.attr("ry", 10);

		// append X to close button
		svg.append("text")
		    .attr("x", 999.8)
		    .attr("y", -22)
		    .style("fill", "black")
		    .style("font-size", "18px")
		    .attr("dy", ".35em")
		    .attr("text-anchor", "middle")
		    .style("pointer-events", "none")
		    .text("X");

	});
		
}
