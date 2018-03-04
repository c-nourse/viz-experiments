function mirvald1() {

  // Set initial attributes
  var width = 650;
  var height = 650;
  var strokeWidth = 6;
  var r = 1.5 * strokeWidth;
  
  // This object contains the attributes for the containers and the points
  // for the clip paths (points)
  var data = [
    {id: 0, name: 'a', width: 300, height: 300, x: 0,   y: 0,   points: "0,0 300,0   300,300 0,300"},
    {id: 1, name: 'b', width: 150, height: 450, x: 300, y: 0,   points: "0,0 150,150 150,450 0,300"},
    {id: 2, name: 'c', width: 350, height: 150, x: 300, y: 0,   points: "0,0 200,0   350,150 150,150"},
    {id: 3, name: 'd', width: 450, height: 150, x: 0,   y: 300, points: "0,0 300,0   450,150 150,150"},
    {id: 4, name: 'e', width: 200, height: 300, x: 450, y: 150, points: "0,0 200,0   250,300 0,300"},
    {id: 5, name: 'f', width: 500, height: 200, x: 150, y: 450, points: "0,0 500,0   500,200 0,200"},
  ];
  
  function drawCircles (g, r0) {
    // g (id): container in which to draw circles
    // r0 (int): initial radius of the circle;
    var ctnr = d3.select(g);
    var r = r0;
    var ctnrWidth = ctnr.attr('width');
    var ctnrHeight = ctnr.attr('height');
    var side = Math.max(ctnrWidth, ctnrHeight);
  
    while (r < side) {
      ctnr.append('circle')
        .attr('cx', ctnrWidth / 2)
        .attr('cy', ctnrHeight / 2)
        .attr('r', r)
        .attr('class', 'circle-struktura')
        .style('stroke-width', strokeWidth)
  
      r = r + 2 * strokeWidth;
    }
  }
  
  var svg = d3.select('#root')
    .append('svg')
      .attr('width', width)
      .attr('height', height);
  
  var g = svg.selectAll('g')
    .data(data)
    .enter()
    .append('g')
      .attr('width', function(d) { return d.width; })
      .attr('height', function(d) { return d.height; })
      .attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y + ')'; })
      .attr('class', 'cntr')
      .attr('id', function(d) { return 'ctnr-' + d.name; })
  
  g.append('clipPath')
    .attr('id', function(d) { return 'ctnr-clip-' + d.name; })
    .append('polygon')
      .attr('points', function(d) { return d.points; });
  
  for (var i = 0; i < data.length; i++) {
    var gi = '#ctnr-' + data[i]['name'];
    var ri = r * (1 + Math.floor(Math.random() / 2));
    drawCircles(gi, ri);
  }
  
  g.attr('clip-path', function(d) { return 'url(#ctnr-clip-' + d.name + ')'; })

}