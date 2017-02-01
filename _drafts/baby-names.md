---
layout: post
title:  "How Zipfian Was My Baby?"
categories: data update
custom-libs: nv.d3
---

<svg id="chart1" style="width:100%" height="400px" ></svg>
<script src="{{ site.baseurl }}/assets/js/stackedArea.js"></script>
<script type="text/javascript">
  makeStackedArea("svg#chart1", "{{ site.baseurl }}/assets/json/babyNameData.json");
</script>

And here is some text in between...

<svg id="chart2" style="height:200px;width:100%"></svg>
<script src="{{ site.baseurl }}/assets/js/foo.js"></script>
<script type="text/javascript">
  makeFoo("svg#chart2");
</script>

The analysis can be found [here](https://github.com/arnold-jr/baby-names).

[jekyll-docs]: http://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
