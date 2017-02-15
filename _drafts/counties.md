---
layout: post
title:  "Counties"
categories: election-transparency visualization 
custom-libs: topojson 
---

<form>
<input type="radio" name="level" val="states" checked="checked">States
<input type="radio" name="level" val="counties">Counties 
<input type="radio" name="level" val="districts">Districts 
</form>

<div class="map-target" height="500"></div>
<script src="https://d3js.org/topojson.v2.min.js"></script>
<script src="{{ site.baseurl }}/assets/js/election.js"></script>

