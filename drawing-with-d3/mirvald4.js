function mirvald4 () {

  var width = 650;
  var height = 650;

  var r = 30;
  var keyStep = 5;
  var yArray = d3.range(0, height, keyStep);

  var periodV = height / 2;
  var periodH = width / 2.4;

  // Calculate the points for a sin curve
  var xyArray = yArray.map(function(d) {
    return {
      y: d,
      x: Math.sin(d * 2 * Math.PI / periodV) * width / 2 + width / 2
    };
  });

  // Introduct some noise into the sin curve
  var xyArray = xyArray.map(function(d)
  {
    return {
          y: d.y + Math.sin(d.x * 2 *
    Math.PI / periodH) * height / 16 +
    Math.random() * height / 8,
    x: d.x };
  });

  var svg = d3.select('#root')
  .append('svg')
    .attr('width', width)
    .attr('height', height);

  var path = svg.append('path')
    .data([xyArray.map(function(d) {
      return [d.x, d.y];})]
    )
    .attr('d', d3.line().curve(d3.curveCatmullRomClosed.alpha(0.5)));

  // Now that the path is drawn we can calculate points along the path upon
  // which to place circles.
  var length = path.node().getTotalLength();
  var step = 10;
  var pointsOnPath = d3.range(0, length, step);
  var activeLength = Math.floor(length * 0.5);
  var speed = 2;
  var data = [];

  d3.timer(function(elapsed) {
    var start = Math.floor(elapsed/speed) % length;
    var end = start + activeLength;
    if (end > length){
      end = end % length;
      data = pointsOnPath.filter(function(d) {
        return (d > start || d < end);
      });
    } else {
      data = pointsOnPath.filter(function(d) {
        return (d > start && d < end);
      });
    }
    drawPipe(data);
    });

    function drawPipe(data) {
      circles = svg.selectAll('circle')
        .data(data, function(d) {
          return d;
        });

      circles.enter()
        .append('circle')
          .attr('class', 'circle-valec')
          .attr('cx', 0)
          .attr('cy', 0)
          .attr('r', r)
          .attr('transform', function(d) {
            var p = path.node().getPointAtLength(d);
            return 'translate(' + p.x + ',' + p.y + ')';
          });

      circles.exit().remove();
    }
}
