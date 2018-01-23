// define margins 
var margin = { top: 60, right: 37, bottom: 40, left: 70  },
  width = 797 - margin.right - margin.left,
  height = 540 - margin.top - margin.bottom;

  var svg = d3v4.select("#correlation-network")
      .append("svg")
      .attr("width", width + margin.right + margin.left)
      .attr("height", height + margin.top + margin.bottom)  
         .append("g")
      .attr("transform", 
            "translate(" + margin.left + ',' + margin.right + ')');

var color = d3v4.scaleOrdinal(d3v4.schemeCategory20);

var simulation = d3v4.forceSimulation()
    .force("link", d3v4.forceLink().id(function(d) { return d.id; }))
    .force("charge", d3v4.forceManyBody())
    .force("center", d3v4.forceCenter(width / 2, height / 2));

d3v4.json("data/network.json", function(error, graph) {
  if (error) throw error;

  var link = svg.append("g")
      .attr("class", "links")
    .selectAll("line")
    .data(graph.links)
    .enter().append("line")
      .attr("stroke-width", function(d) { return Math.sqrt(d.value) * 2; });

  var node = svg.append("g")
      .attr("class", "nodes")
    .selectAll("circle")
    .data(graph.nodes)
    .enter().append("circle")
      .attr("r", 7)
      .attr("fill", function(d) { return color(d.group); })



  node.append("title")
      .text(function(d) { return d.id; });

  simulation
      .nodes(graph.nodes)
      .on("tick", ticked);

  simulation.force("link")
      .links(graph.links);

  function ticked() {
    link
        .attr("x1", function(d) { return d.source.PositionX * 10 ; })
        .attr("y1", function(d) { return d.source.PositionY * 10 ; })
        .attr("x2", function(d) { return d.target.PositionX  * 10 ; })
        .attr("y2", function(d) { return d.target.PositionY * 10 ; });

    node
        .attr("cx", function(d) { return d.PositionX * 10 ; })
        .attr("cy", function(d) { return d.PositionY * 10; });
  }

});


