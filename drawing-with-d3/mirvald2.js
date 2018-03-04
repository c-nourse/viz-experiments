function mirvald2 () {
  
  // Set initial attributes
  var width = 650;
  var height = 650;
  
  var total = 0;
  var radii = [];
  var maxR = 50;
  var minR = 10;
    
  while (total < width) {
    var r = Math.floor(Math.random() * (maxR - minR) + minR);
    radii.push(r);
    total = total + 2 * r;
  }
  
  var step = 10;
  var cx = 0;
  var cys = d3.range(-step, height + step, step);
  var data = [];
  radii.map(function(r, i) {
    cys.reverse();
    cx = cx + r;
    cys.map(function(cy) {
      data.push({r: r, x: cx, y: cy});
    });

    cx = cx + r;
    return;
  });

  var svg = d3.select('#root')
    .append('svg')
      .attr('width', width)
      .attr('height', height);
  
  svg.selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
      .attr('class', 'circle-mutace')
      .attr('cx', function(d) { return d.x; })
      .attr('cy', function(d) { return d.y; })
      .attr('r', function(d) { return d.r; })
      .style('fill', function(d, i) {
        return i % 2 === 0 ? '#000' : '#fff';
      });

}