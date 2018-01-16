// Nordin Bouchrit //
// 11050608       //

function load() {

	// define margins 
	var margin = { top: 40, right: 30, bottom: 40, left: 37  },
		width = 1200 - margin.right - margin.left,
		height = 600 - margin.top - margin.bottom;

	var svg = d3.select("#price-chart-div")
			.append("svg")
			.attr("width", width + margin.right + margin.left)
			.attr("height", height + margin.top + margin.bottom)	
	  	   .append("g")
			.attr("transform", 
			  	  "translate(" + margin.left + ',' + margin.right + ')');

	var parseTime = d3.timeParse("Y%-%m-%d");

	function customDate(str) {
		var y = str.substr(0,4)
		var m = str.substr(5,2)
		var d = str.substr(8,2)
		return new Date(y,m,d)
	}

	// define the x y scales
	var x = d3.scaleTime()
		.range([0, width - margin.right * 2.5]);
		
	var y = d3.scaleLinear()
		// make sure the height goes upwards in stead of top to bottom
		.range([height, 0]);

	//import the data
	d3.csv("data/price_history.csv", function(error, data){
		// check for errors
		if(error) console.log("Error: data not loaded")

		
		
		// convert data in proper format
		data.forEach(function(d) {
			console.log(d.DATE)
			console.log(typeof(d.DATE))
			d.DATE = customDate(d.DATE);
			console.log(d.DATE)
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
		var lineAAPL = d3.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.AAPL); });

		var lineAMZN = d3.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.AMZN); });

		var lineBABA = d3.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.BABA); });

		var lineBAC = d3.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.BAC); });

		var lineBP = d3.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.BP); });

		var lineBUD = d3.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.BUD); });

		var lineC = d3.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.C); });

		var lineCMCSA = d3.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.CMCSA); });

		var lineCVX = d3.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.CVX); });

		var lineFB = d3.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.FB); });

		var lineGOOGL = d3.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.GOOGL); });

		var lineHD = d3.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.HD); });

		var lineJPM = d3.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.JPM); });

		var lineKO = d3.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.KO); });

		var lineMSFT = d3.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.MSFT); });

		var linePG = d3.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.PG); });

		var linePTR = d3.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.PTR); });

		var lineRDSB = d3.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.RDSB); });

		var lineT = d3.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.T); });

		var lineTM = d3.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.TM); });

		var lineV = d3.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.V); });

		var lineVZ = d3.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.VZ); });

		var lineWFC = d3.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.WFC); });

		var lineWMT = d3.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.WMT); });

		var lineXOM = d3.line()
			.x(function(d) { return x(d.DATE); })
			.y(function(d) { return y(d.XOM); });

		// specify the domains of xscale yscale
		x.domain(d3.extent(data, function(d) { return d.DATE; }) );
		y.domain([0, d3.max(data, function(d) {
			return Math.max(d.AAPL, d.AMZN, d.BABA, d.BAC, d.BP, d.BUD, d.C, d.CMCSA, d.CVX, d.FB, d.GOOGL, d.HD, d.JPM, d.KO, d.MSFT, d.PG, d.PTR, d.RDSB, d.T, d.TM, d.V, d.VZ, d.WFC, d.WMT, d.XOM) })]);


		// Add the valueline path.
		svg.append("path")
		    .data([data])
		    .attr("class", "line")
		    .attr("d", lineAAPL);
		    
		// Add xAxis to svg       
    	svg.append("g")
	    	.attr("class", "x axis")
	        .attr("transform", "translate(0," + height + ")") 
	        .call(d3.axisBottom(x))
	        .style("font-size", "11px");
		
		// Add yAxis to svg 
		svg.append("g")
            .attr("class", "y axis")
            .call(d3.axisLeft(y))
            .style("font-size", "11px")
 

	});
		
}
