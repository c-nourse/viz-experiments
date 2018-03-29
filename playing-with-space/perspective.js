// Inspired by https://www.typographicposters.com/faak-paat-studio

function perspective () {
  var width = 650;
  var height = 650;

  var g = d3.select('#ctnr')
  var path = d3.select('#route')

  var length = path.node().getTotalLength();
  var step = 35;
  var pointsOnPath = d3.range(0, length, step);
  var r = 35;

  const texture = textures
    .lines()
    .size(4)
    .strokeWidth(1);
  
  g.call(texture);

  console.log(texture.url());

  g.selectAll('circle')
    .data(pointsOnPath)
    .enter()
    .append('circle')
      .attr('class', 'c')
      .attr('cx', 0)
      .attr('cy', 0)
      .attr('r', function(d) {
        var r1 = 10 + r * 1.5 * (d / length);
        return r1
      })
      .attr('transform', function(d){
        var p =  path.node().getPointAtLength(d);
        return "translate(" + p.x + "," + p.y + ")";
      })
      .attr('transform-origin', 'center')
      .style('fill', function(d) {
        return texture.orientation('vertical').url()
      });

}