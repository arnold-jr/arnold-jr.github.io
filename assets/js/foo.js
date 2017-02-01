---
---
function makeFoo(selectorStr) {
  d3.select(selectorStr)
    .append("circle")
    .attr("r", 100)
    .attr("cx", 500)
}
