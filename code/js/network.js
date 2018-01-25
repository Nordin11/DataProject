//source: https://bl.ocks.org/Lulkafe/3832d628340038d9484fbd9edb705e01
function simpleSlider () {

    var width = 100,
        value = 0.5, /* Domain assumes to be [0 - 1] */
        event,
        x = 0,
        y = 0;

    function slider (selection) {

        //Line to represent the current value
        var valueLine = selection.append("line")
            .attr("x1", x)
            .attr("x2", x + (width * value))
            .attr("y1", y)
            .attr("y2", y)
            .style({stroke: "#51CB3F",
                    "stroke-linecap": "round",
                    "stroke-width": 6 });

        //Line to show the remaining value
        var emptyLine = selection.append("line")
            .attr("x1", x + (width * value))
            .attr("x2", x + width)
            .attr("y1", y)
            .attr("y2", y)
            .style({
                "stroke": "#ECECEC",
                "stroke-linecap": "round",
                "stroke-width": 6
            });

        var drag = d3.behavior.drag().on("drag", function() {
            var newX = d3.mouse(this)[0];

            if (newX < x)
                newX = x;
            else if (newX > x + width)
                newX = x + width;

            value = (newX - x) / width;
            valueCircle.attr("cx", newX);
            valueLine.attr("x2", x + (width * value));
            emptyLine.attr("x1", x + (width * value));

            if (event)
                event();

            d3.event.sourceEvent.stopPropagation();
        })

        //Draggable circle to represent the current value
        var valueCircle = selection.append("circle")
            .attr("cx", x + (width * value))
            .attr("cy", y)
            .attr("r", 8)
            .style({
                "stroke": "black",
                "stroke-width": 1.0,
                "fill": "white"
            })
            .call(drag);
    }


    slider.x = function (val) {
        x = val;
        return slider;
    }

    slider.y = function (val) {
        y = val;
        return slider;
    }

    slider.value = function (val) {
        if (val) {
            value = val;
            return slider;
        } else {
            return value;
        }
    }

    slider.width = function (val) {
        width = val;
        return slider;
    }

    slider.event = function (val) {
        event = val;
        return slider;
    }

    return slider;
}


    var svg_slider = d3.select("#slider-container-div").append("svg").attr("width", 1000).attr("height", 100),
       slider1 = new simpleSlider();
       
    




svg_slider.append('text')
  .text("Slide me to adjust the correlation lower boundary")
  .attr("x", 460)
  .attr("y", 25)
  .style("fill", "black")
  .style("font-size", "15px")
  .attr("dy", ".35em")
  .attr("text-anchor", "middle")
  .style("pointer-events", "none")

svg_slider.append('text')
  .text("0.0")
  .attr("x", 90)
  .attr("y", 50)
  .style("fill", "black")
  .style("font-size", "15px")
  .attr("dy", ".35em")
  .attr("text-anchor", "middle")
  .style("pointer-events", "none")

svg_slider.append('text')
  .text("1.0")
  .attr("x", 850)
  .attr("y", 50)
  .style("fill", "black")
  .style("font-size", "15px")
  .attr("dy", ".35em")
  .attr("text-anchor", "middle")
  .style("pointer-events", "none")



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
        .attr("id", "corrLine")
        .attr("stroke", function(d) {
                  if (d.value < 0) {
                      return "red"
                  }
                  else {
                      return "green"
                  } 
        })

slider1.width(700).x(125).y(50)
slider1.value(0.001).event(function(){        
  link.attr("stroke-width", function(d) { 
      if (Math.abs(d.value) > slider1.value()) {  
          return Math.sqrt(d.value) * 2.5;
      }
      else {
          return 0;
      }
    });
});
svg_slider.call(slider1);



    var tooltip = d3.select("#correlation-network-div").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    // tooltip Mouse Over info
    var tipMouseover = function(d) {
        var html  = d.name + "<br/>" + d.id; 
        tooltip.html(html)
            .style("left", (d3v4.event.pageX - 100) + "px")
            .style("top", (d3v4.event.pageY - 250) + "px")
           .transition()
            .duration(400) 
            .style("opacity", 1); 
        };
        
        // tooltip mouseout event handler
        var tipMouseout = function(d) {
            tooltip.transition()
                .duration(300)
                .style("opacity", 0); 
        };


    var node = svg.append("g")
        .attr("class", "nodes")
      .selectAll("circle")
      .data(graph.nodes)
      .enter().append("circle")
        .attr("r", function (d) { return d.sum })
        .attr("fill", function(d) { return color(d.group); })
        .on("mouseover", tipMouseover)
        .on("mouseout", tipMouseout);

    svg.append('text')
    .text("Finance")
    .attr("x", -5)
    .attr("y", 5)
    .attr("id", "finance-legend")
    .style("fill", "black")
    .style("font-size", "15px")
    .attr("dy", ".35em")
    .attr("text-anchor", "middle")
    .style("pointer-events", "none");

    svg.append('text')
    .text("Materials")
    .attr("x", 470)
    .attr("y", -320)
    .attr("id", "materials-legend")
    .style("fill", "black")
    .style("font-size", "15px")
    .attr("dy", ".35em")
    .attr("text-anchor", "middle")
    .style("pointer-events", "none");

   svg.append('text')
      .text("Technology")
      .attr("x", 170)
      .attr("y", 315)
      .attr("id", "tech-legend")
      .style("fill", "black")
      .style("font-size", "15px")
      .attr("dy", ".35em")
      .attr("text-anchor", "middle")
      .style("pointer-events", "none");

   svg.append('text')
      .text("Services")
      .attr("x", 300)
      .attr("y", 445)
      .attr("id", "services-legend")
      .style("fill", "black")
      .style("font-size", "15px")
      .attr("dy", ".35em")
      .attr("text-anchor", "middle")
      .style("pointer-events", "none");

    svg.append('text')
        .text("Goods")
        .attr("x", 120)
        .attr("y", 705)
        .attr("id", "goods-legend")
        .style("fill", "black")
        .style("font-size", "15px")
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .style("pointer-events", "none");

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



