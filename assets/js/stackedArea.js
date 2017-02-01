function makeStackedArea(selectorStr,jsonDataURL) {
  d3.json(jsonDataURL, function(data) {
    nv.addGraph(function() {
      var chart = nv.models.stackedAreaChart()
                    .margin({right: 100})
                    .x(function(d) { return d[0] })   
                    .y(function(d) { return d[1] })   
                    .useInteractiveGuideline(true)    
                    .rightAlignYAxis(true)      
                    .duration(500)
                    .showControls(true)       
                    .clipEdge(true)
                    .style('expand');
      
      //var state = chart.state;
      //
			//state._setState = function(){
      //  var settings = _getState();

      //  if (JSON.stringify(settings) === JSON.stringify(state)) {
      //      return false;
      //  }
      //  for (var key in settings) {
      //      if (state[key] === undefined) {
      //          state[key] = {};
      //      }
      //      state[key] = settings[key];
      //      changed = true;
      //  }
      //  return true;
      //};
 
        
      //for(var i=0; i < state.disabled.length; i++) {
      //  state.disabled[i] = true;
      //}

      //Format x-axis labels with custom function.
      chart.xAxis
          .tickFormat(d3.format('d'));

      chart.yAxis
          .tickFormat(d3.format(',.2f'));

      d3.select('#chart1')
        .datum(data)
        .call(chart);

      nv.utils.windowResize(chart.update);

      return chart;
    });
  })
}
